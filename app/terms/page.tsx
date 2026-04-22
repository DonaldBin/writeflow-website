import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — WriteFlow AI",
  description: "WriteFlow AI Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: April 22, 2026
        </p>

        <div className="mt-10 space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By installing and using WriteFlow AI, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              2. Description of Service
            </h2>
            <p>
              WriteFlow AI is a Chrome browser extension that provides AI-powered writing assistance using third-party AI models.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              3. User Accounts
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You must provide accurate information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>Each license is for one user only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              4. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Use the service for illegal purposes</li>
              <li>Attempt to circumvent usage limits or quotas</li>
              <li>Reverse engineer or extract source code</li>
              <li>Use automated scripts to abuse the API</li>
              <li>Generate harmful, abusive, or infringing content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              5. Subscription and Billing
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Free tier: 20 AI requests per day</li>
              <li>Paid tiers: Billed monthly, auto-renewal</li>
              <li>You may cancel anytime; cancellation takes effect at the next billing cycle</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              WriteFlow AI and its code are our property. You retain ownership of content you create using the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              The service is provided &quot;as is&quot;. We are not liable for AI-generated content accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              8. Termination
            </h2>
            <p>
              We may suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the People&apos;s Republic of China.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              10. Contact
            </h2>
            <p>
              For questions about these terms:{" "}
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
