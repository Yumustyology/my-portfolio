import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
  bordered = false,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen antialiased max-w-[90rem] mx-auto",
        {
          "lgDesktop:border-l lgDesktop:border-l-[#ffffff33] lgDesktop:border-r lgDesktop:border-r-[#ffffff33]":
            bordered,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
