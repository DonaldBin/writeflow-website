"use client";

import { useTranslation } from "@/lib/i18n";

export default function RefundPage() {
  const { t, tRaw } = useTranslation();
  const email = t("common.contactEmail");

  const sections = tRaw("refund.sections") as { title: string; content: string }[];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("refund.title")}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {t("refund.lastUpdated")}
        </p>

        <div className="mt-10 space-y-10 text-slate-600 leading-relaxed">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                {section.title}
              </h2>
              <div className="whitespace-pre-line">
                {section.content.replace(/\{\{email\}\}/g, email).split("\n").map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-1" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
