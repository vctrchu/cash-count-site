import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Nota",
};

export default function TermsOfService() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="mb-2 text-xs font-medium tracking-[0.2em] uppercase text-muted">Legal</p>
      <h1 className="mb-1 text-2xl font-bold">Terms and Conditions</h1>
      <p className="mb-12 text-sm text-muted">Last updated: February 17, 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-[#999]">
        <section>
          <h2 className="mb-3 text-base font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Nota (&ldquo;the App&rdquo;), you agree to be
            bound by these Terms and Conditions. If you do not agree, do not use the App.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">2. Description of Service</h2>
          <p>
            Nota is a mobile application that helps users count cash denominations. The App
            stores all data locally on your device.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">3. Subscriptions and Billing</h2>
          <p className="mb-3">
            The App offers optional paid subscriptions (&ldquo;Nota Pro&rdquo;) that unlock
            additional features. Subscriptions are billed through Apple&apos;s App Store. By
            purchasing a subscription, you agree to the following:
          </p>
          <ul className="list-none space-y-2 border-l-2 border-border pl-4">
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
            <li>You can manage and cancel subscriptions in your App Store account settings.</li>
            <li>Any unused portion of a free trial period is forfeited when you purchase a subscription.</li>
          </ul>
          <p className="mt-3">
            All billing inquiries and refund requests should be directed to Apple, as they process
            all payments.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">4. Intellectual Property</h2>
          <p>
            The App and its original content, features, and functionality are owned by Nota and
            are protected by copyright, trademark, and other intellectual property laws. You may not
            copy, modify, distribute, or reverse-engineer any part of the App.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">5. User Conduct</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-none space-y-2 border-l-2 border-border pl-4">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
            <li>Interfere with or disrupt the App&apos;s functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">6. Disclaimer of Warranties</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
            of any kind, either express or implied. We do not warrant that the App will be error-free
            or uninterrupted. Cash counting results are provided as a convenience and should be
            verified independently for critical transactions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Nota and its developers shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages arising from
            your use of the App, including but not limited to errors in cash counting calculations.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the App at any time, without
            notice, for conduct that we believe violates these Terms or is harmful to other users or
            the App.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the App after changes
            constitutes acceptance of the revised Terms. We encourage you to review this page
            periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United
            States, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">11. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us through the feedback option in
            the App.
          </p>
        </section>
      </div>
    </article>
  );
}
