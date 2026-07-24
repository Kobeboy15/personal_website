import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function CoverLetterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="fixed inset-x-0 top-0 z-40 bg-paper/80 backdrop-blur-md">
        <nav className="gutter flex items-center justify-between py-5">
          <Link
            href="/"
            className="link-line flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            ← Back
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm font-medium tracking-tight text-ink">
              Kobe Michael
            </span>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="gutter flex-1 pb-24 pt-32 lg:pt-40">{children}</main>
    </div>
  );
}
