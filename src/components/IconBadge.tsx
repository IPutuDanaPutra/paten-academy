import { icons, type IconName } from "@/lib/icons";

export function IconBadge({
  name,
  tone = "default",
}: {
  name: IconName;
  tone?: "default" | "accent" | "inverted";
}) {
  const Icon = icons[name];
  return (
    <div
      className={`icon-badge ${tone === "accent" ? "icon-badge-accent" : ""}`}
      style={tone === "inverted" ? { background: "rgba(255,255,255,0.15)" } : undefined}
    >
      <Icon color={tone === "inverted" ? "white" : undefined} />
    </div>
  );
}
