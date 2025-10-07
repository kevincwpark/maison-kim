"use client";

const TAGS = ["all", "event", "wedding", "installation"] as const;

export default function FilterBar({
  value, onChange,
}: { value: (typeof TAGS)[number]; onChange: (v: (typeof TAGS)[number]) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 tracking-widest text-sm uppercase">
      {TAGS.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`pb-1 border-b transition ${
            value === t ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
