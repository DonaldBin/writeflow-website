import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 font-bold text-xl tracking-tight text-slate-900">
      <span>WriteFlow</span>
      <span className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white">
        AI
      </span>
    </Link>
  );
}
