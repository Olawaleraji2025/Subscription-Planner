import * as React from "react";

import { cn } from "/src/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-5 rounded-sm border-input bg-input/30 p-4 text-base transition-colors outline-none file:inline-flex file:h-3 file:border-0  file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        (className =
          "focus-visible:border-purple-600 border bg-transparent text-blue-950 text-sm font-semibold max-w-75 md:max-w-100"),
      )}
      {...props}
    />
  );
}

export { Input };
