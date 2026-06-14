import type { StaticImageData } from "next/image";
import AIYoutubeAssistant from "@/assets/ai-youtube-assistant.png";
import CoverLetter from "@/assets/cover-letter-generator.png";
import DecentralizedAI from "@/assets/decentralized_ai.png";
import Eghumti from "@/assets/eghumti.png";
import FinanceContext from "@/assets/fincontext.png";
import GoalClassifier from "@/assets/UNSDG Goals Image.jpg";
import HardwareAI from "@/assets/hardware_ai.png";
import HealthAI from "@/assets/health_ai.jpg";
import HumorAI from "@/assets/humor_ai.png";
import IMDAI from "@/assets/imd ai.png";
import InsurancePhoto from "@/assets/insurance-agent-graphics.png";
import Lidar from "@/assets/lidar.png";
import MobileRobot from "@/assets/mobile_robot.png";
import OrderManagement from "@/assets/order-management.png";
import Prosthesis from "@/assets/prosthesis.png";
import Robotics from "@/assets/robotics.png";
import TrustworthyAI from "@/assets/trustworthy_ai.png";

export type CardItem = {
  title: string;
  desc: string;
  img: StaticImageData;
};

export type ResearchItem = CardItem & {
  link?: string;
};

export type Project = CardItem & {
  n: number;
  tags: string[];
  link: string;
};

export type Article = CardItem & {
  time: string;
  link: string;
};

export const NAV_ITEMS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Articles", id: "articles" },
  { name: "Contact", id: "contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "X", short: "X", href: "https://x.com/SunilShah2416" },
  { label: "GitHub", short: "GH", href: "https://github.com/Sunilshah-7/" },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/sunilshah77/",
  },
  {
    label: "Stack Overflow",
    short: "SO",
    href: "https://stackoverflow.com/users/10602401/sunil-shah",
  },
] as const;

export const CONTACT_SOCIALS = [
  ...SOCIAL_LINKS,
  { label: "CodePen", short: "CP", href: "https://codepen.io/sunilshah-7" },
] as const;

export const SKILLS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "YOLOv7",
  "OpenCV",
  "Mask R-CNN",
  "React.js",
  "Next.js",
  "Node.js",
  "Django",
  "Flask",
  "AWS Lambda",
  "ONNX",
  "TensorRT",
  "PostgreSQL",
  "Docker",
  "MATLAB",
  "LLMs",
  "Electron.js",
  "Sentence Transformers",
];

export const RESEARCH: ResearchItem[] = [
  {
    title: "EMG Signals to Control Prosthetic Hands",
    desc: "ANN-based deep learning system to interpret muscle patterns and translate them into real-time prosthetic actions.",
    img: Prosthesis,
    link: "https://www.researchgate.net/publication/371575279_ELECTROMYOGRAPHY_SIGNALS_TO_CONTROL_PROSTHETIC_HANDS",
  },
  {
    title: "Indoor Path Planning for Mobile Robot",
    desc: "A* algorithm in MATLAB for accurate indoor navigation between any two positions on a predefined warehouse map.",
    img: MobileRobot,
    link: "https://www.researchgate.net/publication/368936297_INDOOR_PATH_FINDING_AND_PLANNING_OF_A_MOBILE_ROBOT_FOR_WAREHOUSES",
  },
  {
    title: "Blind Spot Detection Using LIDAR",
    desc: "LIDAR sensor integration with ML algorithms to identify and classify objects in autonomous vehicle blind spots.",
    img: Lidar,
  },
];

