import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    nameCn: "免费版",
    price: "¥0",
    period: "永久免费",
    description: "适合轻度用户，日常写作辅助",
    features: [
      "每天 20 次 AI 辅助",
      "Tab 续写",
      "划词改写（基础模式）",
      "智能润色",
      "标准响应速度",
    ],
    cta: "下载扩展",
    href: "#",
    highlighted: false,
  },
  {
    name: "Basic",
    nameCn: "基础版",
    price: "¥9.9",
    period: "/ 月",
    priceNote: "年付 ¥9.9 / 月，月付 ¥14.9 / 月",
    description: "最受欢迎，高效写作必备",
    features: [
      "每天 200 次 AI 辅助（20 倍免费版）",
      "全部改写模式（正式、简洁、创意、学术）",
      "优先响应队列",
      "无广告",
      "邮件技术支持",
    ],
    cta: "升级 Basic",
    href: "#",
    highlighted: true,
  },
  {
    name: "Pro",
    nameCn: "专业版",
    price: "¥29",
    period: "/ 月",
    description: "专业用户首选，无限畅享",
    features: [
      "无限次 AI 辅助",
      "全部 Basic 功能",
      "超长文本支持（单次 4000+ tokens）",
      "高级创意模式",
      "优先技术支持",
      "新功能抢先体验",
    ],
    cta: "升级 Pro",
    href: "#",
    highlighted: false,
  },
];

export function PricingCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl p-8 transition-all hover:scale-[1.02] ${
              plan.highlighted
                ? "border-2 border-indigo-600 bg-white shadow-xl shadow-indigo-100"
                : "border border-slate-200 bg-white shadow-sm hover:shadow-lg"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                最受欢迎
              </span>
            )}

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <span className="text-sm text-slate-500">{plan.nameCn}</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              {plan.priceNote && (
                <p className="mt-1 text-xs text-slate-400">{plan.priceNote}</p>
              )}
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                plan.highlighted
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:-translate-y-0.5"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
