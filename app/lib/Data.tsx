import {
  BsTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

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
  { label: "bio", color: "#FF605C", size: 25, tabName: "bio" },
  { label: "interest", color: "#2C957E", size: 25, tabName: "interest" },
  { label: "education", color: "#9747FF", size: 25, tabName: "education" },
];