export const PROJECTS: Project[] = [
  {
    n: 1,
    title: "Infrastructure Console Management",
    desc: "Enterprise dashboard for operating an AI platform",
    img: IMDAI,
    tags: ["Infrastructure", "Cloudflare", "GPU"],
    link: "https://infrastructure-management-dashboard.sunilshah2416.workers.dev/",
  },
  {
    n: 2,
    title: "AI Assistant for Educational YouTube Videos",
    desc: "Turning YouTube Learning into an Interactive Experience",
    img: AIYoutubeAssistant,
    tags: ["AI", "Video AI", "NLP", "Learning"],
    link: "https://github.com/Sunilshah-7/ASP-project/tree/allComponents",
  },
  {
    n: 3,
    title: "UN SDG CLASSIFIER TOOL",
    desc: "ML-powered UN SDG Classifier: Analyzing Open-Source Repositories for Sustainable Development Goals",
    img: GoalClassifier,
    tags: ["Machine Learning", "Sustainability", "Open Source"],
    link: "https://github.com/chaoss/UNSDG-classifier-tool",
  },
  {
    n: 4,
    title: "FinContext Agent",
    desc: "Turn your SEC filings into citation-grounded portfolio analysis",
    img: FinanceContext,
    tags: ["Finance", "RAG", "NLP", "AI Agents"],
    link: "https://github.com/Sunilshah-7/Finance-Context-Agent",
  },
  {
    n: 5,
    title: "Life Insurance Document RAG Agent",
    desc: "Get your insurance questions answered in a flash with this RAG agent that retrieves and summarizes info from your policy documents.",
    img: InsurancePhoto,
    tags: ["RAG", "NLP", "Insurance", "AI Agents"],
    link: "https://github.com/Sunilshah-7/Insurance-RAG-Agent",
  },
  {
    n: 6,
    title: "Cover Letter Generator for Job Applications",
    desc: "Crafting Tailored Cover Letters with AI: Your Job Application's Secret Weapon",
    img: CoverLetter,
    tags: ["AgriTech", "AI", "Sustainability"],
    link: "https://cover-letter-generator-chi-seven.vercel.app/",
  },
  {
    n: 7,
    title: "Eghumti E-Commerce Store",
    desc: "Your All-in-One Online Store Solution",
    img: Eghumti,
    tags: ["React", "Ecommerce", "Stripe"],
    link: "https://github.com/Sunilshah-7/nextjs-commerce",
  },
  {
    n: 8,
    title: "Robotics Club Landing Page",
    desc: "Dynamic Web Experience for Robotics",
    img: Robotics,
    tags: ["Next.js", "Laravel", "Web"],
    link: "https://robotics.wrc.edu.np/",
  },
  {
    n: 9,
    title: "Admin Order Management",
    desc: "Smart Dashboard for Orders & Analytics",
    img: OrderManagement,
    tags: ["Analytics", "Dashboard", "React"],
    link: "https://order-management-dashboard-flax.vercel.app/",
  },
];

export const ARTICLES: Article[] = [
  {
    title: "Decentralized AI & International AI Governance",
    time: "12 min read",
    img: DecentralizedAI,
    desc: "The intersection of decentralized AI technologies and international governance frameworks - challenges and opportunities.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/decentralized-ai-international-ai-governance/",
  },
  {
    title: "How Much Do You Trust AI in Hardware Projects?",
    time: "20 min read",
    img: HardwareAI,
    desc: "Exploring AI-driven hardware development - where the boundaries of trust get tested.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/how-much-do-you-trust-ai-in-building-hardware-projects/",
  },
  {
    title: "Can AI Take a Joke? Humor & Sarcasm with GPT-4",
    time: "15 min read",
    img: HumorAI,
    desc: "Delving into the complexities of humor and sarcasm in AI - can machines truly get the joke?",
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/31/can-ai-take-a-joke-exploring-humor-and-sarcasm-with-gpt/",
  },
  {
    title: "Trustworthy Game Agents",
    time: "18 min read",
    img: TrustworthyAI,
    desc: "Challenges of building trustworthy AI agents in gaming - fairness, accountability, and transparency.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/26/trustworthy-game-agents/",
  },
  {
    title: "Risks of Deploying AI Models in Healthcare",
    time: "10 min read",
    img: HealthAI,
    desc: "Analyzing the potential risks and ethical considerations when AI meets healthcare.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/02/05/analyzing-and-understanding-the-risks-associated-with-deploying-ai-models-like-chatgpt-in-healthcare/",
  },
];
