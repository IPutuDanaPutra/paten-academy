import { UserRound } from "lucide-react";
import { content } from "@/lib/content";

function TeamCard({ name, role }: { name: string; role: string | null }) {
  return (
    <div className="team-card">
      {/* No confirmed real photo exists for any team member yet (Part 3 §2.2) —
          placeholder icon fills the frame instead of a fabricated stock photo. */}
      <div className="absolute inset-0 flex items-center justify-center bg-ink/90">
        <UserRound className="text-white/20" size={64} strokeWidth={1} />
      </div>
      <div className="caption flex flex-col justify-center min-h-[70px]">
        <p className="font-serif italic text-lg text-paper">{name}</p>
        {role && <p className="font-label text-[13px] text-white/70 mt-0.5">{role}</p>}
      </div>
    </div>
  );
}

export function Team() {
  const rahman = content.team[0];

  return (
    <section id="team" className="relative max-w-4xl mx-auto px-6 py-24 scroll-mt-28">
      <h2 className="font-serif italic text-3xl sm:text-4xl tracking-tight text-center">
        Meet the Team
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
        {content.team.map((member) => (
          <TeamCard key={member.name} name={member.name} role={member.role} />
        ))}
      </div>

      {rahman.bio && (
        <p className="mt-10 text-muted max-w-2xl mx-auto text-center">
          <span className="font-serif italic text-ink">{rahman.name}.</span>{" "}
          {rahman.bio}
        </p>
      )}
    </section>
  );
}
