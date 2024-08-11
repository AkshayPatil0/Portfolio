import { cn } from "@/src/lib/utils";
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export function MainContainerLayout({
  className,
  children,
  as: Tag = "div",
  ...otherProps
}: PropsWithChildren<{ as?: ElementType } & HTMLAttributes<HTMLElement>>) {
  return (
    <Tag
      className={cn("w-full px-4 py-20 md:px-12 lg:px-12 xl:px-32", className)}
      {...otherProps}
    >
      {children}
    </Tag>
  );
}
