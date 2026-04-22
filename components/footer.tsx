"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();
  const email = t("common.contactEmail") as string;

  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm text-slate-500 max-w-xs">
              {t("common.tagline")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <Link href="/pricing" className="hover:text-slate-900 transition-colors">
              {t("common.pricing")}
            </Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-slate-900 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {t("common.copyright")}</p>
          <p>
            {t("common.contact")}{" "}
            <a href={`mailto:${email}`} className="hover:text-slate-600 transition-colors">
              {email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
