export interface Photo {
  src: string;
  caption: string;
  vibe: string;
}

export interface Session {
  id: string;
  label: string;
  sublabel: string;
  date: string;
  coverSrc: string;
  photos: Photo[];
}

function img(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export const sessions: Session[] = [
  {
    id: "apr-16",
    label: "Week 1 Lab",
    sublabel: "Thursday Practical",
    date: "16 April 2026",
    coverSrc: img("WhatsApp Image 2026-04-16 at 10.02.13.jpeg"),
    photos: [
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.13.jpeg"),
        caption: "The Thursday crew locked in — laptops open, VS Code running",
        vibe: "🔒 In the zone",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.13 (1).jpeg"),
        caption: "Deep focus. Two screens, one mission — pair programming before it was cool",
        vibe: "🎯 Focused",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.13 (2).jpeg"),
        caption: "The lab at full capacity — everyone on a mission, no seat wasted",
        vibe: "🔥 Full house",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.14.jpeg"),
        caption: "That look when the code compiles and you're not entirely sure why it works",
        vibe: "🤷 It works tho",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.14 (1).jpeg"),
        caption: "Fingers flying, problems dissolving one by one",
        vibe: "🚀 In flow",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.14 (2).jpeg"),
        caption: "Split view mastery — code on the left, live preview on the right. Main character energy.",
        vibe: "👑 Split queen",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.14 (3).jpeg"),
        caption: "One function at a time, building something that will actually ship",
        vibe: "🏗️ Building",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.15.jpeg"),
        caption: "Green energy drink on deck — fuelling the grind and keeping the vibes high",
        vibe: "☕ Fuelled up",
      },
      {
        src: img("WhatsApp Image 2026-04-16 at 10.02.15 (1).jpeg"),
        caption: "The whole squad keeping it moving. No bug survives in this room.",
        vibe: "💪 Squad goals",
      },
    ],
  },
  {
    id: "may-15",
    label: "Week 5 Lab",
    sublabel: "Thursday Practical",
    date: "15 May 2026",
    coverSrc: img("WhatsApp Image 2026-05-15 at 09.36.04 (1).jpeg"),
    photos: [
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.04.jpeg"),
        caption: "In flow state — hands moving, mind locked in, distractions don't exist",
        vibe: "🎧 Flow state",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.04 (1).jpeg"),
        caption: "When the lecturer asks if everyone understands and you genuinely do ✌️",
        vibe: "😎 Got it",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.05.jpeg"),
        caption: "Still sending it, no cap. Week 5 and the energy hasn't dropped.",
        vibe: "🔥 Sending it",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.05 (1).jpeg"),
        caption: "Pair programming and genuinely having a good time about it — this is what it's about",
        vibe: "😄 Pair energy",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.06.jpeg"),
        caption: "Chicago hoodie + energy drink + Huawei laptop = the formula for a productive session",
        vibe: "🧪 The formula",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.06 (1).jpeg"),
        caption: "RGB teal keyboard glowing at 9am — the setup does not miss, ever",
        vibe: "💫 Setup check",
      },
      {
        src: img("WhatsApp Image 2026-05-15 at 09.36.07.jpeg"),
        caption: "Side by side, levelling up together — that's the whole point",
        vibe: "🚀 Together",
      },
    ],
  },
];

export const allPhotos = sessions.flatMap((s) =>
  s.photos.map((p) => ({ ...p, session: s.label, sessionId: s.id, date: s.date }))
);
