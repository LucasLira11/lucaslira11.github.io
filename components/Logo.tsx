import Link from "next/link";

export default function Logo({ href = "/", label = "Lucas Lira, página inicial" }: { href?: string; label?: string }) {
  return (
    <Link href={href} aria-label={label} className="group inline-flex min-h-11 items-center gap-1 rounded-md text-2xl font-bold tracking-tighter">
      <span className="text-fg transition-colors group-hover:text-fg-muted">Lucas</span>
      <span aria-hidden="true" className="font-black text-accent">
        &lt;/&gt;
      </span>
    </Link>
  );
}
