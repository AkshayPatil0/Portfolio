import { cn } from "@/src/lib/utils";
import { SectionWithHeading } from "../common/ui/layout";
import Image from "next/image";
import { ExternalLink, Code } from "react-feather";
import { Tooltip } from "../common/ui/Tooltip";

const PROJECTS = [
  {
    name: "Web Socket Multiplayer Game",
    description:
      "A multiplayer game built with WebSocket, Socket.IO, React, and Node.js provides real-time game-play by enabling seamless communication between clients and servers. React constructs the game interface, while Node.js handles game logic, and broadcasting updates.",
    thumbnail: "/thumbnails/ws-game.png",
    link: "",
    sourceLink:
      "https://github.com/AkshayPatil0/ws-multiplayer-game?tab=readme-ov-file",
  },
  {
    name: "FinSight: Expense Tracker",
    description:
      "Fin-Sight is a mobile application developed using React Native and TypeScript, designed for personal financial management. The application provides users with a platform to record, categorize, and analyze their expenses. Core functionalities include expense input, expense categorization and data visualization.",
    thumbnail: "/thumbnails/finsight.png",
    link: "",
    sourceLink: "https://github.com/AkshayPatil0/expense-tracker",
  },
];

export function Projects() {
  return (
    <SectionWithHeading
      heading={
        <>
          My <b>Personal Projects</b>
        </>
      }
      headingId="projects"
      className="bg-primary text-bg"
    >
      <div className="flex flex-col gap-16 lg:gap-24">
        {PROJECTS.map((project, i) => (
          <article
            key={i}
            className={cn(
              "flex flex-col items-start gap-8 lg:gap-16 xl:gap-24",
              i % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row",
            )}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg lg:w-5/12">
              <Image
                src={project.thumbnail}
                className="h-full w-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
                alt={project.name}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8">
              <h2 className="text-2xl font-bold xl:text-3xl">{project.name}</h2>
              <p className="text-zinc-400">{project.description}</p>
              <div className="flex gap-8">
                {!!project.link && (
                  <Tooltip message="Link">
                    <a
                      href={project.link}
                      aria-label={`Link to project named ${project.name}`}
                    >
                      <ExternalLink />
                    </a>
                  </Tooltip>
                )}
                {!!project.sourceLink && (
                  <Tooltip message="Source Code">
                    <a
                      href={project.sourceLink}
                      aria-label={`Link to source code of project named ${project.name}`}
                    >
                      <Code />
                    </a>
                  </Tooltip>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWithHeading>
  );
}
