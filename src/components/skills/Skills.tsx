import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { SectionWithHeading } from "../common/ui/layout";

const SKILLS = [
  {
    name: "JavaScript",
    icon: "/logos/javascript.png",
    filter: "grayscale contrast-200 brightness-75",
  },
  {
    name: "TypeScript",
    icon: "/logos/typescript.png",
    filter: "grayscale contrast-200 brightness-75",
  },
  {
    name: "ReactJs",
    icon: "/logos/reactjs.png",
    filter: "brightness-0",
  },
  {
    name: "NextJs",
    icon: "/logos/nextjs.png",
    filter: "brightness-0",
    hoverFilter: "group-hover:invert",
  },
  {
    name: "Redux",
    icon: "/logos/redux.png",
    filter: "brightness-0",
  },
  {
    name: "HTML",
    icon: "/logos/html.png",
    filter: "grayscale contrast-200 brightness-75",
  },
  {
    name: "CSS",
    icon: "/logos/css.png",
    filter: "grayscale contrast-200 brightness-75",
  },
  {
    name: "NodeJs",
    icon: "/logos/nodejs.png",
    filter: "brightness-0",
  },
  {
    name: "NestJs",
    icon: "/logos/nestjs.png",
    filter: "brightness-0",
  },
  {
    name: "MongoDB",
    icon: "/logos/mongodb.png",
    filter: "grayscale contrast-200 brightness-75",
  },
  {
    name: "GraphQL",
    icon: "/logos/graphql.png",
    filter: "brightness-0",
  },
];

export function Skills() {
  return (
    <SectionWithHeading
      heading={
        <>
          My <b>Skills</b>
        </>
      }
      headingId={"skills"}
    >
      <div className="flex flex-wrap justify-center gap-8 lg:gap-x-9 lg:gap-y-6 xl:gap-x-12 xl:gap-y-8">
        {SKILLS.map(({ name, icon, filter, hoverFilter }) => (
          <div
            key={name}
            className="group flex h-36 w-36 flex-col items-center justify-evenly rounded border-2 border-primary transition-colors duration-500 hover:bg-primary hover:text-bg xl:h-48 xl:w-48"
          >
            <Image
              src={icon}
              className={cn(
                "filter transition-all duration-500 group-hover:scale-110",
                filter,
                hoverFilter ? `${hoverFilter}` : "group-hover:filter-none",
              )}
              height={64}
              width={64}
              alt={name}
            />
            <span className="font-bold">{name}</span>
          </div>
        ))}
      </div>
    </SectionWithHeading>
  );
}
