import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import { MainContainerLayout } from ".";

export function SectionWithHeading({
  headingId,
  heading,
  children,
  ...sectionProps
}: PropsWithChildren<
  { headingId: string; heading: ReactNode } & DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >
>) {
  return (
    <MainContainerLayout as="section" {...sectionProps}>
      <h1
        id={headingId}
        className="py-16 text-center text-4xl lg:py-16 xl:py-20 xl:text-5xl"
      >
        {heading}
      </h1>
      <div className="lg:px-12 xl:px-16">{children}</div>
    </MainContainerLayout>
  );
}
