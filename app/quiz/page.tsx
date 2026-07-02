"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import DualityMark from "@/components/DualityMark";
import ProgressBar from "@/components/ProgressBar";
import YesNoQuestion from "@/components/YesNoQuestion";
import ChoiceQuestion from "@/components/ChoiceQuestion";
import ScoreGauge from "@/components/ScoreGauge";
import PrimaryButton from "@/components/PrimaryButton";
import {
  BEST_PRACTICE_QUESTIONS,
  SITUATION_OPTIONS,
  OBSTACLE_OPTIONS,
  emptyAnswers,
  computeScore,
  personalizedInsights,
  type QuizAnswers,
} from "@/lib/quiz";

const SITUATION_STEP = BEST_PRACTICE_QUESTIONS.length + 1;
const OBSTACLE_STEP = BEST_PRACTICE_QUESTIONS.length + 2;
const TOTAL_STEPS = OBSTACLE_STEP; // contact (0) counts as step 1 of TOTAL_STEPS

type SubmitState = "idle" | "submitting" | "done" | "error";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(emptyAnswers());
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const isResults = step > OBSTACLE_STEP;

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  async function handleJoinWaitlist() {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: answers.email,
          score: computeScore(answers),
          situation: answers.situation,
          obstacle: answers.obstacle,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setSubmitState("done");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-coral/15 blur-[120px]" />

      <header className="relative mx-auto flex w-full max-w-2xl items-center justify-between px-6 pt-8">
        <Link href="/" className="flex items-center gap-2">
          <DualityMark size={26} />
          <span className="font-serif text-sm font-semibold tracking-wide text-cream/80">
            MOMENTOUS
          </span>
        </Link>
        {!isResults && step > 0 && (
          <button
            onClick={back}
            className="text-sm text-cream/40 transition-colors hover:text-cream/70"
          >
            Back
          </button>
        )}
      </header>

      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-12">
        {!isResults && (
          <div className="mb-10 w-full max-w-sm">
            <ProgressBar current={step + 1} total={TOTAL_STEPS + 1} />
          </div>
        )}

        {step === 0 && (
          <ContactStep
            email={answers.email}
            onSubmit={(email) => {
              setAnswers((a) => ({ ...a, email }));
              next();
            }}
          />
        )}

        {step >= 1 && step <= BEST_PRACTICE_QUESTIONS.length && (
          <YesNoQuestion
            question={BEST_PRACTICE_QUESTIONS[step - 1].text}
            onAnswer={(value) => {
              const id = BEST_PRACTICE_QUESTIONS[step - 1].id;
              setAnswers((a) => ({
                ...a,
                bestPractice: { ...a.bestPractice, [id]: value },
              }));
              next();
            }}
          />
        )}

        {step === SITUATION_STEP && (
          <ChoiceQuestion
            question="What best describes where you're at right now?"
            options={SITUATION_OPTIONS}
            onAnswer={(value) => {
              setAnswers((a) => ({ ...a, situation: value }));
              next();
            }}
          />
        )}

        {step === OBSTACLE_STEP && (
          <ChoiceQuestion
            question="What usually gets in the way?"
            options={OBSTACLE_OPTIONS}
            onAnswer={(value) => {
              setAnswers((a) => ({ ...a, obstacle: value }));
              next();
            }}
          />
        )}

        {isResults && (
          <ResultsStep
            answers={answers}
            submitState={submitState}
            onJoinWaitlist={handleJoinWaitlist}
          />
        )}
      </main>
    </div>
  );
}

function ContactStep({
  email,
  onSubmit,
}: {
  email: string;
  onSubmit: (email: string) => void;
}) {
  const [localEmail, setLocalEmail] = useState(email);

  const isValid = /\S+@\S+\.\S+/.test(localEmail);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit(localEmail.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col items-center gap-8"
    >
      <div className="text-center">
        <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
          Let&rsquo;s start with your email.
        </h2>
        <p className="mt-2 text-sm text-cream/50">
          We&rsquo;ll use this to send your results and let you know when
          Momentous launches.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3">
        <input
          type="email"
          required
          placeholder="Email address"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
          className="w-full rounded-2xl border border-cream/15 bg-navy-deep/60 px-5 py-4 text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-coral/60"
        />
      </div>

      <PrimaryButton
        type="submit"
        disabled={!isValid}
        className="w-full"
      >
        Continue
      </PrimaryButton>
    </form>
  );
}

function ResultsStep({
  answers,
  submitState,
  onJoinWaitlist,
}: {
  answers: QuizAnswers;
  submitState: SubmitState;
  onJoinWaitlist: () => void;
}) {
  const score = computeScore(answers);
  const insights = personalizedInsights(answers);

  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <ScoreGauge score={score} />

      <div className="flex w-full max-w-md flex-col gap-4">
        {insights.map((insight, i) => (
          <div
            key={i}
            className="rounded-2xl bg-cream p-5 text-left text-charcoal shadow-[0_16px_36px_-16px_rgba(0,0,0,0.4)]"
          >
            <p className="text-sm leading-relaxed">{insight}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-sm">
        {submitState === "done" ? (
          <p className="rounded-2xl border border-coral/30 bg-coral/10 px-6 py-4 text-sm text-cream/80">
            You&rsquo;re on the list. We&rsquo;ll email you the moment
            Momentous is live.
          </p>
        ) : (
          <>
            <PrimaryButton
              onClick={onJoinWaitlist}
              disabled={submitState === "submitting"}
              className="w-full"
            >
              {submitState === "submitting"
                ? "Joining…"
                : "Get notified at launch"}
            </PrimaryButton>
            {submitState === "error" && (
              <p className="mt-3 text-sm text-coral">
                Something went wrong. Mind trying again?
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
