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
    author: "Tino Jecha",
    date: "2026-05-10",
    category: "React",
    readTime: "6 min read",
  },
  {
    slug: "git-workflow-best-practices",
    title: "Git Workflow Best Practices for Student Teams",
    excerpt:
      "Collaborating on code can get messy fast. Here are the branching strategies and commit habits our class swears by after a semester of team projects.",
    content: `When working in a team, having a clear Git workflow is essential. Without one, you'll spend more time resolving conflicts than writing code. Here's what we've learned works well for small student teams.

## Use Feature Branches

Never commit directly to \`main\`. Create a new branch for every feature or fix:

\`\`\`bash
git checkout -b feature/user-authentication
\`\`\`

This keeps \`main\` stable and makes code review easy — you review a branch before merging it.

## Write Meaningful Commit Messages

A good commit message explains *why* the change was made, not just what. Compare:

- Bad: \`fix stuff\`
- Good: \`fix login redirect loop when token expires\`

Use the imperative mood: "Add feature", "Fix bug", "Update config".

## Pull Requests for Everything

Even if you're working alone, opening a pull request before merging trains you to document your work and catches mistakes. In a team, PRs are mandatory — they're where code review happens.

## Rebase Before Merging

Before merging your branch, rebase it on \`main\` to avoid messy merge commits:

\`\`\`bash
git fetch origin
git rebase origin/main
\`\`\`

This keeps the history linear and much easier to read.

## .gitignore Matters

Always include a \`.gitignore\` from the start. Never commit \`node_modules\`, \`.env\` files, or build artifacts. Use [gitignore.io](https://gitignore.io) to generate one for your stack.

## Conclusion

A good Git workflow is invisible when it works and painful when it doesn't. Set these habits early and your team collaborations will be dramatically smoother.`,
    author: "Alice Moyo",
    date: "2026-05-05",
    category: "DevOps",
    readTime: "5 min read",
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "Both are powerful layout tools, but they solve different problems. Learn the mental model that makes choosing between them effortless.",
    content: `CSS Grid and Flexbox are the two modern layout systems in CSS. They're often taught as competing tools, but they're actually designed to solve different kinds of problems.

## Flexbox: One Dimension

Flexbox is a *one-dimensional* layout system. It's great for laying out items in a single row or column and distributing space between them.

Use Flexbox when:
- You're aligning items in a navbar
- You want to center something vertically and horizontally
- You're building a row of cards that wraps to a new line

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Grid: Two Dimensions

Grid is a *two-dimensional* layout system. It lets you control both rows and columns at the same time.

Use Grid when:
- You're building the overall page layout
- You have a card grid that needs precise column control
- You want items to align across both axes

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
\`\`\`

## The Mental Model

Think of it this way: if you're thinking about a *line* of items, use Flexbox. If you're thinking about a *grid* of items, use Grid. In practice, most layouts use both — Grid for the page structure, Flexbox for components inside each section.

## Conclusion

Don't pick one over the other. Master both. The best developers use Flexbox and Grid together, choosing whichever is right for the specific layout challenge at hand.`,
    author: "Brian Ncube",
    date: "2026-04-28",
    category: "CSS",
    readTime: "7 min read",
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript in 30 Minutes: What Every JS Developer Should Know",
    excerpt:
      "TypeScript adds a type system on top of JavaScript. Here's what you actually need to get started without drowning in theory.",
    content: `TypeScript is a superset of JavaScript that adds static type checking. That means TypeScript catches certain classes of bugs at *compile time* — before you ever run your code.

## Basic Types

\`\`\`typescript
let name: string = "Alice";
let age: number = 22;
let isStudent: boolean = true;
let scores: number[] = [85, 92, 78];
\`\`\`

## Interfaces

Interfaces define the shape of an object. This is incredibly useful when you're passing data around your app.

\`\`\`typescript
interface Student {
  name: string;
  age: number;
  gpa?: number; // optional property
}

function greet(student: Student) {
  return \`Hello, \${student.name}!\`;
}
\`\`\`

## Function Types

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
\`\`\`

## Union Types

Sometimes a value can be one of several types:

\`\`\`typescript
type Status = "active" | "inactive" | "pending";
let status: Status = "active";
\`\`\`

## Generics

Generics let you write reusable functions that work with any type:

\`\`\`typescript
function first<T>(arr: T[]): T {
  return arr[0];
}

first([1, 2, 3]);     // returns number
first(["a", "b"]);   // returns string
\`\`\`

## Conclusion

You don't need to learn all of TypeScript at once. Start by adding types to function parameters and return values. Add interfaces for your data structures. The rest will follow naturally as you encounter situations where the type system helps you.`,
    author: "Fatima Dube",
    date: "2026-04-20",
    category: "TypeScript",
    readTime: "8 min read",
  },
  {
    slug: "rest-api-design",
    title: "Designing Clean REST APIs: Lessons from Class Projects",
    excerpt:
      "After reviewing dozens of student APIs, here are the patterns that make an API intuitive and the anti-patterns that cause headaches.",
    content: `REST API design is both an art and a science. After reviewing dozens of student APIs this semester, a few patterns consistently make APIs better — and a few anti-patterns consistently cause pain.

## Use Nouns, Not Verbs in URLs

Bad: \`POST /createUser\`, \`GET /getUsers\`
Good: \`POST /users\`, \`GET /users\`

The HTTP method (GET, POST, PUT, DELETE) already tells you the action. The URL should name the *resource*.

## Use Proper HTTP Status Codes

- \`200 OK\` — success
- \`201 Created\` — resource was created
- \`400 Bad Request\` — client sent invalid data
- \`401 Unauthorized\` — not authenticated
- \`403 Forbidden\` — authenticated but not allowed
- \`404 Not Found\` — resource doesn't exist
- \`500 Internal Server Error\` — something went wrong on the server

## Consistent Response Shape

Pick a response structure and stick to it:

\`\`\`json
{
  "success": true,
  "data": { ... },
  "message": "User created successfully"
}
\`\`\`

## Versioning

Include a version in your URL from day one: \`/api/v1/users\`. This lets you make breaking changes later without breaking existing clients.

## Validate Everything

Never trust client input. Validate all request bodies, query params, and URL params. Return a \`400\` with a helpful message when validation fails.

## Conclusion

A clean API is a gift to your future self and anyone who integrates with your service. Invest the time upfront to name things well and return consistent responses — it pays dividends fast.`,
    author: "Emmanuel Chikwanda",
    date: "2026-04-15",
    category: "Backend",
    readTime: "9 min read",
  },
  {
    slug: "debugging-mindset",
    title: "The Debugging Mindset: How to Solve Problems Faster",
    excerpt:
      "Debugging isn't just about reading error messages. It's a systematic skill you can build. Here's the framework we teach in class.",
    content: `Every developer spends a significant portion of their time debugging. The difference between a developer who struggles and one who breezes through bugs isn't intelligence — it's process.

## Read the Error Message

This sounds obvious, but most beginners skim error messages looking for the line number and ignore the rest. Read the full error message. It usually tells you exactly what went wrong.

## Reproduce It First

Before you fix anything, make sure you can reliably reproduce the bug. If you can't reproduce it, you can't verify your fix. Identify the minimum set of steps to trigger the bug.

## Isolate the Problem

Comment out code or use binary search to narrow down where the bug lives. Ask yourself: "Does the bug still occur if I remove X?" Keep removing things until the bug disappears — then you know the last thing you removed was the culprit.

## Use console.log Strategically

Don't just log "here" or "it reached this point". Log the *values* you care about:

\`\`\`javascript
console.log('user before update:', user);
updateUser(user);
console.log('user after update:', user);
\`\`\`

## Read the Stack Trace

A stack trace is a list of function calls that led to the error. Start from the top (the error itself) and read downward until you see a file in *your* code (not a library). That's where to look first.

## Take a Break

Seriously. Your brain keeps working on problems in the background. A 10-minute walk has solved more bugs than hours of staring at a screen. Come back with fresh eyes.

## Conclusion

Debugging is a skill, not a talent. Build a systematic process and you'll solve bugs faster and with less frustration. The best debuggers are methodical, not just smart.`,
    author: "Sara Mwangi",
    date: "2026-04-08",
    category: "Fundamentals",
    readTime: "6 min read",
  },
];
