import DualityMark from "./DualityMark";

type YesNoQuestionProps = {
  question: string;
  onAnswer: (value: boolean) => void;
};

export default function YesNoQuestion({
  question,
  onAnswer,
}: YesNoQuestionProps) {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="max-w-lg text-center font-serif text-2xl font-semibold leading-snug text-cream sm:text-3xl">
        {question}
      </h2>
      <div className="flex w-full max-w-sm items-center gap-3">
        <button
          onClick={() => onAnswer(true)}
          className="flex h-36 flex-1 items-center justify-center rounded-3xl bg-coral font-serif text-xl font-semibold text-charcoal shadow-[0_16px_36px_-12px_rgba(242,131,107,0.4)] transition-transform duration-150 ease-out active:scale-95"
        >
          Yes
        </button>
        <DualityMark size={22} />
        <button
          onClick={() => onAnswer(false)}
          className="flex h-36 flex-1 items-center justify-center rounded-3xl bg-cream font-serif text-xl font-semibold text-charcoal shadow-[0_16px_36px_-12px_rgba(245,239,230,0.25)] transition-transform duration-150 ease-out active:scale-95"
        >
          No
        </button>
      </div>
    </div>
  );
}
