import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take the Self-Check",
  description:
    "Answer a few honest questions to see exactly where you stand, and get personalized takeaways in under 2 minutes.",
  alternates: {
    canonical: "/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
