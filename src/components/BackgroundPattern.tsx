/**
 * Fine editorial dot grid layered over the ambient gradient. Pure CSS (theme
 * aware via --ink), always present even when WebGL is disabled.
 */
export default function BackgroundPattern() {
  return (
    <div
      aria-hidden
      className="bg-dots pointer-events-none fixed inset-0 -z-10"
    />
  );
}
