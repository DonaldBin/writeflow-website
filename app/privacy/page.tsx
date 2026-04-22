import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WriteFlow AI",
  description: "WriteFlow AI Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: April 22, 2026
        </p>

        <div className="mt-10 space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              1. Introduction
            </h2>
            <p>
              WriteFlow AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Chrome extension and website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Account Information:</strong> When you create an account, we collect your email address and a unique device identifier.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you use the extension (e.g., feature usage, API request counts) to improve our service and enforce usage limits.
              </li>
              <li>
                <strong>Content Data:</strong> Text you submit to our AI writing service is sent to third-party AI providers (DeepSeek and Kimi/Moonshot) for processing. We do not permanently store your writing content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide the AI writing services</li>
              <li>To manage your subscription and usage quotas</li>
              <li>To improve product functionality</li>
              <li>To communicate with you about your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              4. Data Sharing
            </h2>
            <p>We share data only with:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>AI service providers (DeepSeek, Kimi/Moonshot) for content processing</li>
              <li>Payment processors (Stripe/Paddle) for subscription management</li>
            </ul>
            <p className="mt-2">We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              5. Data Security
            </h2>
            <p>
              We use industry-standard security measures including HTTPS encryption, secure authentication tokens, and database access controls.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal data. Contact us at{" "}
              <a href="mailto:support@writeflow-ai.com" className="text-indigo-600 hover:underline">
                support@writeflow-ai.com
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              7. Cookies
            </h2>
            <p>
              Our website uses essential cookies only. The Chrome extension does not use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{" "}
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
