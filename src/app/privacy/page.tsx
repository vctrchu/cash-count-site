import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Cash Count",
};

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-10 text-sm text-white/40">Last updated: February 17, 2026</p>

      <div className="space-y-8 text-white/80 leading-relaxed">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">1. Introduction</h2>
          <p>
            Cash Count (&ldquo;the App&rdquo;) is committed to protecting your privacy. This Privacy
            Policy explains what information we collect, how we use it, and your rights regarding
            your data.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">2. Information We Collect</h2>
          <p className="mb-3">
            <strong className="text-white">Cash Count does not collect personal information.</strong>{" "}
            The App is designed with privacy in mind:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li><strong className="text-white">No account or login required.</strong> You can use the App without providing any personal information.</li>
            <li><strong className="text-white">All data is stored locally.</strong> Your cash counting sessions and settings are stored entirely on your device and are not transmitted to any server.</li>
            <li><strong className="text-white">No analytics or tracking.</strong> We do not use analytics SDKs or track your usage behavior.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">3. Third-Party Services</h2>
          <p className="mb-3">The App uses the following third-party services:</p>

          <h3 className="mb-2 text-lg font-medium text-white">RevenueCat</h3>
          <p className="mb-3">
            We use{" "}
            <a href="https://www.revenuecat.com" className="text-bronze underline" target="_blank" rel="noopener noreferrer">
              RevenueCat
            </a>{" "}
            to manage in-app subscriptions. When you make a purchase, RevenueCat processes the
            transaction and may collect:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>An anonymous app user ID</li>
            <li>Purchase and subscription status</li>
            <li>Device type and OS version</li>
          </ul>
          <p className="mb-4">
            RevenueCat does not receive your name, email, or other personal information from us. For
            more details, see{" "}
            <a href="https://www.revenuecat.com/privacy/" className="text-bronze underline" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>
            .
          </p>

          <h3 className="mb-2 text-lg font-medium text-white">Apple App Store</h3>
          <p>
            Purchases are processed by Apple. Apple&apos;s handling of your payment information is
            governed by{" "}
            <a href="https://www.apple.com/privacy/" className="text-bronze underline" target="_blank" rel="noopener noreferrer">
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">4. Data Storage and Security</h2>
          <p className="mb-3">
            All app data (counting sessions, currency preferences, denomination settings) is stored
            locally on your device using secure on-device storage. We do not have access to this
            data.
          </p>
          <p>If you delete the App, all locally stored data is permanently removed.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">5. Children&apos;s Privacy</h2>
          <p>
            The App does not knowingly collect information from children under the age of 13. The App
            does not require any personal information to function.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use of the App after
            changes constitutes acceptance of the revised policy. We encourage you to review this
            page periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">7. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through the feedback
            option in the App.
          </p>
        </section>
      </div>
    </article>
  );
}
