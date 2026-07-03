import Link from "next/link";
import DualityMark from "@/components/DualityMark";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Momentous",
  description: "How Momentous handles your data.",
};

const LAST_UPDATED = "July 2, 2026";

export default function PrivacyPolicy() {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-coral/20 blur-[140px]" />

      <header className="relative mx-auto flex w-full max-w-5xl items-center gap-3 px-6 pt-10">
        <Link href="/" className="flex items-center gap-3">
          <DualityMark size={32} />
          <span className="font-serif text-lg font-semibold tracking-wide text-cream">
            MOMENTOUS
          </span>
        </Link>
      </header>

      <section className="relative mx-auto w-full max-w-2xl px-6 py-16">
        <h1 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-cream/40">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-cream/70">
          <p>
            Momentous is built to be simple, and that extends to how it
            handles your data: it doesn&rsquo;t collect any.
          </p>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              What Momentous stores
            </h2>
            <p className="mt-3">
              Your daily check-ins (whether you marked a day &ldquo;Improved&rdquo;
              or &ldquo;Same&rdquo;) are stored only on your device, using Apple&rsquo;s
              on-device storage. This data is never sent to us, to any
              server, or to any third party. We don&rsquo;t operate a backend,
              and the app doesn&rsquo;t make network requests to transmit your
              check-in history anywhere.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              Notifications
            </h2>
            <p className="mt-3">
              If you turn on daily reminders, Momentous schedules a local
              notification on your device through Apple&rsquo;s notification
              system. No data about your check-ins is included in or
              required by that notification, and nothing is sent off your
              device to schedule it.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              Analytics and tracking
            </h2>
            <p className="mt-3">
              The app itself contains no analytics, advertising, or tracking
              SDKs, and does not track you across other apps or websites.
              (This website uses privacy-friendly, anonymous page-view
              analytics to understand traffic to this page — that is
              separate from the Momentous app and does not touch any data
              from the app.)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              Data deletion
            </h2>
            <p className="mt-3">
              Since all data lives only on your device, deleting the
              Momentous app deletes all of your check-in history along with
              it. There is no account or server-side copy to separately
              delete.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              Changes to this policy
            </h2>
            <p className="mt-3">
              If this policy ever changes — for example, if a future version
              of the app adds an optional feature that involves data leaving
              your device — this page will be updated first, and the change
              will be reflected in the &ldquo;Last updated&rdquo; date above.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-cream">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy or the app can be sent to{" "}
              <a
                href="mailto:shriyanthnandakumar@gmail.com"
                className="text-coral underline underline-offset-4"
              >
                shriyanthnandakumar@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 pb-12 text-center">
        <DualityMark size={24} />
        <p className="text-xs text-cream/40">
          Momentous. Did you improve, or stay the same?
        </p>
      </footer>
    </div>
  );
}
