import { SectionWithHeading } from "../common/ui/layout";
import Image from "next/image";

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
        <article className="rounded-lg border border-zinc-500 p-8 hover:bg-zinc-800">
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
                Full stack developer at Mindstix Software Labs
              </h2>
            </div>
            <p className="font-semibold text-zinc-300">June 2021 - Present</p>
          </div>
          <ul className="list-['-'] pt-8 text-zinc-300 *:py-1 *:pl-2 lg:pl-10 lg:pt-4">
            <li>Lead team of 3+ developers.</li>

            <li>
              Built reusable components with ReactJS for efficiency and
              maintainability in 4+ applications.
            </li>
            <li>
              Developed robust APIs with Unit testing (Jest) utilizing both REST
              and GraphQL for 4+ systems.{" "}
            </li>
            <li>
              Collaborated with 3+ different clients for identifying
              requirements and resolving issues.{" "}
            </li>
            <li>
              Documented development tasks and delivered project reports for
              transparency.
            </li>
            <li>
              Leveraged AWS, Azure cloud services to integrate functionalities,
              enhancing scalability and flexibility.
            </li>
          </ul>
        </article>
      </div>
    </SectionWithHeading>
  );
}
