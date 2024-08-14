import { MainContainerLayout } from "../common/ui/layout";
import { ManHandFoldSvg } from "./ManHandFoldSvg";

export function AboutMe() {
  return (
    <MainContainerLayout as="section">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-8 xl:gap-16">
        <div className="lg:w-5/12 xl:w-1/2">
          <ManHandFoldSvg />
        </div>
        <div className="flex flex-1 flex-col items-start lg:w-1/2">
          <h1 className="pb-12 pt-8 text-center text-4xl lg:pb-8 lg:pt-4 xl:pb-20 xl:pt-10 xl:text-5xl">
            About <b>Me</b>
          </h1>
          <div className="text-zinc-500 *:pb-4">
            <p>
              I&apos;ve passion for crafting innovative and performant web
              applications. With over 3+ of industry experience, I have honed my
              skills in both front-end and back-end development. My expertise
              lies in building robust, scalable, and user-centric solutions.
            </p>
            <p>
              I hold a Bachelors degree in Computer Science. My academic
              foundation provided me with a strong understanding of computer
              science fundamentals. With that I began my professional journey as
              a Full stack web developer in 2021, and since then, I&apos;ve
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, after 3 years, I&apos;m building cutting-edge web
              applications using modern technologies such as ReactJs, Next.js,
              TypeScript, Nestjs, Tailwindcss, and much more.
            </p>
          </div>
        </div>
      </div>
    </MainContainerLayout>
  );
}
