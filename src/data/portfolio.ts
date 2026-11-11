import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CircleDot,
  GitBranch,
  Home,
  Link,
  Mail,
} from "lucide-react";

export const githubUsername = "AnuragTummapudi";

const CONTACT_LINKS = {
  github: `https://github.com/${githubUsername}`,
  linkedin: "https://linkedin.com/in/anuragtummapudi",
  mail: "mailto:anuragtummapudi@gmail.com",
  resume: "mailto:anuragtummapudi@gmail.com?subject=Resume%20request",
} as const;

const PROJECT_LINKS = {
  quietProtocolGithub: `https://github.com/${githubUsername}/Quite-Protocol`,
  iplAuctionLive: "https://iplauction.fun",
  aisleGithub: `https://github.com/${githubUsername}/Aisle`,
  enswapGithub: `https://github.com/${githubUsername}/ENSwap-Identity`,
  kinLive: "https://kin.asrithtanniru.dev",
  kinGithub: "https://github.com/asrithtanniru/ETHGlobal",
  ntlRecruitmentLive: "https://rc.ntlap.in",
  rescu3Github: `https://github.com/${githubUsername}/Rescu3`,
  localflowLive: "https://localflow.in",
  localflowGithub: `https://github.com/${githubUsername}/LocalFlow`,
} as const;

export type Project = {
  title: string;
  subtitle: string;
  date: string;
  badge: string;
  description: string;
  highlights?: string[];
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  /** Screenshot in /public, shown inside the gradient frame. */
  image?: string;
  /** Two gradient stops for the preview frame. */
  accent: [string, string];
};

export type Achievement = {
  title: string;
  year: string;
  description: string;
  prize?: string;
};

export type ExperienceRole = {
  title: string;
  period: string;
  meta?: string;
};

export type Experience = {
  company: string;
  /** Square logo in /public, shown next to the company name. */
  logo?: string;
  role: string;
  type: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
  /** Earlier roles at the same company, newest first. */
  roles?: ExperienceRole[];
};

export type VolunteerRole = {
  organization: string;
  role: string;
  description: string;
  tags: string[];
};

export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type CommandItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Anurag Tummapudi",
  initials: "AT",
  meta: "19 · AI Engineer",
  location: "India",
  focus: "Real-time voice agents, GenAI systems, and agentic workflows",
};

export const socialLinks = [
  { label: "GitHub", href: CONTACT_LINKS.github, kind: "github" },
  { label: "LinkedIn", href: CONTACT_LINKS.linkedin, kind: "linkedin" },
  { label: "Mail", href: CONTACT_LINKS.mail, kind: "mail" },
  { label: "Resume", href: CONTACT_LINKS.resume, kind: "resume" },
] as const;

