"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function PricingCards() {
  const { t } = useTranslation();
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");

  const email = t("common.contactEmail") as string;

  const plans = [
    {
      key: "free",
      price: "$0",
      period: t("pricing.perMonth") as string,
      priceNote: "",
      highlighted: false,
    },
    {
      key: "pro",
      price: billing === "yearly" ? "$9.9" : "$14.9",
      period: t("pricing.perMonth") as string,
      priceNote:
        billing === "yearly"
          ? (t("pricing.billedYearly") as string).replace("${price}", "$118.8")
          : (t("pricing.billedMonthly") as string),
      highlighted: true,
    },
    {
      key: "ultra",
      price: "$79",
      period: t("pricing.perMonth") as string,
      priceNote: (t("pricing.billedMonthly") as string),
      highlighted: false,
    },
  ];

  const featureKeys: Record<string, string[]> = {
    free: [
      "pricing.freeFeature1",
      "pricing.freeFeature2",
      "pricing.freeFeature3",
      "pricing.freeFeature4",
      "pricing.freeFeature5",
    ],
    pro: [
      "pricing.proFeature1",
      "pricing.proFeature2",
      "pricing.proFeature3",
      "pricing.proFeature4",
      "pricing.proFeature5",
    ],
    ultra: [
      "pricing.ultraFeature1",
      "pricing.ultraFeature2",
      "pricing.ultraFeature3",
      "pricing.ultraFeature4",
      "pricing.ultraFeature5",
      "pricing.ultraFeature6",
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              billing === "yearly"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {t("pricing.yearly")}
          </button>
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              billing === "monthly"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {t("pricing.monthly")}
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`relative flex flex-col rounded-2xl p-8 transition-all hover:scale-[1.02] ${
              plan.highlighted
                ? "border-2 border-indigo-600 bg-white shadow-xl shadow-indigo-100"
                : "border border-slate-200 bg-white shadow-sm hover:shadow-lg"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                {t("pricing.mostPopular")}
              </span>
            )}

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {t(`pricing.${plan.key}Name`)}
                </h3>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              {plan.priceNote && (
                <p className="mt-1 text-xs text-slate-400">{plan.priceNote}</p>
              )}
              <p className="mt-2 text-sm text-slate-500">
                {t(`pricing.${plan.key}Desc`)}
              </p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {featureKeys[plan.key].map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${email}`}
              className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                plan.highlighted
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:-translate-y-0.5"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
            >
              {t(`pricing.${plan.key}Cta`)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
