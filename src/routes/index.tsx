import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import officeLight from "@/assets/office-light.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Workplace Productivity Assistant | Automate Work Smarter" },
      {
        name: "description",
        content:
          "Automate emails, meeting summaries, task planning and research with AI Workplace Productivity Assistant—your intelligent AI assistant for smarter, faster work.",
      },
      {
        property: "og:title",
        content: "AI Workplace Productivity Assistant | Automate Work Smarter",
      },
      {
        property: "og:description",
        content:
          "One intelligent workspace for email, meetings, tasks, research and AI chat.",
      },
    ],
  }),
  component: Home,
});

const navLinks = [
  ["Features", "#features"],
  ["How It Works", "#how-it-works"],
  ["AI Tools", "#features"],
  ["Benefits", "#benefits"],
  ["FAQ", "#faq"],
] as const;

const features = [
  {
    name: "Smart Email Generator",
    copy: "Create professional emails based on audience, purpose, context, tone, and length.",
    action: "Generate Email",
  },
  {
    name: "Meeting Notes Summarizer",
    copy: "Convert notes or transcripts into summaries, decisions, action items, owners, and deadlines.",
    action: "Summarise Meeting",
  },
  {
    name: "AI Task Planner",
    copy: "Prioritise work, break down large tasks, identify deadlines, and suggest schedules.",
    action: "Plan My Work",
  },
  {
    name: "AI Research Assistant",
    copy: "Summarise information, identify themes, compare material, extract insights, and suggest next steps.",
    action: "Start Research",
  },
  {
    name: "AI Chatbot",
    copy: "Ask for help naturally and reach every other productivity capability conversationally.",
    action: "Ask AI",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell the AI what you need",
    copy: "Enter a request, upload information, or select a tool.",
  },
  {
    n: "02",
    title: "Let AI do the work",
    copy: "The system analyses the provided context and generates a useful result.",
  },
  {
    n: "03",
    title: "Review and act",
    copy: "Edit, save, copy, export, schedule, or convert the result into an action.",
  },
];

const benefits = [
  ["Save Time", "Automate repetitive workplace tasks."],
  [
    "Stay Organised",
    "Keep tasks, deadlines, meeting actions, and outputs organised.",
  ],
  [
    "Communicate Better",
    "Generate clearer, audience-appropriate workplace communication.",
  ],
  ["Make Information Useful", "Turn long material into concise insights."],
  [
    "Work From One Place",
    "Access multiple AI productivity tools through one workspace.",
  ],
];

