import React from "react";
import Image from "next/image";
import Link from "next/link";
import DecentralizedAIImage from "@/assets/decentralized_ai.png";
import HardwareAIImage from "@/assets/hardware_ai.png";
import HumorAIImage from "@/assets/humor_ai.png";
import TrustworthyAIImage from "@/assets/trustworthy_ai.png";
import HealthcareAIImage from "@/assets/health_ai.jpg";
import type { StaticImageData } from "next/image";

// You can move this to a separate data file later
const articles = [
  {
    title: "Decentralized AI & International AI governance",
    description:
      "Explore the intersection of decentralized AI technologies and international governance frameworks. Understand the challenges and opportunities in this evolving landscape.",
    readTime: "12 min read",
    image: DecentralizedAIImage,
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/decentralized-ai-international-ai-governance/",
  },
  {
    title: "How much do you trust AI in building hardware projects?",
    description:
      "Explore the intersection of AI technologies and hardware development. Understand the challenges and opportunities in this evolving landscape.",
    readTime: "20 min read",
    image: HardwareAIImage,
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/how-much-do-you-trust-ai-in-building-hardware-projects/",
  },
  {
    title: "Can AI Take a Joke? Exploring Humor and Sarcasm with GPT-4",
    description:
      "Delve into the complexities of humor and sarcasm in AI interactions. Can AI truly understand and generate humor?",
    readTime: "15 min read",
    image: HumorAIImage,
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/31/can-ai-take-a-joke-exploring-humor-and-sarcasm-with-gpt/",
  },
  {
    title: "Trustworthy Game Agents",
    description:
      "Explore the challenges of building trustworthy AI agents in gaming. How can we ensure fairness, accountability, and transparency?",
    readTime: "18 min read",
    image: TrustworthyAIImage,
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/26/trustworthy-game-agents/",
  },
  {
    title:
      "Analyzing and understanding the risks associated with deploying AI models in healthcare",
    description:
      "Explore the challenges of deploying AI models in healthcare settings. What are the potential risks and ethical considerations?",
    readTime: "10 min read",
    image: HealthcareAIImage,
    link: "https://blogs.gwu.edu/sunil-shah/2025/02/05/analyzing-and-understanding-the-risks-associated-with-deploying-ai-models-like-chatgpt-in-healthcare/",
  },
];

type Article = {
  title: string;
  description: string;
  readTime: string;
  image: StaticImageData;
  link: string;
};

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={article.link}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out max-w-sm mx-auto transform hover:-translate-y-1">
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl line-clamp-2">
            {article.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 sm:text-sm">
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12 max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-center text-black sm:mb-12 sm:text-4xl">
          Articles
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
