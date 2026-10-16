import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-accent-strong text-white hover:bg-accent-hover",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg-subtle hover:bg-surface-2",
  ghost: "text-fg-muted hover:bg-surface-2 hover:text-fg",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors duration-200";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  /** Abre em nova aba e avisa leitores de tela. */
  external?: boolean;
  newTabLabel?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "secondary", external, newTabLabel, className = "", children, ...rest }: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
        {newTabLabel && <span className="sr-only"> {newTabLabel}</span>}
      </a>
    );
  }
  // Âncoras, mailto e downloads usam <a>; rotas internas usam o Link do Next
  if (href.startsWith("mailto:") || href.startsWith("#") || rest.download !== undefined) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-fg-muted ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <Heading id={id} className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
          {title}
        </Heading>
        {description && <p className="mt-3 text-base leading-relaxed text-fg-muted md:text-lg">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
