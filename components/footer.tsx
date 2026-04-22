import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm text-slate-500 max-w-xs">
              AI 驱动的 Chrome 写作助手，让写作像呼吸一样自然。
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <Link href="/pricing" className="hover:text-slate-900 transition-colors">
              定价
            </Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              服务条款
            </Link>
            <Link href="/refund" className="hover:text-slate-900 transition-colors">
              退款政策
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} WriteFlow AI. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a href="mailto:support@writeflow-ai.com" className="hover:text-slate-600 transition-colors">
              support@writeflow-ai.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
