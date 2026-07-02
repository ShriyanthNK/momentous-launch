export type BestPracticeQuestion = {
  id: string;
  text: string;
};

export const BEST_PRACTICE_QUESTIONS: BestPracticeQuestion[] = [
  {
    id: "knowsStreak",
    text: "Do you know, right now, how many days in a row you've shown up for yourself?",
  },
  {
    id: "reflects",
    text: "Do you reflect on your day for even a few seconds before it ends?",
  },
  {
    id: "bouncesBack",
    text: "When you have an off day, do you get back on track within 48 hours?",
  },
  {
    id: "separatesRoughFromFailing",
    text: "Do you separate “I had a rough day” from “I'm failing”?",
  },
  {
    id: "oneHonestSignal",
    text: "Do you have one honest daily signal you actually trust, not five conflicting apps?",
  },
  {
    id: "underAMinute",
    text: "Do you track progress in a way that takes less than a minute?",
  },
  {
    id: "countsConsistency",
    text: "Do you count consistency as a win, even on days nothing “big” happened?",
  },
  {
    id: "knowsBusyVsImproving",
    text: "Do you know the difference between being busy and actually improving?",
  },
];

export type SituationValue = "starting" | "building" | "consistent" | "fellOff";

export const SITUATION_OPTIONS: { value: SituationValue; label: string }[] = [
  { value: "starting", label: "Just starting to pay attention to this" },
  { value: "building", label: "Trying to build consistency" },
  { value: "consistent", label: "Fairly consistent, want to stay honest about it" },
  { value: "fellOff", label: "Fell off track and want back in" },
];

export type ObstacleValue = "forget" | "momentum" | "hindsight" | "noSignal";

export const OBSTACLE_OPTIONS: { value: ObstacleValue; label: string }[] = [
  { value: "forget", label: "I forget" },
  { value: "momentum", label: "I lose momentum after one bad day" },
  { value: "hindsight", label: "I only notice progress looking backward, never in the moment" },
  { value: "noSignal", label: "I don't have one clear signal to check" },
];

export type QuizAnswers = {
  email: string;
  bestPractice: Record<string, boolean>;
  situation: SituationValue | null;
  obstacle: ObstacleValue | null;
};

export function emptyAnswers(): QuizAnswers {
  return {
    email: "",
    bestPractice: {},
    situation: null,
    obstacle: null,
  };
}

export function computeScore(answers: QuizAnswers): number {
  const yesCount = BEST_PRACTICE_QUESTIONS.filter(
    (q) => answers.bestPractice[q.id]
  ).length;
  return Math.round((yesCount / BEST_PRACTICE_QUESTIONS.length) * 100);
}

function scoreInsight(score: number): string {
  if (score >= 75) {
    return "You already have real signal on your own progress. At this point the risk isn't inconsistency, it's letting the tracking get complicated enough that you stop trusting it.";
  }
  if (score >= 40) {
    return "You're picking up on your own patterns some of the time, but it's not automatic yet. You're reconstructing it after the fact instead of knowing it in the moment.";
  }
  return "Right now you're mostly flying blind day-to-day, not because you're not trying, but because nothing you're using gives you a fast, honest answer.";
}

const situationInsights: Record<SituationValue, string> = {
  starting:
    "Since you're just starting to pay attention to this, the goal isn't a perfect system. It's one honest signal you check daily, before you add anything else.",
  building:
    "You're actively trying to build consistency, which means the thing most likely to help you isn't more motivation. It's lowering the cost of showing up to a few seconds a day.",
  consistent:
    "You're already fairly consistent, so what matters most now is keeping your tracking honest, giving yourself credit for showing up, not just on the “good” days.",
  fellOff:
    "You've fallen off before and want back in. The fastest way back isn't a big restart, it's picking one signal you can answer honestly today, gaps and all.",
};

const obstacleInsights: Record<ObstacleValue, string> = {
  forget:
    "Your biggest obstacle is forgetting, which means the fix is a single, well-timed reminder pointing at one place, not another app to remember to open.",
  momentum:
    "You tend to lose momentum after one bad day, which is exactly why a streak that only counts your “wins” will keep breaking you. One that counts honest days won't.",
  hindsight:
    "You mostly notice progress in hindsight. A daily prompt gives you that same read in the moment instead of making you wait for a monthly look-back.",
  noSignal:
    "You don't have one clear signal to check. That's the single most common thing standing between people and actually seeing their own progress.",
};

export function personalizedInsights(answers: QuizAnswers): string[] {
  const score = computeScore(answers);
  const insights = [scoreInsight(score)];

  if (answers.situation) {
    insights.push(situationInsights[answers.situation]);
  }
  if (answers.obstacle) {
    insights.push(obstacleInsights[answers.obstacle]);
  }

  return insights;
}
