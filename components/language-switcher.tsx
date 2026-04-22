"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { Globe, Check } from "lucide-react";

const locales = [
  { code: "en" as const, label: "English" },
  { code: "zh-CN" as const, label: "简体中文" },
  { code: "zh-TW" as const, label: "繁體中文" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {locales.find((l) => l.code === locale)?.label ?? "English"}
        </span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-1.5 w-40 rounded-xl border border-slate-100 bg-white py-1 shadow-lg">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors ${
                  locale === l.code
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {l.label}
                {locale === l.code && <Check className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
