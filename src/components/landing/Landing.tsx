import { MainContainerLayout } from "../common/ui/layout";
import ManWithLaptopSvg from "./ManWithLaptopSvg";
import { SocialLinks } from "./SocialLinks";

export default function Landing() {
  return (
    <MainContainerLayout
      as="section"
      className="flex flex-col-reverse items-stretch pb-6 lg:flex-row lg:pb-8"
    >
      <div className="flex flex-1 flex-col lg:-mr-40 xl:-mr-52">
        <div className="flex flex-1 flex-col justify-center py-8 lg:py-0">
          <h1 className="flex flex-col gap-4 text-3xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span>
              Hello I&apos;am <span className="font-bold">Akshay Patil.</span>
            </span>
            <span>
              <span className="font-extrabold shadow-primary">Fullstack </span>
              <span className="font-outline-2 xl:font-outline-3 font-extrabold text-bg shadow-primary">
                Developer
              </span>
            </span>
            <span>
              Based in <b> India.</b>
            </span>
          </h1>
          <p className="pt-8 text-zinc-500">
            I&apos;m Akshay Patil, a Full Stack Developer based in Pune, India.
            With over 3+ years of experience, I&apos;ve led development teams
            and built web applications using a mix of front-end (React, NextJS)
            and back-end (NodeJS, NestJS) technologies. I&apos;ve worked on a
            bunch of different projects, from e-commerce platforms to SaaS
            applications. I&apos;m good at managing large datasets, building
            user-friendly interfaces, and optimizing backend systems.
          </p>
        </div>

        <div className="-mb-6 flex gap-6 pb-[2px] xl:-mb-8 xl:gap-8">
          <SocialLinks />
        </div>
      </div>
      <div className="overflow-hidden hue-rotate-30 filter lg:w-4/6">
        <ManWithLaptopSvg className="-ml-[40%] w-[140%] lg:ml-0 lg:w-full" />
      </div>
    </MainContainerLayout>
  );
}
