interface SectionLabelProps {
  index: string;
  title: string;
}

/** Editorial section marker: "(01) — ABOUT" with a hairline above. */
export default function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="rule flex items-baseline justify-between gap-4 pt-4">
      <span className="eyebrow">
        ({index}) — {title}
      </span>
    </div>
  );
}