export const projects: Project[] = [
  {
    title: "LocalFlow",
    subtitle: "Free, local dictation app for Mac.",
    date: "2026",
    badge: "Open Source",
    description:
      "Hold a hotkey, speak, release — your words land in whatever app you're using. On-device speech recognition with Apple Speech, Parakeet, or Whisper, plus transcript cleanup, AI rewrites, voice commands, and custom vocabulary.",
    tags: ["macOS", "On-device AI", "Speech-to-Text", "Whisper"],
    links: {
      live: PROJECT_LINKS.localflowLive,
      github: PROJECT_LINKS.localflowGithub,
    },
    image: "/projects/localflow.webp",
    accent: ["#3b4fe0", "#ffd43b"],
  },
  {
    title: "Kin",
    subtitle: "Pay the bills back home from your stablecoins.",
    date: "2026",
    badge: "ETHGlobal",
    description:
      "Kin holds your USDT in an onchain vault and lets an AI agent pay your family's bills — only to payees verified through ENS by a licensed provider. Spending caps, signed bills, a 24h reclaim window, and nominee takeover keep funds safe.",
    tags: ["Solidity", "ENS", "AI Agents", "Stablecoins", "Arkiv"],
    links: {
      live: PROJECT_LINKS.kinLive,
      github: PROJECT_LINKS.kinGithub,
    },
    image: "/projects/kin.webp",
    accent: ["#e7e5e0", "#3f3f46"],
  },
  {
    title: "NTL Recruitment",
    subtitle: "Recruitment 2026 portal for Next Tech Lab AP.",
    date: "2026",
    badge: "Next Tech Lab",
    description:
      "The application portal for Next Tech Lab AP's 2026 recruitment drive. Students sign in with their SRMAP Google account, apply before the deadline, and the lab reviews applications in one place.",
    tags: ["Next.js", "Google OAuth", "Cloudflare"],
    links: {
      live: PROJECT_LINKS.ntlRecruitmentLive,
    },
    image: "/projects/ntl-recruitment.png",
    accent: ["#38bdf8", "#1d4ed8"],
  },
  {
    title: "IPLAuction.fun",
    subtitle: "Real-time IPL Auction Platform",
    date: "2026",
    badge: "10K+ Users",
    description:
      "Built and deployed a live IPL auction simulation platform serving 10K+ users with scalable frontend/backend architecture, real-time bidding workflows, player analytics, and dynamic auction state management.",
    tags: ["React", "Node.js", "Express", "Real-time Systems", "Deployment"],
    links: {
      live: PROJECT_LINKS.iplAuctionLive,
    },
    image: "/projects/iplauction.webp",
    accent: ["#f59e0b", "#ea580c"],
  },
  {
    title: "Quiet Protocol",
    subtitle: "AI-native Persistent Gaming Protocol",
    date: "2026",
    badge: "HackSRM 7.0 Winner",
    description:
      "Built an AI-powered persistent NPC interaction system with evolving memory and blockchain-backed action verification. Integrated conversational AI workflows with on-chain event validation across multiple sponsor tracks.",
    highlights: [
      "HackSRM 7.0 Grand Prize winner",
      "Multiple sponsor track awards",
      "$1400+ total prizes",
    ],
    tags: [
      "Next.js",
      "Solidity",
      "ElevenLabs",
      "AI Agents",
      "Blockchain",
      "Real-time AI",
    ],
    links: {
      github: PROJECT_LINKS.quietProtocolGithub,
    },
    accent: ["#7c3aed", "#f472b6"],
  },
  {
    title: "Aisle",
    subtitle: "Next-Basket Recommendation & Reorder Prediction Engine",
    date: "2026",
    badge: "ML Project",
    description:
      "A machine learning project built on the Instacart Online Grocery Shopping Dataset to predict product reorders and generate next-basket recommendations using supervised learning, feature engineering, and ranking metrics.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "LightGBM/XGBoost",
      "Streamlit",
      "Recommendation Systems",
      "ML",
    ],
    links: {
      github: PROJECT_LINKS.aisleGithub,
    },
    accent: ["#10b981", "#a3e635"],
  },
  {
    title: "ENSwap",
    subtitle: "Decentralized Identity + DeFi Platform",
    date: "2025",
    badge: "ETHGlobal New Delhi",
    description:
      "Built a decentralized identity and token swap platform integrating ENS systems, Hedera, and DeFi workflows with identity-driven token interactions and smart contract deployment workflows.",
    tags: ["Solidity", "Hedera", "ENS", "Web3", "Smart Contracts", "React"],
    links: {
      github: PROJECT_LINKS.enswapGithub,
    },
    accent: ["#0ea5e9", "#6366f1"],
  },
  {
    title: "Rescu3",
    subtitle: "Decentralized Wallet Recovery Protocol",
    date: "2025",
    badge: "Web3 Security",
    description:
      "Developed a decentralized Ethereum wallet recovery protocol eliminating dependency on seed phrases using secure commit-reveal cryptographic workflows and guardian-based recovery architecture.",
    tags: ["Solidity", "Ethereum", "Cryptography", "Smart Contracts", "Web3 Security"],
    links: {
      github: PROJECT_LINKS.rescu3Github,
    },
    accent: ["#ef4444", "#f97316"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Winner — HackSRM 7.0 Grand Prize + Sponsor Tracks",
    year: "2026",
    description:
      "Won Grand Prize and multiple sponsor track awards for Quiet Protocol, an AI-native persistent gaming protocol with evolving NPC memory and blockchain-backed action verification.",
    prize: "$1400+",
  },
  {
    title: "Finalist — Blueprint IIT Delhi",
    year: "2025",
    description:
      "Reached the Blueprint IIT Delhi finale among 4200+ registrations for Loom.",
  },
  {
    title: "Runner-up — Multiple Hackathons",
    year: "2025-2026",
    description:
      "Secured runner-up positions across OMNITRIX Hackathon, Microsoft Student Community Hackathon, and CodeFusion Hackathon for AI, healthcare, and decentralized infrastructure projects.",
    prize: "$250+ combined where applicable",
  },
];

