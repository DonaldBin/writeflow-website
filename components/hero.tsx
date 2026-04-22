"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 py-16 md:py-24 lg:flex-row lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="w-3.5 h-3.5" />
              {t("home.badge")}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t("home.title")}
              <span className="block mt-2 text-slate-500 font-normal text-2xl sm:text-3xl lg:text-4xl">
                {t("home.subtitle")}
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-500 leading-relaxed">
              {t("home.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                {t("home.installBtn")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                {t("home.viewPricingBtn")}
              </Link>
            </div>

            <p className="text-sm text-slate-400">
              {t("home.freeQuota")}
            </p>
          </div>

          {/* Right mockup */}
          <div className="lg:w-1/2 w-full">
            <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-white border border-slate-200 px-3 py-1 text-xs text-slate-400">
                  {t("home.mockupUrl")}
                </div>
              </div>

              {/* Mockup content */}
              <div className="p-5 space-y-4">
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded bg-slate-200" />
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-5/6 rounded bg-slate-200" />
                  <div className="h-2 w-2/3 rounded bg-slate-200" />
                </div>

                <div className="relative rounded-lg border border-indigo-100 bg-indigo-50/60 p-3">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("home.mockupTabHint")}
                    <span className="inline-flex items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ml-1">
                      Tab
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
                  <span className="text-xs text-slate-500">{t("home.mockupSelectedText")}</span>
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-700">
                    Text
                  </span>
                  <div className="ml-auto flex gap-1">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t("home.mockupRewrite")}</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t("home.mockupPolish")}</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t("home.mockupTranslate")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
