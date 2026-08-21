import { CheckCircle2, Mail, Sparkles } from "lucide-react";

/** Realistic in-page mock of the product workspace shown in the hero. */
export function DashboardPreview() {
  return (
    <div className="animate-reveal relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-float">
      <div className="flex min-h-[420px] flex-col md:flex-row">
        <aside className="hidden w-56 shrink-0 flex-col gap-6 border-r border-border bg-surface/60 p-6 md:flex">
          <div className="flex gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-destructive/25" />
            <span className="size-2.5 rounded-full bg-warning/30" />
            <span className="size-2.5 rounded-full bg-primary/30" />
          </div>
          <ul className="flex flex-col gap-1 text-xs text-muted-foreground">
            {[
              "Dashboard",
              "Email Generator",
              "Meeting Summarizer",
              "Task Planner",
              "Research Assistant",
              "AI Chat",
            ].map((item, i) => (
              <li
                key={item}
                className={
                  i === 0
                    ? "rounded-lg bg-accent px-3 py-2 font-medium text-accent-foreground"
                    : "px-3 py-2"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex-1 p-6 md:p-8">
          <p className="eyebrow text-muted-foreground">Good morning, Amara</p>
          <p className="mt-2 text-lg font-semibold tracking-tight">
            What would you like to accomplish today?
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background p-4 text-left shadow-card">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="size-4" aria-hidden="true" />
                <span className="eyebrow">Draft email</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “Hi Daniel — following up on Thursday's planning session, here is a short
                summary of what we agreed and the two decisions still open…”
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background p-4 text-left shadow-card">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="size-4" aria-hidden="true" />
                <span className="eyebrow">Meeting summary</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Decision: ship pilot to 3 teams</li>
                <li>Action: Priya to confirm budget — Fri</li>
                <li>Risk: data migration window unclear</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-background p-4 text-left shadow-card sm:col-span-2">
              <span className="eyebrow text-muted-foreground">Today's priorities</span>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["Critical", "Send client proposal"],
                  ["High", "Review research brief"],
                  ["Medium", "Plan sprint retro"],
                ].map(([level, task]) => (
                  <li key={task} className="flex items-center gap-3">
                    <CheckCircle2
                      className="size-4 text-primary/50"
                      aria-hidden="true"
                    />
                    <span className="flex-1">{task}</span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-secondary-foreground">
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
