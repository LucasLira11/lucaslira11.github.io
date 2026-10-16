"use client";

import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import { useState, type ReactNode } from "react";

export interface ExplorerItem {
  id: string;
  category: string;
  /** Card já renderizado no servidor. */
  card: ReactNode;
}

export interface ExplorerCategory {
  key: string;
  label: string;
  count: number;
}

/**
 * Lista de certificações com filtro por área. O HTML estático sai com todas as
 * certificações; o filtro e a animação só entram depois que o JavaScript carrega.
 */
export default function CertificationsExplorer({
  items,
  categories,
  labels,
}: {
  items: ExplorerItem[];
  categories: ExplorerCategory[];
  labels: { filter: string; all: string; listTitle: string; counts: Record<number, string> };
}) {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? items : items.filter((item) => item.category === active);
  const filters = [{ key: "all", label: labels.all, count: items.length }, ...categories];

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div role="group" aria-label={labels.filter} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-fg-muted transition-colors hover:border-line-strong hover:text-fg aria-pressed:border-accent-strong aria-pressed:bg-accent-strong aria-pressed:text-white"
            >
              {f.label}
              <span className="font-mono text-xs">{f.count}</span>
            </button>
          ))}
        </div>

        <h2 className="sr-only">{labels.listTitle}</h2>
        <p aria-live="polite" className="mt-6 font-mono text-sm text-fg-subtle">
          {labels.counts[visible.length]}
        </p>

        <m.ul layout className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((item) => (
              <m.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {item.card}
              </m.li>
            ))}
          </AnimatePresence>
        </m.ul>
      </LazyMotion>
    </MotionConfig>
  );
}
