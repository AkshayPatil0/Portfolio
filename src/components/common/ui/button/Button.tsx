import { cn } from "@/src/lib/utils";
import { ElementType, HTMLAttributes, ReactElement } from "react";

export function Button({
  label,
  className,
  suffix,
  prefix,
  ...otherProps
}: {
  label: string;
  suffix?: ReactElement;
  prefix?: ReactElement;
  as?: ElementType;
} & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 bg-primary px-4 py-2 text-bg hover:bg-neutral",
        className,
      )}
      {...otherProps}
    >
      {prefix ? <span>{prefix}</span> : null}
      <span className="font-semibold">{label}</span>
      {suffix ? <span>{suffix}</span> : null}
    </button>
  );
}