const faqs = [
  [
    "What is AI Workplace Productivity Assistant?",
    "It is an AI-powered platform that helps automate everyday workplace tasks including email writing, meeting summarisation, task planning, research, and general AI assistance.",
  ],
  [
    "Can it write emails?",
    "Yes. The Smart Email Generator creates emails based on audience, purpose, context, and preferred tone.",
  ],
  [
    "Can it summarise meetings?",
    "Yes. Provide meeting notes or supported transcripts and receive summaries containing key points, decisions, action items, responsible people, and deadlines.",
  ],
  [
    "Can the AI prioritise tasks?",
    "Yes. The AI Task Planner prioritises tasks using factors such as urgency, importance, deadlines, and estimated effort.",
  ],
  [
    "Can it help with research?",
    "Yes. The AI Research Assistant summarises information, identifies themes, extracts insights, compares material, and structures research.",
  ],
  [
    "Is the chatbot separate from the other tools?",
    "No. The chatbot is the central conversational interface and, where appropriate, helps you access the other productivity capabilities.",
  ],
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-mono text-xs font-bold uppercase leading-tight tracking-tighter"
            >
              AI Workplace
              <br />
              Productivity Assistant
            </Link>
            <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Log In
            </Link>
            <Link
              to="/dashboard"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-20 md:pt-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="animate-fade-up eyebrow inline-block text-primary">
              One intelligent workspace
            </span>
            <h1 className="animate-fade-up mb-8 mt-6 text-balance text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl [animation-delay:100ms]">
              Your AI Assistant for
              <br />
              <span className="italic text-primary/45">Smarter, Faster Work</span>
            </h1>
            <p className="animate-fade-up mx-auto mb-10 max-w-2xl text-lg text-muted-foreground [animation-delay:200ms]">
              Automate emails, summarise meetings, organise tasks, research information,
              and get instant AI assistance—all from one intelligent workplace
              productivity platform.
            </p>
            <div className="animate-fade-up mb-16 flex flex-wrap justify-center gap-3 [animation-delay:300ms]">
              <Link
                to="/dashboard"
                className="rounded-full bg-primary px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="rounded-full border border-border px-7 py-3.5 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-secondary"
              >
                Explore AI Tools
              </a>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-border py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div className="max-w-md">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight">
                Too Much Work.
                <br />
                Not Enough Time.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Professionals spend their days writing emails, reviewing meeting notes,
                organising tasks, searching for information, summarising material, and
                managing deadlines.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                AI Workplace Productivity Assistant is the intelligent layer that turns
                that repetitive work into simple, reviewable workflows—so your attention
                goes to the work that actually matters.
              </p>
            </div>
            <img
              src={officeLight}
              alt="Quiet desk in a calm office with morning light through the window"
              loading="lazy"
              width={1200}
              height={912}
              className="w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 max-w-xl text-4xl font-extrabold tracking-tight">
              Everything You Need to Work Smarter
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="flex flex-col justify-between rounded-3xl border border-border bg-card p-10 shadow-card md:col-span-2">
                <div>
                  <span className="eyebrow mb-4 block text-primary underline decoration-primary/20 underline-offset-4">
                    Feature 01
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">{features[0].name}</h3>
                  <p className="max-w-sm text-muted-foreground">{features[0].copy}</p>
                </div>
                <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {features[0].action}
                </p>
              </article>

              <article className="flex flex-col justify-between rounded-3xl bg-primary p-10 text-primary-foreground">
                <h3 className="text-xl font-bold">{features[1].name}</h3>
                <div>
                  <p className="text-sm text-primary-foreground/75">{features[1].copy}</p>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
                    {features[1].action}
                  </p>
                </div>
              </article>

              {features.slice(2).map((f) => (
                <article
                  key={f.name}
                  className="rounded-3xl border border-border bg-card p-10 shadow-card"
                >
                  <h3 className="mb-2 text-xl font-bold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.copy}</p>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {f.action}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-20 text-center text-4xl font-extrabold tracking-tight">
              How It Works
            </h2>
            <div className="grid gap-16 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-primary/20 font-mono text-primary">
                    {s.n}
                  </div>
                  <h3 className="mb-3 font-bold uppercase tracking-tight">{s.title}</h3>
                  <p className="px-4 text-sm text-muted-foreground">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          className="scroll-mt-20 border-y border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-4xl font-extrabold tracking-tight">Benefits</h2>
            <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {benefits.map(([title, copy]) => (
                <div key={title} className="bg-card p-8">
                  <dt className="mb-2 font-bold">{title}</dt>
                  <dd className="text-sm text-muted-foreground">{copy}</dd>
                </div>
              ))}
              <div className="bg-card p-8">
                <p className="eyebrow text-primary">Always under your control</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every AI result can be reviewed, edited, regenerated, or discarded.
                </p>
              </div>
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[3rem] bg-ink px-6 py-20 text-center text-ink-foreground">
              <h2 className="mb-6 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
                Let AI Handle the Busywork.
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-ink-foreground/70">
                Spend less time managing workplace tasks and more time doing meaningful
                work. Bring emails, meetings, tasks, research, and AI assistance together
                in one intelligent workspace.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-background px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
                >
                  Start Working Smarter
                </Link>
                <a
                  href="#features"
                  className="rounded-full border border-ink-foreground/25 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-ink-foreground/10"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row">
          <div className="max-w-xs">
            <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-tighter">
              AI Workplace Productivity Assistant
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              One intelligent workplace command centre for communication, meetings,
              tasks, research, and AI chat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]">
                Product
              </h3>
              <ul className="flex flex-col gap-4 text-xs text-muted-foreground">
                <li>
                  <Link to="/dashboard" className="hover:text-primary">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/history" className="hover:text-primary">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/settings" className="hover:text-primary">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]">
                Account
              </h3>
              <ul className="flex flex-col gap-4 text-xs text-muted-foreground">
                <li>
                  <Link to="/login" className="hover:text-primary">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-primary">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-border px-6 pt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>© 2026 AI Workplace Productivity Assistant</span>
          <span>Built for focused work</span>
        </div>
      </footer>
    </div>
  );
}
