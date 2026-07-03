import Link from "next/link";
import DualityMark from "@/components/DualityMark";
import PrimaryButton from "@/components/PrimaryButton";
import QuickWaitlistForm from "@/components/QuickWaitlistForm";

const VALUE_PROPS = [
  {
    title: "Consistency",
    body: "Do you show up regularly, or only in bursts you forget about by next week?",
  },
  {
    title: "Self-honesty",
    body: "Do you give yourself credit for showing up on hard days, or only on the “good” ones?",
  },
  {
    title: "Recovery",
    body: "When you skip a day, how fast do you actually get back to it?",
  },
];

const ASSURANCES = [
  "Takes about 2 minutes",
  "Completely free, no account needed",
  "Get your score and personalized takeaways immediately",
  "Be first to know when Momentous launches",
];

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden">
      {/* ambient glow, matching the app's background treatment */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-coral/20 blur-[140px]" />

      <header className="relative mx-auto flex w-full max-w-5xl items-center gap-3 px-6 pt-10">
        <Link href="/" className="flex items-center gap-3">
          <DualityMark size={32} />
          <span className="font-serif text-lg font-semibold tracking-wide text-cream">
            MOMENTOUS
          </span>
        </Link>
      </header>

      {/* Hook */}
      <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl">
          Feeling frustrated that you can&rsquo;t tell if you&rsquo;re
          actually improving, even though you&rsquo;re tracking every habit
          under the sun?
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/60">
          Answer a few honest questions to see exactly where you stand, and
          what one honest daily question can do that five apps can&rsquo;t.
        </p>
        <PrimaryButton href="/quiz" className="mt-10">
          Take the self-check
        </PrimaryButton>
        <QuickWaitlistForm />
      </section>

      {/* Value proposition */}
      <section className="relative mx-auto w-full max-w-4xl px-6 py-16">
        <h2 className="text-center font-serif text-2xl font-semibold text-cream sm:text-3xl">
          Three things this actually measures
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-cream/60">
          Not your habits. Not your calories. Just the three things that
          determine whether you&rsquo;re actually moving forward.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-cream p-6 text-charcoal shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-serif text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credibility */}
      <section className="relative mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
          Why this isn&rsquo;t another habit tracker
        </h2>
        <p className="mt-4 text-cream/60">
          Most tracking apps are built to keep you opening them: badges,
          streak fire, comparisons, dashboards. Momentous is built around one
          idea instead: a single honest yes-or-no question, answered every
          day, tells you more about your direction than a dozen metrics
          you&rsquo;ll stop checking in a month.
        </p>
        <p className="mt-4 text-cream/60">
          This self-check works the same way. A few honest questions, no
          login wall, nothing hidden at the end.
        </p>
      </section>

      {/* CTA */}
      <section className="relative mx-auto w-full max-w-2xl px-6 pb-24 pt-8 text-center">
        <div className="rounded-3xl border border-cream/10 bg-navy-deep/60 p-10">
          <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
            Ready to see where you actually stand?
          </h2>
          <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-3 text-left">
            {ASSURANCES.map((assurance) => (
              <li
                key={assurance}
                className="flex items-start gap-3 text-sm text-cream/70"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {assurance}
              </li>
            ))}
          </ul>
          <PrimaryButton href="/quiz" className="mt-8 w-full sm:w-auto">
            Start the self-check
          </PrimaryButton>
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 pb-12 text-center">
        <DualityMark size={24} />
        <p className="text-xs text-cream/40">
          Momentous. Did you improve, or stay the same?
        </p>
        <Link
          href="/privacy"
          className="text-xs text-cream/40 underline underline-offset-4 hover:text-cream/60"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
