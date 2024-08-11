import { cn } from "@/src/lib/utils";
import { InputHTMLAttributes } from "react";

export function Input({
  className,
  noOfLines = 1,
  ...otherProps
}: { noOfLines?: number } & InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
>) {
  if (noOfLines > 1) {
    return (
      <textarea
        className={cn(
          "rounded border-2 border-primary bg-bg p-4 outline-none",
          className,
        )}
        rows={noOfLines}
        {...otherProps}
      />
    );
  }

  return (
    <input
      className={cn(
        "rounded border-2 border-primary bg-bg p-4 outline-none",
        className,
      )}
      {...otherProps}
    />
  );
}
