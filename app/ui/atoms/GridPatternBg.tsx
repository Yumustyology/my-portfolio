"use client";
 
import { cn } from "@/lib/utils";
import GridPattern from "./magic-ui/GridPattern";
 
const GridPatternBg = () => {
  return (
    <div className="fixed relative-flex  -z-40 h-full w-full items-center justify-center overflow-hidden p-20 md:shadow-xl">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "fill-gray-400/30 stroke-gray-400/50"
        )}
      />
    </div>
  );
};
 
export default GridPatternBg;