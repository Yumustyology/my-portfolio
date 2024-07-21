import { BsTelephoneFill, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { Icons } from "./ui/atoms/magic-ui/Icon";

export const  projects = [
    {
      projectName: "Chat Collect",
      href: "https://chatcollect.com",
      featuredApp: true,
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/images/img.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      projectName: "Chat Collect",
      href: "https://chatcollect.com",
      featuredApp: true,
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/images/img.png",
      },
    {
      projectName: "Magic UI",
      href: "https://magicui.design",
      featuredApp: true,
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/images/img.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      projectName: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      featuredApp: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/images/img.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      projectName: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      featuredApp: false,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ] as const;
  
  type SocialMediaContact = {
  href: string;
  target: string;
  rel: string;
  icon: React.ReactNode;
  label: string;
};
export const socialMediaContacts: SocialMediaContact[] = [
  {
    href: "tel://+2348142450182",
    target: "_blank",
    rel: "noreferrer",
    icon: <BsTelephoneFill size={15} />,
    label: "+234 814 245 0182",
  },
  {
    href: "mailto://yumustyology@gmail.com",
    target: "_blank",
    rel: "noreferrer",
    icon: <MdMail size={17} />,
    label: "yumustyology@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/yusuf-mustahan-086006221",
    target: "_blank",
    rel: "noreferrer",
    icon: <BsLinkedin size={17} color="#FFFFFF" />,
    label: "Linkedin",
  },
  {
    href: "#",
    target: "",
    rel: "",
    icon: <ImInstagram size={17} />,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09",
    target: "_blank",
    rel: "noreferrer",
    icon: <BsTwitter size={17} />,
    label: "Twitter",
  },
  {
    href: "#",
    target: "",
    rel: "",
    icon: <ImFacebook2 size={17} />,
    label: "Facebook",
  },
  {
    href: "https://wa.me/+2348142450182",
    target: "_blank",
    rel: "noreferrer",
    icon: <RiWhatsappFill size={18} />,
    label: "Watsapp",
  },
  {
    href: "https://github.com/yumustyology",
    target: "_blank",
    rel: "noreferrer",
    icon: <BsGithub size={17} />,
    label: "Github",
  },
] as const;

export type AboutTab = {
  label: string;
  color: string;
  size: number;
  tabName: string;
};

export const aboutTabs: AboutTab[] = [
  { label: 'bio', color: '#FF605C', size: 25, tabName: 'bio' },
  { label: 'interest', color: '#2C957E', size: 25, tabName: 'interest' },
  { label: 'education', color: '#9747FF', size: 25, tabName: 'education' },
];