import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — WriteFlow AI",
  description: "WriteFlow AI Refund Policy",
};

export default function RefundPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Refund Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: April 22, 2026
        </p>

        <div className="mt-10 space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              1. Subscription Refunds
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                You may request a full refund within 14 days of your initial purchase if you are unsatisfied with the service.
              </li>
              <li>
                Refund requests must be sent to{" "}
                <a href="mailto:support@writeflow-ai.com" className="text-indigo-600 hover:underline">
                  support@writeflow-ai.com
                </a>{" "}
                with your account email and purchase date.
              </li>
              <li>Refunds are typically processed within 5-7 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              2. Non-Refundable Situations
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Refunds are not provided for partial months or unused portions of a subscription period.
              </li>
              <li>
                If your account was terminated due to violation of Terms of Service, no refund will be issued.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              3. How to Request a Refund
            </h2>
            <p>Email us at{" "}
              <a href="mailto:support@writeflow-ai.com" className="text-indigo-600 hover:underline">
                support@writeflow-ai.com
              </a>{" "}
              with the subject &quot;Refund Request&quot; and include:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Your registered email address</li>
              <li>Date of purchase</li>
              <li>Reason for refund request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              4. Contact
            </h2>
            <p>
              For refund inquiries:{" "}
              <a href="mailto:support@writeflow-ai.com" className="text-indigo-600 hover:underline">
                support@writeflow-ai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
