import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./magic-ui/card";
import LazyImageLoad from "./LazyLoadImage";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { data } from "tailwindcss/defaultTheme";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Badge } from "./shadcn-ui/Badge";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  githubLink?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  link,
  image,
  video,
  githubLink,
  className,
}: Props) {
  return (
    <Card
      className={
        "project-card min-h-[376px] text-white flex flex-col overflow-hidden border border-[#ffffff33] bg-[#262627] =bg-[ghostwhite] hover:shadow-sm-hover:shadow-[#ffffff80] transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={link || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-[190px] w-full object-cover object-top" // needed because random black line at bottom of video
          />
        ) : image ? (
          <LazyImageLoad
            src={image}
            alt={title}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        ) : null}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle
            className="mt-1 text-base text-white"
            style={{
              fontFamily: "Consolas",
            }}
          >
            <span className="className_tag_text">_</span>
            {title.split(" ").join("_")}
          </CardTitle>
          <time className="font-sans text-xs text-white">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty  text-xs text-muted dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => {
              return tag.includes(",") ? (
                tag.split(",").map((value) => (
                  <Badge
                    className="px-1 py-0 text-[10px] text-[#a4b5c6]"
                    variant="secondary"
                    key={value}
                  >
                    {value}
                  </Badge>
                ))
              ) : (
                <Badge
                  className="px-1 py-0 text-[10px] text-[#a4b5c6]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
      <CardFooter className="pl-0 px-2 pb-2">
        <div className="project-links flex gap-3 py-3 h-4 text-sm text-white items-center">
          <Link href={link ?? "#"} target="_blank" rel="noreferrer">
            <div className="live-preview flex items-center">
              <div>
                <FaExternalLinkSquareAlt
                  className="next-btn"
                  color="#fff"
                  size={20}
                />
              </div>
            </div>
          </Link>

          <div className="git-preview flex items-center">
            <Link href={githubLink ?? "#"} target="_blank" rel="noreferrer">
              <BsGithub style={{ cursor: "pointer" }} size={20} />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
