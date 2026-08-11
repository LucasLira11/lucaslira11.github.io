// src/components/Logo.tsx
export default function Logo() {
  return (
    <div className="flex items-center gap-1 font-sans group cursor-pointer">
      {/* "Lucas" em Branco/Cinza claro */}
      <span className="text-2xl font-bold text-white tracking-tighter transition-colors group-hover:text-neutral-300">
        Lucas
      </span>
      {/* "</>" em Vermelho */}
      <span className="text-2xl font-black text-red-600 tracking-tighter">
        &lt;/&gt;
      </span>
    </div>
  );
}