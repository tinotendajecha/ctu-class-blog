import { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "intro-to-react-hooks",
    title: "Understanding React Hooks: A Practical Guide",
    excerpt:
      "Hooks changed everything about how we write React components. In this article, we break down useState, useEffect, and custom hooks with real-world examples from our class projects.",
    content: `React Hooks were introduced in React 16.8 and have since become the standard way to write React components. Before hooks, you had to use class components whenever you needed state or lifecycle methods. Hooks let you use these features in functional components, making your code simpler and easier to share.

## useState

The \`useState\` hook lets you add state to a functional component. It returns a pair: the current state value and a function to update it.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

\`useEffect\` lets you perform side effects — like fetching data, subscribing to events, or manually changing the DOM. It runs after every render by default, but you can control when it runs using the dependency array.

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

The real power of hooks is the ability to extract stateful logic into reusable functions called custom hooks. A custom hook is just a function that starts with \`use\` and can call other hooks.

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
\`\`\`

Custom hooks make it trivial to share logic across components without duplicating code or fighting with class inheritance patterns.

## Conclusion

Hooks are one of the most important additions to React. Start with \`useState\` and \`useEffect\`, then gradually explore \`useCallback\`, \`useMemo\`, and eventually write your own custom hooks as patterns emerge in your code.`,
    author: "Tinotenda Jecha",
    authorRole: "Facilitator",
    date: "2026-05-10",
    category: "React",
    readTime: "6 min read",
    tags: ["JavaScript", "React"],
  },
  {
    slug: "how-to-start-learning-python",
    title: "How to Start Learning Python: A Practical Roadmap",
    excerpt:
      "Python is the most beginner-friendly language in the world — and one of the most powerful. Here's a no-nonsense roadmap for absolute beginners to go from zero to writing real programs.",
    content: `Python is the single best language to learn first. It reads almost like plain English, runs everywhere, and is used in web development, data science, AI, automation, and more. If you're starting from scratch, here's exactly how I'd tell you to begin.

## Why Python?

- Readable syntax that doesn't fight you
- Massive ecosystem — there's a library for everything
- Used heavily in AI and data engineering (which is where the industry is heading)
- Huge community and job market

## Step 1: Install Python

Go to python.org and download the latest stable version. On Windows, check the box that says "Add Python to PATH" during installation — beginners miss this constantly.

Verify it works:

\`\`\`bash
python --version
\`\`\`

## Step 2: Learn the Fundamentals

Spend a week or two on just these concepts:

**Variables and data types:**
\`\`\`python
name = "Tino"
age = 22
is_student = True
scores = [85, 92, 78]
\`\`\`

**Functions:**
\`\`\`python
def greet(name):
    return f"Hello, {name}!"

print(greet("Giselle"))
\`\`\`

**Loops and conditionals:**
\`\`\`python
for score in scores:
    if score >= 80:
        print(f"{score} — Pass")
    else:
        print(f"{score} — Try again")
\`\`\`

## Step 3: Build Something Small

Don't wait until you feel "ready" — you never will. Build:

- A number guessing game
- A simple calculator
- A script that renames files in a folder
- A web scraper (use \`requests\` + \`BeautifulSoup\`)

## Step 4: Pick a Direction

Python is a gateway drug. After the basics, choose a specialisation:

- **Web dev:** FastAPI or Flask
- **Data engineering:** Pandas, Polars, web scraping
- **AI/ML:** PyTorch, scikit-learn, LangChain
- **Automation:** Playwright, schedule, cron jobs

## Resources

- **CS50P** (Harvard's free Python course) — the best beginner course, period
- **python.org/docs** — official docs are actually readable
- **Real Python** — excellent articles for every level
- **freeCodeCamp** — free video courses

## Conclusion

Start today. Install Python, open a terminal, and type \`print("Hello world")\`. That's step one. The rest follows if you keep showing up.`,
    author: "Tinotenda Jecha",
    authorRole: "Facilitator",
    date: "2026-05-14",
    category: "Python",
    readTime: "7 min read",
    tags: ["Python"],
  },
  {
    slug: "vibecoding-masterclass",
    title: "Vibecoding: A Masterclass in AI-Assisted Development",
    excerpt:
      "Vibecoding is the art of building software by describing your intent to an AI and letting it handle the implementation. Here's how to do it properly — and why most people are doing it wrong.",
    content: `In early 2025, Andrej Karpathy coined the term "vibe coding" — and the dev community has never been the same. The idea is simple: instead of writing every line yourself, you describe what you want and let the AI write it. You review, steer, and ship.

I've been doing this in every project for the past year. Here's what I've learned.

## What Vibecoding Is (and Isn't)

Vibecoding is NOT just asking ChatGPT to write your code and pasting it in. That's how you get code you don't understand that breaks in production and you have no idea why.

Vibecoding IS a collaborative workflow where:
- You understand the architecture and intent
- The AI handles the boilerplate and implementation details
- You review, test, and steer every step
- You remain the engineer — the AI is your very fast intern

## The Right Tools

- **Claude (Anthropic)** — best for architecture, reasoning, and long context
- **Cursor** — VS Code fork with AI built deeply into the editor
- **GitHub Copilot** — best autocomplete, tight VS Code integration
- **v0 by Vercel** — generate React UI components from a description

My current stack: Cursor for everything, Claude for complex reasoning, v0 for UI mockups.

## How to Prompt Well

The quality of your output is entirely determined by the quality of your input. Vague prompts produce vague code.

**Bad prompt:**
\`\`\`
make a login form
\`\`\`

**Good prompt:**
\`\`\`
Create a login form component in Next.js using TypeScript and Tailwind CSS.
It should have email and password fields, a submit button, and error state handling.
Use React Hook Form for validation. Show a loading spinner on submit.
The form should call a handleLogin(email, password) function that I will provide.
\`\`\`

## When to Vibe vs When to Grind

Vibecoding works brilliantly for:
- Boilerplate and scaffolding
- CRUD operations
- UI components you've built a hundred times
- Refactoring well-understood code
- Writing tests

Write it yourself when:
- You're learning a new concept (don't skip the struggle)
- It's a critical algorithm or security-sensitive logic
- The AI keeps getting it wrong after 3 attempts

## Common Pitfalls

1. **Accepting output you don't understand.** Always read the code. If you can't explain what it does, you don't own it.
2. **Skipping tests.** AI writes bugs too. Test everything.
3. **Prompt dependency.** Don't let vibecoding stop you from improving your own skills. Use it as an accelerator, not a replacement.

## Conclusion

Vibecoding is the most significant productivity shift in software development since Stack Overflow. Learn to use it well and you'll ship in hours what used to take days. But stay the engineer — the AI works for you, not the other way around.`,
    author: "Tinotenda Jecha",
    authorRole: "Facilitator",
    date: "2026-05-12",
    category: "AI",
    readTime: "9 min read",
    tags: ["AI", "JavaScript", "Python"],
  },
  {
    slug: "ai-and-the-future-of-coding",
    title: "AI and the Future of Software Development: A Dev's Honest Take",
    excerpt:
      "AI isn't going to replace developers — it's going to replace developers who don't use AI. Here's my honest perspective as someone building with LLMs every day.",
    content: `I'm going to be direct: I think AI is the most important shift in software development since the internet. And I think a lot of developers are in denial about what's coming.

## What's Actually Happening

Large language models can now write production-quality code in most mainstream languages. They can architect systems, explain errors, write tests, and review PRs. Not perfectly — but well enough to be transformative.

Tools like Claude, GPT-4o, and Gemini are already at a level where a skilled developer using them is dramatically more productive than one who isn't. That gap is going to widen.

## The Shift in the Developer's Role

The developer's job is changing from "write code" to "direct and verify the output of systems that write code." This is not a downgrade — it's an upgrade. You still need to understand architecture, data structures, algorithms, security, and systems design. In fact, those skills matter more now, because you need to evaluate what the AI produces.

What matters less:
- Memorising syntax
- Writing boilerplate from scratch
- Looking up how to do common operations

What matters more:
- System design and architecture
- Understanding trade-offs
- Knowing when AI output is wrong
- Prompting and steering intelligently

## Multi-Agent Systems

The frontier that excites me most is multi-agent AI — where you orchestrate multiple specialised AI agents to solve complex problems together. I work with frameworks like LangChain and CrewAI daily. You can have one agent that researches, one that writes, one that reviews, and an orchestrator that manages them all.

This is going to change how we build software. We're moving from "a developer writes code" to "a developer designs systems of agents that build things."

## What Students Should Do Now

1. Get deeply familiar with at least one AI coding tool (I recommend Cursor + Claude)
2. Learn Python — it's the language of AI
3. Understand the APIs: OpenAI, Anthropic, HuggingFace
4. Build something with an LLM. Anything. A chatbot, a RAG system, an agent.
5. Don't wait. The gap between those who've built with AI and those who haven't is already significant and growing fast.

## My Honest Take

Some people are scared. I get it. But every major technological shift created more jobs and opportunities than it eliminated — for those who adapted. The developers who will struggle are those who see AI as a threat to resist rather than a tool to master.

I'm building with AI every single day. It's made me a better developer, not a lazier one. It removes the friction between ideas and implementation. That's a good thing.`,
    author: "Tinotenda Jecha",
    authorRole: "Facilitator",
    date: "2026-05-08",
    category: "AI",
    readTime: "8 min read",
    tags: ["AI", "Python"],
  },
  {
    slug: "essential-tools-for-software-developers",
    title: "The Developer's Toolkit: Tools Every CS Student Should Be Using",
    excerpt:
      "After years of building projects and watching classmates struggle, here are the tools that actually move the needle — the ones I wish someone had handed me in my first year.",
    content: `Nobody hands you the toolkit when you start. You find these tools slowly, usually after wasting time without them. Here are the ones that made the biggest difference in my development workflow — and that every student in this class should know about.

## Code Editor: VS Code

There is no meaningful debate here. VS Code is the editor. It's free, fast, extensible, and used professionally everywhere.

**Must-have extensions:**
- **Prettier** — auto-formats your code on save. Never argue about spacing again.
- **ESLint** — catches bugs and bad patterns before you run the code
- **GitLens** — see who changed what and when, right in the editor
- **Thunder Client** — test REST APIs without leaving VS Code
- **GitHub Copilot** — AI autocomplete (free for students)
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes

## Version Control: Git + GitHub

If you're not using Git, you're one mistake away from losing everything. Period.

Learn these commands until they're muscle memory:
\`\`\`bash
git init
git add .
git commit -m "your message"
git push origin main
git checkout -b new-feature
git pull origin main
\`\`\`

GitHub is where your work lives. Every project you build should be on GitHub — it's your portfolio.

## API Testing: Postman or Thunder Client

Before you integrate an API into your frontend, test it in isolation. Postman lets you send HTTP requests, inspect responses, and save collections of requests for a project.

Thunder Client (the VS Code extension) does the same thing without leaving your editor.

## Deployment: Vercel

For Next.js and React projects, Vercel is magic. Connect your GitHub repo, and every push to main automatically deploys. Free tier is generous. Your project is live in minutes.

For Python backends: Railway or Render.

## Design: Figma

Every developer should know basic Figma. You'll work with designers, you'll need to implement designs, and having a rough mockup before you code saves enormous time. The free tier is fully functional.

## AI Tools: Claude and ChatGPT

Use them every day. For:
- Explaining errors you don't understand
- Reviewing your code
- Generating boilerplate
- Explaining concepts in plain language
- Writing documentation

Claude (Anthropic) is my preference for longer context and nuanced reasoning. ChatGPT is great for quick questions.

## Database GUI: TablePlus or DBeaver

Don't interact with databases through the terminal forever. TablePlus (paid, worth it) or DBeaver (free) let you browse your database visually, run queries, and understand your data.

## Note-taking: Notion

Keep a developer notebook. Document what you learn, save useful snippets, track your projects. Notion is free and flexible enough to be whatever you need.

## Conclusion

Tools don't make you a developer. But the right tools remove friction, and less friction means you build more and learn faster. Start with VS Code, Git, and Postman. Add the others as you need them.`,
    author: "Tinotenda Jecha",
    authorRole: "Facilitator",
    date: "2026-05-01",
    category: "Tools",
    readTime: "8 min read",
    tags: ["Git", "JavaScript", "Python"],
  },
];
