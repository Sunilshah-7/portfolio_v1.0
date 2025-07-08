import React from "react";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import DecentralizedAIImage from "@/assets/decentralized_ai.png";
import HardwareAIImage from "@/assets/hardware_ai.png";
import HumorAIImage from "@/assets/humor_ai.png";
import TrustworthyAIImage from "@/assets/trustworthy_ai.png";
import HealthcareAIImage from "@/assets/health_ai.jpg";

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

const ArticleCard = ({ article }) => {
  return (
    <Link href={article.link}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out max-w-sm transform hover:-translate-y-1">
        <div className="relative h-64 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center">
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          All Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Articles;
