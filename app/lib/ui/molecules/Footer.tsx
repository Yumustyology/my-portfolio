import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Footer() {
    const iconClassNames = "w-11 border-l border-l-[#ffffff80] h-11 flex items-center justify-center cursor-pointer";
  return (
    <div>
      <div className="footer h-11 w-full bg-[#1f1f1f] fixed bottom-0 left-0 flex justify-between items-center border-t border-t-[#ffffff80] z-10">
        <div className="left-footer flex items-center w-max xs:w-52 lxs:w-60 border-r border-r-[#ffffff80] xs:justify-end">
          <div className="find-me hidden xs:block text-right font-normal text-base lxs:text-lg text-[#FFFFFF] tracking-widest" style={{
            fontFamily: 'Consolas'
          }}>find me on:</div>
          <div className={cn("icon",iconClassNames)}>
            <Link
              href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={25} color="#FFFFFF" />
            </Link>
          </div>
          <div className={cn("icon",iconClassNames)}>
            <Link
              href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={25} color="#FFFFFF" />
            </Link>
          </div>
          <div className={cn("icon block xs:hidden ",iconClassNames)}>
            <Link
              href="https://github.com/yumustyology"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={25} color="#FFFFFF" />
            </Link>
          </div>
        </div>
        <div className="right-footer flex items-center justify-start pl-4 font-normal text-base lxs:text-lg tracking-widest text-white xlgTablet:!w-max w-fit pr-4 h-11" style={{
            fontFamily: 'Consolas'
        }}>
          <Link
            href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <div className="git-link cursor-pointer">@yumustyology</div>
          </Link>
          <Link
            href="https://github.com/yumustyology"
            target="_blank"
            rel="noreferrer"
            className="git-icon-link-tag contents"
          >
            &nbsp;
            <BsGithub style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