export const experiences: Experience[] = [
  {
    company: "Next Tech Lab, AP",
    logo: "/logos/ntl.png",
    role: "Syndicate",
    type: "Full-time",
    location: "On-site",
    period: "Apr 2025 - Present",
    roles: [
      { title: "Syndicate", period: "Jul 2026 - Present", meta: "Full-time · On-site" },
      { title: "Interim Board", period: "Jan 2026 - Jul 2026" },
      { title: "Associate", period: "Apr 2025 - Jan 2026" },
    ],
    bullets: [
      "Part of the first and only student-run, multi-disciplinary research lab at SRM University AP, spanning 8 departments and 6 research groups: AI, IoT, Computational Biology, Electrical Systems, Extended Reality, and Cryptocurrency.",
      "Non-hierarchical structure where associates freely explore ideas, collaborate across domains, and access advanced research infrastructure.",
      "Recognition: the lab is the Silver Winner of the QS Reimagine Education Awards 2018 (Student-Led Innovation), awarded at the Wharton School, UPenn.",
    ],
    tags: ["Artificial Intelligence", "Full-Stack Development"],
  },
  {
    company: "Self Employed",
    role: "Freelancer (SDE Intern)",
    type: "Freelance",
    location: "Hybrid",
    period: "Jun 2026 - Present",
    bullets: [],
    tags: [],
  },
  {
    company: "IndusLabs AI",
    logo: "/logos/induslabs.png",
    role: "AI Engineering Intern",
    type: "Remote",
    location: "Remote",
    period: "Jul 2025 - Dec 2025",
    bullets: [
      "Engineered real-time conversational voice agents using LiveKit and LLM orchestration workflows for stable multi-turn interactions.",
      "Built streaming STT -> LLM -> TTS pipelines with retrieval-grounded responses and tool calling workflows.",
      "Integrated scalable backend APIs and AI workflows using React, Node.js, Express, and MongoDB.",
      "Optimized conversational latency and streaming performance for smoother real-time voice interaction.",
    ],
    tags: [
      "LiveKit",
      "LLM Orchestration",
      "Voice Agents",
      "STT",
      "TTS",
      "RAG",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    company: "JTPL",
    role: "Founding Associate Engineer",
    type: "Remote",
    location: "Remote",
    period: "Jun 2025 - Nov 2025",
    bullets: [
      "Spearheaded platform architecture and scalable backend workflows using the MERN stack.",
      "Built AI-powered automation workflows for intelligent document parsing and summarization.",
      "Developed citizen-facing service systems focused on accessibility and operational efficiency.",
    ],
    tags: [
      "MERN",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI Automation",
      "Document Parsing",
      "Summarization",
    ],
  },
];

export const volunteering: VolunteerRole[] = [
  {
    organization: "Next Tech Lab",
    role: "Interim Board Member",
    description:
      "Interim Board Member at Next Tech Lab, a QS-awarded student-run community. Contributed across technical domains, supported community initiatives, and helped manage student-led innovation programs.",
    tags: ["Leadership", "Community", "Student Innovation", "Technical Programs"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
      { name: "Solidity", icon: "solidity" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML/CSS", icon: "html" },
      { name: "Framer Motion", icon: "framer" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST APIs", icon: "api" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      { name: "LLM Orchestration", icon: "brain" },
      { name: "RAG Pipelines", icon: "search" },
      { name: "Conversational AI", icon: "message" },
      { name: "AI Agents", icon: "bot" },
      { name: "Prompt Engineering", icon: "terminal" },
      { name: "Embeddings", icon: "network" },
      { name: "Vector Search", icon: "search" },
      { name: "NLP", icon: "brain" },
      { name: "Tool Calling", icon: "tool" },
      { name: "Function Calling", icon: "function" },
    ],
  },
  {
    title: "LLM Frameworks & Vector DBs",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "network" },
      { name: "LlamaIndex", icon: "database" },
      { name: "OpenAI APIs", icon: "openai" },
      { name: "Gemini APIs", icon: "gemini" },
      { name: "HuggingFace", icon: "huggingface" },
      { name: "Pinecone", icon: "database" },
      { name: "FAISS", icon: "database" },
      { name: "ChromaDB", icon: "chroma" },
    ],
  },
  {
    title: "Realtime AI Systems",
    skills: [
      { name: "LiveKit", icon: "livekit" },
      { name: "STT-TTS Pipelines", icon: "audio" },
      { name: "Streaming Architectures", icon: "stream" },
      { name: "Voice Agents", icon: "mic" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Vector Databases", icon: "database" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: "workflow" },
      { name: "AWS", icon: "cloud" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    title: "Web3",
    skills: [
      { name: "Solidity", icon: "solidity" },
      { name: "Hardhat", icon: "hardhat" },
      { name: "IPFS", icon: "ipfs" },
      { name: "MetaMask", icon: "metamask" },
      { name: "Hedera", icon: "hedera" },
      { name: "Ethereum", icon: "ethereum" },
    ],
  },
];

export const navigationCommands: CommandItem[] = [
  {
    title: "Home",
    description: "Return to the profile page",
    href: "/",
    icon: Home,
  },
  {
    title: "Projects",
    description: "Open the full project collection",
    href: "/projects",
    icon: BriefcaseBusiness,
  },
];

export const sectionCommands: CommandItem[] = [
  {
    title: "Experience",
    description: "AI engineering and founding engineering roles",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    description: "Featured AI, ML, realtime, and Web3 builds",
    href: "#projects",
    icon: CircleDot,
  },
  {
    title: "Skills",
    description: "Languages, AI systems, full-stack, cloud, and Web3 tools",
    href: "#skills",
    icon: CircleDot,
  },
  {
    title: "Achievements",
    description: "Hackathon wins, finalist results, and runner-up placements",
    href: "#achievements",
    icon: BadgeCheck,
  },
  {
    title: "Volunteering",
    description: "Leadership and student innovation work",
    href: "#volunteering",
    icon: CircleDot,
  },
  {
    title: "GitHub Activity",
    description: "Live contribution calendar and public repository stats",
    href: "#github-activity",
    icon: GitBranch,
  },
  {
    title: "Connect",
    description: "Social links and contact",
    href: "#connect",
    icon: CircleDot,
  },
];

export const socialCommands: CommandItem[] = [
  {
    title: "GitHub",
    description: "Open GitHub profile",
    href: CONTACT_LINKS.github,
    icon: GitBranch,
  },
  {
    title: "LinkedIn",
    description: "Open LinkedIn profile",
    href: CONTACT_LINKS.linkedin,
    icon: Link,
  },
  {
    title: "Mail",
    description: "Start an email draft",
    href: CONTACT_LINKS.mail,
    icon: Mail,
  },
  {
    title: "Resume",
    description: "Request resume by email",
    href: CONTACT_LINKS.resume,
    icon: Award,
  },
];
