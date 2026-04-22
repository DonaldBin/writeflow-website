import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing-cards";

export const metadata: Metadata = {
  title: "Pricing — WriteFlow AI",
  description:
    "Free plan with 20 requests/day. Upgrade to Basic (¥9.9/mo) or Pro (¥29/mo) for unlimited AI writing assistance.",
};

const faqs = [
  {
    q: "免费版够用吗？",
    a: "每天 20 次适合轻度用户，写几封邮件、几条社交动态完全够用。",
  },
  {
    q: "可以随时取消订阅吗？",
    a: "可以随时取消，下个计费周期停止扣费。",
  },
  {
    q: "支持哪些支付方式？",
    a: "支持信用卡、PayPal、支付宝（通过 Paddle/Stripe 安全支付）。",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            选择适合你的方案
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
            常见问题
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
