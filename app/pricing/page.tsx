"use client";

import { PricingCards } from "@/components/pricing-cards";
import { useTranslation } from "@/lib/i18n";

export default function PricingPage() {
  const { t } = useTranslation();

  const faqs = [
    { q: "pricing.faq1Q", a: "pricing.faq1A" },
    { q: "pricing.faq2Q", a: "pricing.faq2A" },
    { q: "pricing.faq3Q", a: "pricing.faq3A" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t("pricing.title")}
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            {t("pricing.subtitle")}
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16 md:pb-24">
        <PricingCards />
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            {t("pricing.faqTitle")}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{t(faq.q)}</h3>
                <p className="mt-2 text-slate-500">{t(faq.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
