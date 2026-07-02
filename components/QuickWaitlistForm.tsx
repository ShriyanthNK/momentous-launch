"use client";

import { useState, type FormEvent } from "react";

type State = "idle" | "submitting" | "done" | "error";

export default function QuickWaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) return;
    setState("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("request failed");
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="mt-6 text-sm text-cream/60">
        You&rsquo;re on the list. We&rsquo;ll email you when Momentous
        launches.
      </p>
    );
  }

  return (
    <div className="mt-6 flex w-full flex-col items-center gap-2">
      <p className="text-sm text-cream/40">
        Don&rsquo;t want to do the whole thing? Just leave your email.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xs gap-2"
      >
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-cream/15 bg-navy-deep/60 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-coral/60"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="shrink-0 rounded-xl bg-cream/10 px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cream/15 disabled:opacity-50"
        >
          {state === "submitting" ? "..." : "Notify me"}
        </button>
      </form>
      {state === "error" && (
        <p className="text-xs text-coral">
          Something went wrong. Mind trying again?
        </p>
      )}
    </div>
  );
}
