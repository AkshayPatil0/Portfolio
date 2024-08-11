import { cn } from "@/src/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export function Tooltip({
  message,
  children,
  className,
  containerClass,
  ...otherProps
}: PropsWithChildren<
  { message: string; containerClass?: string } & HTMLAttributes<HTMLSpanElement>
>) {
  return (
    <div className={cn("group relative flex", containerClass)} {...otherProps}>
      {children}
      <span
        className={cn(
          "absolute left-1/2 top-full m-2 mx-auto w-max -translate-x-1/2 rounded-md bg-neutral p-2 text-sm text-bg opacity-0 transition-opacity group-hover:opacity-100",
          className,
        )}
      >
        {message}
      </span>
    </div>
  );
}
