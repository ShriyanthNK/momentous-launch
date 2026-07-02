import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = SharedProps & {
  href: string;
};

export default function PrimaryButton(props: ButtonProps | LinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-8 py-4 font-serif text-lg font-semibold text-charcoal shadow-[0_12px_30px_-8px_rgba(242,131,107,0.45)] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

  if ("href" in props && props.href) {
    const { href, children, className } = props;
    return (
      <Link href={href} className={`${base} ${className ?? ""}`}>
        {children}
      </Link>
    );
  }

  const { children, className, ...rest } =
    props as ButtonProps;
  return (
    <button className={`${base} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}
