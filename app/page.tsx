import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />

      {/* Bottom CTA */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            开始免费使用
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            每天 20 次免费 AI 辅助，无需信用卡
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
            >
              立即安装
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              查看定价
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
