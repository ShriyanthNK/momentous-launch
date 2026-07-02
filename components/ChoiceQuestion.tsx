type Option<T extends string> = {
  value: T;
  label: string;
};

type ChoiceQuestionProps<T extends string> = {
  question: string;
  options: Option<T>[];
  onAnswer: (value: T) => void;
};

export default function ChoiceQuestion<T extends string>({
  question,
  options,
  onAnswer,
}: ChoiceQuestionProps<T>) {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="max-w-lg text-center font-serif text-2xl font-semibold leading-snug text-cream sm:text-3xl">
        {question}
      </h2>
      <div className="flex w-full max-w-md flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className="rounded-2xl border border-cream/15 bg-navy-deep/60 px-6 py-4 text-left text-cream/90 transition-colors duration-150 hover:border-coral/50 hover:bg-navy-deep active:scale-[0.98]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
