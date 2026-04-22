"use client";

import { Keyboard, MousePointerClick, Cpu, Mail, MessageCircle, FileText, ClipboardList } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Keyboard,
      title: t("home.feature1Title") as string,
      description: t("home.feature1Desc") as string,
    },
    {
      icon: MousePointerClick,
      title: t("home.feature2Title") as string,
      description: t("home.feature2Desc") as string,
    },
    {
      icon: Cpu,
      title: t("home.feature3Title") as string,
      description: t("home.feature3Desc") as string,
    },
  ];

  const useCases = [
    { icon: Mail, label: t("home.useCase1") as string },
    { icon: MessageCircle, label: t("home.useCase2") as string },
    { icon: FileText, label: t("home.useCase3") as string },
    { icon: ClipboardList, label: t("home.useCase4") as string },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("home.featuresTitle")}
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            {t("home.featuresSubtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-slate-900 mb-8">
            {t("home.useCasesTitle")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                <useCase.icon className="h-4 w-4 text-indigo-500" />
                {useCase.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
