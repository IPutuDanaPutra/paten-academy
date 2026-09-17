export function PainterlyGradient({ opacity = 1 }: { opacity?: number }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden" style={{ opacity }}>
      <div className="hero-gradient" />
      <div className="grain-overlay" />
    </div>
  );
}
