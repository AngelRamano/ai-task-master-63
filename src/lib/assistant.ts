/**
 * Local demo AI engine.
 *
 * Produces structured, clearly-labelled draft output from the user's own input so
 * the workspace is fully explorable without a backend. Every result is editable
 * and is presented as a draft, never as verified fact.
 */

export type Tone =
  | "professional"
  | "formal"
  | "friendly"
  | "casual"
  | "persuasive"
  | "concise"
  | "empathetic";

export const TONES: Tone[] = [
  "professional",
  "formal",
  "friendly",
  "casual",
  "persuasive",
  "concise",
  "empathetic",
];

export type Priority = "Critical" | "High" | "Medium" | "Low";

export interface EmailInput {
  audience: string;
  purpose: string;
  context: string;
  tone: Tone;
  length: "short" | "medium" | "detailed";
  keyPoints: string;
}

const greetings: Record<Tone, string> = {
  professional: "Hi",
  formal: "Dear",
  friendly: "Hi",
  casual: "Hey",
  persuasive: "Hi",
  concise: "Hi",
  empathetic: "Hi",
};

const closings: Record<Tone, string> = {
  professional: "Best regards",
  formal: "Yours sincerely",
  friendly: "Thanks so much",
  casual: "Cheers",
  persuasive: "Looking forward to your thoughts",
  concise: "Thanks",
  empathetic: "With appreciation",
};

function bullets(raw: string): string[] {
  return raw
    .split(/\n|•|;|(?<=\.)\s+/)
    .map((l) => l.replace(/^[-*\d.\s]+/, "").trim())
    .filter((l) => l.length > 2);
}

export function generateEmail(input: EmailInput): string {
  const points = bullets(input.keyPoints);
  const audience = input.audience.trim() || "there";
  const opening =
    input.tone === "empathetic"
      ? `I hope things are going well on your side.`
      : input.tone === "casual"
        ? `Quick note from me.`
        : `I hope you're well.`;

  const body: string[] = [
    `${greetings[input.tone]} ${audience},`,
    "",
    input.length === "short" ? "" : opening,
    `I'm writing regarding ${input.purpose.trim() || "a short request"}.`,
  ].filter(Boolean);

  if (input.context.trim()) {
    body.push("", input.context.trim());
  }

  if (points.length) {
    body.push("", ...points.map((p) => `• ${p}`));
  }

  if (input.length === "detailed") {
    body.push(
      "",
      "If any of the above needs adjusting, let me know what works better and I'll follow up with a revised plan.",
    );
  }

  body.push("", "Could you let me know your thoughts when you have a moment?");
  body.push("", `${closings[input.tone]},`, "[Your name]");

  return body.join("\n");
}

export interface MeetingSummary {
  summary: string;
  keyPoints: string[];
  decisions: string[];
  actions: { task: string; owner: string; due: string }[];
}

export function summariseMeeting(notes: string, title: string): MeetingSummary {
  const lines = bullets(notes);
  const decisions = lines.filter((l) =>
    /decid|agree|approv|confirm|sign off/i.test(l),
  );
  const actionLines = lines.filter((l) =>
    /will |to do|action|follow up|send|prepare|draft|review|schedule|by /i.test(l),
  );
  const keyPoints = lines
    .filter((l) => !decisions.includes(l) && !actionLines.includes(l))
    .slice(0, 6);

  const owner = (l: string) => {
    const m = l.match(/\b([A-Z][a-z]{2,})\b/);
    return m ? m[1] : "Unassigned";
  };
  const due = (l: string) => {
    const m = l.match(
      /\b(today|tomorrow|monday|tuesday|wednesday|thursday|friday|next week|\d{1,2}\s\w+|\d{4}-\d{2}-\d{2})\b/i,
    );
    return m ? m[1] : "No date given";
  };

  return {
    summary: `${title.trim() || "Meeting"}: ${
      lines.length
        ? `${lines.length} points captured, ${decisions.length} decision(s) and ${actionLines.length} action item(s) identified.`
        : "No notes provided yet."
    } Review the extracted items below before sharing.`,
    keyPoints,
    decisions,
    actions: actionLines.map((l) => ({ task: l, owner: owner(l), due: due(l) })),
  };
}

