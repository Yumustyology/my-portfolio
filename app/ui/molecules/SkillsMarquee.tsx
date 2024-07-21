import Marquee from "../atoms/magic-ui/Marquee";
import { marqueeData } from "@/lib/marqueeData";
import { ReactNode } from "react";


const firstRow = marqueeData.slice(0, marqueeData.length / 2);
const secondRow = marqueeData.slice(marqueeData.length / 2);

const SkillBox = ({ icon, name }: { icon: ReactNode; name: string }) => (
  <div className="flex items-center tracking-wide">
    <div className="ml-[2em]">{icon}</div>&nbsp;<div>{name}</div>
  </div>
);

export function SkillMarquee() {
  return (
    <div className="relative hidden xlgTablet:flex h-auto w-screen flex-row items-center justify-center overflow-hidden text-white">
      <Marquee pauseOnHover className="[--duration:20s] right-0 fixed top-24">
        {firstRow.map((skill) => (
          <SkillBox key={skill.name} {...skill} />
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse className="[--duration:20s] right-0 fixed bottom-12">
        {secondRow.map((skill) => (
          <SkillBox key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
