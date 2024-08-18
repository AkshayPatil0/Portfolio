import { SectionWithHeading } from "../common/ui/layout";
import Image from "next/image";

const EXPERIENCES = [
  {
    logo: "/logos/mindstix.jpeg",
    position: "Full stack developer",
    organization: "Mindstix Software Labs",
    duration: "June 2021 - Present",
    summary:
      "Led and mentored a development team of 3+ members in building scalable web applications. Successfully delivered multiple projects by crafting reusable React components, architecting robust APIs with Jest testing, and effectively collaborating with clients. Leveraged cloud platforms like AWS and Azure to enhance application performance and reliability.",
    projects: [
      {
        title: "Promotional Planner for a Cosmetic brand",
        duration: "June 2024 - Present",
        summary:
          "Developed a high-performance ReactJS platform for offer management, capable of handling and displaying over 50k product records efficiently using AG Grid. Implemented advanced grid features like filtering, sorting, pagination, grouping, and pivoting through SSRM for optimal user experience.",
      },
      {
        title: "Whatsapp Commerce for a Cosmetic brand",
        duration: "Feb 2024 - May 2024",
        summary:
          "Automated product data synchronization between multiple systems and Meta (WhatsApp Commerce) using Workato and a custom-built NestJS API. Developed a NextJS admin panel for efficient product and category management.",
      },
      {
        title: "SasS Accelerator Backend",
        duration: "Nov 2023 - Jan 2024",
        summary:
          "Built a robust and scalable backend infrastructure using NestJS and MongoDB, establishing a foundation for future SaaS products. Implemented core user management features including authentication, authorization, and notifications (email, SMS) leveraging AWS SES.",
      },
      {
        title:
          "Standardised Digital Forms Portal for a Home construction company",
        duration: "Sep 2022 - Oct 2023",
        summary:
          "Led the development of a client-service portal using ReactJS, featuring standardized form inputs and dynamic PDF report generation. Architectured and implemented the backend system with NestJS and MongoDB. Optimized Azure Cosmos DB performance by 40% through API optimization and integrated cloud services like Azure Service Bus, Logic Apps, and Function Apps.",
      },
      {
        title: "E-Commerce Website for a Multi-level marketing company.",
        duration: "Jun 2021 - Aug 2022",
        summary:
          "Developed a scalable e-commerce platform using ReactJS, NextJS, and micro-frontend architecture. Enhanced user experience with visually appealing MUI components and streamlined content management with Content Stack CMS. Optimized backend-frontend communication through an ExpressJS BFF API.",
      },
    ],
  },
];

export function Experience() {
  return (
    <SectionWithHeading
      heading={
        <>
          My <b>Experience</b>
        </>
      }
      headingId="about"
      className="bg-primary text-bg"
    >
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((experience) => (
          <article
            key={experience.organization}
            className="rounded-lg border border-zinc-500 p-8 hover:bg-zinc-900"
          >
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-6 lg:items-center">
                <Image
                  src="/logos/mindstix.jpeg"
                  className="rounded"
                  height={64}
                  width={64}
                  alt="mindstix"
                />
                <h2 className="text-xl font-bold lg:text-2xl">
                  {experience.position} at{" "}
                  <span className="underline">{experience.organization}</span>
                </h2>
              </div>
              <p className="font-semibold text-zinc-300">
                {experience.duration}
              </p>
            </div>
            <p className="pt-8 text-zinc-300 lg:pl-10 lg:pt-4">
              {experience.summary}
            </p>
            <div className="pt-8 lg:pl-10 lg:pt-4">
              <h3 className="pt-4 text-2xl font-bold text-zinc-300">
                Projects
              </h3>
              <ul>
                {experience.projects.map((project) => (
                  <li key={project.title} className="py-4">
                    <div className="flex lg:flex-row lg:items-center lg:justify-between">
                      <h4 className="py-1 text-xl font-bold">
                        {project.title}
                      </h4>
                      <span className="font-semibold text-zinc-400">
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-zinc-400">{project.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionWithHeading>
  );
}