export interface TaskInput {
  id: string;
  title: string;
  deadline: string;
  duration: number;
  importance: number;
  urgency: number;
  notes?: string;
  done?: boolean;
}

export function priorityOf(t: TaskInput): Priority {
  const score = t.importance * 1.2 + t.urgency;
  if (score >= 9) return "Critical";
  if (score >= 7) return "High";
  if (score >= 4.5) return "Medium";
  return "Low";
}

export function isOverdue(t: TaskInput): boolean {
  if (!t.deadline || t.done) return false;
  return new Date(t.deadline).getTime() < new Date().setHours(0, 0, 0, 0);
}

export function planTasks(tasks: TaskInput[]): TaskInput[] {
  const order: Priority[] = ["Critical", "High", "Medium", "Low"];
  return [...tasks].sort((a, b) => {
    const p = order.indexOf(priorityOf(a)) - order.indexOf(priorityOf(b));
    if (p !== 0) return p;
    return (a.deadline || "9999").localeCompare(b.deadline || "9999");
  });
}

export function suggestSchedule(tasks: TaskInput[]): { slot: string; task: string }[] {
  let minutes = 9 * 60;
  return planTasks(tasks)
    .filter((t) => !t.done)
    .slice(0, 5)
    .map((t) => {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      minutes += Math.max(30, t.duration);
      return {
        slot: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
        task: t.title,
      };
    });
}

export interface ResearchResult {
  question: string;
  summary: string;
  findings: string[];
  insights: string[];
  themes: string[];
  nextSteps: string[];
}

export function runResearch(question: string, material: string): ResearchResult {
  const lines = bullets(material);
  const words = material
    .toLowerCase()
    .match(/\b[a-z]{6,}\b/g)
    ?.reduce<Record<string, number>>((acc, w) => {
      acc[w] = (acc[w] ?? 0) + 1;
      return acc;
    }, {});
  const themes = Object.entries(words ?? {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([w, c]) => `${w} (${c} mentions)`);

  return {
    question: question.trim() || "Untitled research question",
    summary: lines.length
      ? `The material contains ${lines.length} distinct statements. The strongest recurring topics are ${themes
          .slice(0, 3)
          .map((t) => t.split(" ")[0])
          .join(", ")}. This is a draft synthesis — verify claims against the original sources.`
      : "No material provided yet. Paste notes, an article, or research text to generate a synthesis.",
    findings: lines.slice(0, 5),
    insights: lines
      .filter((l) => /because|therefore|suggests|shows|indicates|however|but/i.test(l))
      .slice(0, 4),
    themes,
    nextSteps: [
      "Verify the key findings against the original sources.",
      "Identify gaps where the material does not answer the research question.",
      "Compare with at least one contrasting source before concluding.",
    ],
  };
}

export function chatReply(prompt: string): string {
  const p = prompt.toLowerCase();
  if (/email|write to|reply/.test(p)) {
    return "I can draft that. Open the Smart Email Generator and I'll use the audience, purpose, tone and key points you give me — then you can edit or regenerate the draft before sending.";
  }
  if (/meeting|notes|transcript|summar/.test(p)) {
    return "Paste the notes into the Meeting Notes Summarizer and I'll extract a summary, decisions, action items, owners and deadlines. Anything I can't infer will be marked as unassigned rather than guessed.";
  }
  if (/task|priorit|plan my day|schedule|work on first/.test(p)) {
    return "Add your tasks with deadlines, importance and urgency in the AI Task Planner. I'll rank them Critical to Low, flag overdue items, and suggest a schedule you can adjust.";
  }
  if (/research|explain|paper|topic/.test(p)) {
    return "Start with the AI Research Assistant: give me the research question plus the material, and I'll return a summary, key findings, themes and suggested next steps. Treat the synthesis as a draft to verify.";
  }
  return "Here's my read on that: give me the specific context — audience, deadline, or source material — and I'll produce a structured draft you can edit. I'd rather flag uncertainty than present a guess as fact.";
}

export const SUGGESTED_PROMPTS = [
  "Write an email",
  "Summarise notes",
  "Plan my day",
  "Research a topic",
  "Ask anything",
];
