import {
  Blocks,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FunctionSquare,
  GitPullRequestArrow,
  Mic,
  MessageSquareText,
  Network,
  Search,
  TerminalSquare,
  Unplug,
  Volume2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiEthereum,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGooglegemini,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHedera,
  SiHtml5,
  SiHuggingface,
  SiIpfs,
  SiJavascript,
  SiLangchain,
  SiLivekit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRender,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skillGroups } from "@/data/portfolio";

const skillIcons: Record<string, IconType | LucideIcon> = {
  api: Unplug,
  audio: Volume2,
  bot: Bot,
  brain: Brain,
  chroma: Database,
  cloud: Cloud,
  cpp: SiCplusplus,
  css: SiCss,
  database: Database,
  docker: SiDocker,
  ethereum: SiEthereum,
  express: SiExpress,
  fastapi: SiFastapi,
  framer: SiFramer,
  function: FunctionSquare,
  gemini: SiGooglegemini,
  git: SiGit,
  githubactions: SiGithubactions,
  graphql: SiGraphql,
  hardhat: Blocks,
  hedera: SiHedera,
  html: SiHtml5,
  huggingface: SiHuggingface,
  ipfs: SiIpfs,
  java: SiOpenjdk,
  javascript: SiJavascript,
  langchain: SiLangchain,
  livekit: SiLivekit,
  message: MessageSquareText,
  metamask: Blocks,
  mic: Mic,
  mongodb: SiMongodb,
  mysql: SiMysql,
  network: Network,
  nextjs: SiNextdotjs,
  node: SiNodedotjs,
  openai: SiOpenai,
  postman: SiPostman,
  python: SiPython,
  react: SiReact,
  redis: SiRedis,
  render: SiRender,
  search: Search,
  solidity: SiSolidity,
  stream: GitPullRequestArrow,
  tailwind: SiTailwindcss,
  terminal: TerminalSquare,
  tool: Workflow,
  typescript: SiTypescript,
  vercel: SiVercel,
  workflow: Workflow,
};

const skillIconColors: Record<string, string> = {
  cpp: "#00599c",
  css: "#663399",
  docker: "#2496ed",
  ethereum: "#627eea",
  express: "#7a7a7a",
  fastapi: "#009688",
  framer: "#0055ff",
  gemini: "#8e75b2",
  git: "#f05032",
  githubactions: "#2088ff",
  graphql: "#e10098",
  hedera: "#8259ef",
  html: "#e34f26",
  huggingface: "#ffcc4d",
  ipfs: "#65c2cb",
  java: "#f89820",
  javascript: "#f7df1e",
  langchain: "#1c3c3c",
  livekit: "#ff635c",
  mongodb: "#47a248",
  mysql: "#4479a1",
  nextjs: "#7a7a7a",
  node: "#5fa04e",
  openai: "#10a37f",
  postman: "#ff6c37",
  python: "#3776ab",
  react: "#61dafb",
  redis: "#ff4438",
  render: "#46e3b7",
  solidity: "#7a7a7a",
  tailwind: "#06b6d4",
  typescript: "#3178c6",
  vercel: "#7a7a7a",
};

export function SkillsSection() {
  return (
    <div className="grid gap-3.5 md:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="rounded-md border border-edge bg-surface p-3.5"
        >
          <h3 className="font-mono text-[14px] font-semibold text-foreground">
            {group.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => {
              const Icon = skillIcons[skill.icon] ?? Code2;
              const color = skillIconColors[skill.icon];

              return (
                <span key={skill.name} className="tag gap-1.5">
                  <Icon
                    className="size-3.5 shrink-0"
                    style={color ? { color } : undefined}
                  />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
