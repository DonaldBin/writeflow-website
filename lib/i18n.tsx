"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Locale } from "./translations";

const STORAGE_KEY = "writeflow-locale";

function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language;
  if (lang.startsWith("zh-Hant") || lang === "zh-TW" || lang === "zh-HK") return "zh-TW";
  if (lang.startsWith("zh")) return "zh-CN";
  return "en";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && (stored === "en" || stored === "zh-CN" || stored === "zh-TW")) return stored;
  return getBrowserLocale();
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tRaw: (key: string) => unknown;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function resolveValue(locale: Locale, key: string): unknown {
  const keys = key.split(".");
  let value: unknown = translations[locale];
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // fallback to en
      let fallback: unknown = translations["en"];
      for (const fk of keys) {
        if (fallback && typeof fallback === "object" && fk in fallback) {
          fallback = (fallback as Record<string, unknown>)[fk];
        } else {
          return key;
        }
      }
      return fallback;
    }
  }
  return value;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newLocale);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = resolveValue(locale, key);
      if (typeof value === "string") return value;
      return String(value ?? key);
    },
    [locale]
  );

  const tRaw = useCallback(
    (key: string): unknown => {
      return resolveValue(locale, key);
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tRaw }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return ctx.locale;
}
