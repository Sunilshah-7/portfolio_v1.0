import { useId } from "react";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { LuLayers3 } from "react-icons/lu";
import { TbRadar } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import {
  SiAmazonwebservices, SiArduino, SiBabel, SiC, SiClaude, SiCplusplus,
  SiDjango, SiDocker, SiElectron, SiExpress, SiFigma, SiFirebase, SiFlutter,
  SiGatsby, SiGit, SiGithubactions, SiGnubash, SiGoogle, SiGraphql,
  SiJavascript, SiLangchain, SiLinux, SiMongodb, SiMysql, SiNestjs,
  SiNextdotjs, SiNodedotjs, SiNuxtdotjs, SiOllama, SiOpenai, SiOpencv,
  SiPandas, SiPhp, SiPostgresql, SiPostman, SiPython, SiPytorch, SiReact,
  SiRos, SiRubyonrails, SiRust, SiScikitlearn, SiSqlite, SiSupabase,
  SiTensorflow, SiTypescript, SiVuedotjs, SiWebpack,
} from "react-icons/si";

const technologies: ReadonlyArray<readonly [name: string, icon: IconType, color: string]> = [
  ["Python", SiPython, "#3776ab"],
  ["TypeScript", SiTypescript, "#3178c6"],
  ["JavaScript", SiJavascript, "#a47d00"],
  ["C++", SiCplusplus, "#00599c"],
  ["C", SiC, "#4854a5"],
  ["Rust", SiRust, "#a84423"],
  ["PHP", SiPhp, "#646aa2"],
  ["Bash", SiGnubash, "#30363d"],
  ["React", SiReact, "#067f9a"],
  ["Next.js", SiNextdotjs, "#171717"],
  ["Node.js", SiNodedotjs, "#417e38"],
  ["Express", SiExpress, "#171717"],
  ["NestJS", SiNestjs, "#e0234e"],
  ["Vue.js", SiVuedotjs, "#27845f"],
  ["Nuxt", SiNuxtdotjs, "#008960"],
  ["Gatsby", SiGatsby, "#663399"],
  ["Django", SiDjango, "#0c4b33"],
  ["Ruby on Rails", SiRubyonrails, "#cc0000"],
  ["Flutter", SiFlutter, "#0279a9"],
  ["TensorFlow", SiTensorflow, "#bc5500"],
  ["PyTorch", SiPytorch, "#ce412d"],
  ["OpenCV", SiOpencv, "#3566bc"],
  ["LangChain", SiLangchain, "#1c3c3c"],
  ["ChromaDB", LuLayers3, "#8a49bc"],
  ["GPT", SiOpenai, "#171717"],
  ["Claude", SiClaude, "#af553b"],
  ["Ollama", SiOllama, "#171717"],
  ["Gemma", SiGoogle, "#4285f4"],
  ["scikit-learn", SiScikitlearn, "#bd620e"],
  ["pandas", SiPandas, "#312475"],
  ["ROS", SiRos, "#22314e"],
  ["Arduino", SiArduino, "#008184"],
  ["YDLIDAR", TbRadar, "#375b70"],
  ["PostgreSQL", SiPostgresql, "#4169a1"],
  ["MongoDB", SiMongodb, "#17794b"],
  ["MySQL", SiMysql, "#306582"],
  ["SQLite", SiSqlite, "#086b9b"],
  ["Firebase", SiFirebase, "#c47700"],
  ["Supabase", SiSupabase, "#098159"],
  ["MS SQL Server", DiMsqlServer, "#a91d22"],
  ["Git", SiGit, "#df452f"],
  ["GitHub Actions", SiGithubactions, "#2088d7"],
  ["Docker", SiDocker, "#1682cb"],
  ["Linux", SiLinux, "#242424"],
  ["AWS", SiAmazonwebservices, "#232f3e"],
  ["Azure", VscAzure, "#0078d4"],
  ["Figma", SiFigma, "#8449ca"],
  ["Postman", SiPostman, "#ce4b22"],
  ["Webpack", SiWebpack, "#2275a8"],
  ["Babel", SiBabel, "#8a6500"],
  ["GraphQL", SiGraphql, "#bd218c"],
  ["Electron", SiElectron, "#147c89"],
];

export default function TechnologyMarquee() {
  const pauseId = useId();

  return (
    <div className="technology-marquee" role="region" aria-label="Tools and technologies">
      <input className="technology-pause sr-only" type="checkbox" id={pauseId} />
      <label className="technology-control" htmlFor={pauseId}>
        <span className="sr-only">Pause technology icons</span>
        <span aria-hidden="true" className="technology-pause-label">Pause</span>
        <span aria-hidden="true" className="technology-play-label">Play</span>
      </label>
      <div className="technology-window">
        <div className="technology-track">
          {[false, true].map((duplicate) => (
            <ul
              className="technology-list"
              role="list"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
            >
              {technologies.map(([name, Icon, color]) => (
                <li className="technology-item" key={name}>
                  <Icon aria-hidden="true" style={{ color }} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
