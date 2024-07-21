"use client";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavList = [
  { text: "home", href: "/" },
  { text: "about", href: "/about" },
  { text: "experience", href: "/experience" },
  { text: "projects", href: "/projects" },
  { text: "contact", href: "/contact" },
];

type NavTypes = (typeof NavList)[number]["text"];

const NavLinkDiv = ({
  text,
  isActive,
  href,
  onClick,
}: {
  text: string;
  isActive: boolean;
  href: string;
  onClick?: () => void;
}) => (
  <Link href={href} className={cn(`${isActive && "active"}`)}>
    <p
      className={cn(
        "w-full xlgTablet:w-[180px] h-11 xlgTablet:h-12 bg-[#2e2e2e] flex items-center xlgTablet:justify-center font-normal text-lg tracking-widest pointer-events-none xlgTablet:cursor-pointer text-[#ffffff] px-4 xlgTablet:px-0 border-b border-[#ffffff33]",
        {
          "bg-[#252526] text-[#dea71b] border-t-[5px] border-t-[#465F78]":
            isActive,
        }
      )}
      style={{
        fontFamily: "Consolas",
      }}
      onClick={onClick}
    >
      _{text}
    </p>
  </Link>
);

function Navigator() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isActive = (href: NavTypes) => pathname  ==  href;

  return (
    <div>
      <div
        className="app-name h-12 sticky top-0 flex items-center font-normal text-xl justify-between px-4 border border-b-[#ffffff33] xlgTablet:border-none xlgTablet:px-0 xlgTablet:justify-center text-[#ffffff] tracking-widest"
        style={{
          fontFamily: "Consolas",
        }}
      >
        <p className="text-xl tablet:text-3xl font-bold">Yusuf Mustahan</p>
        <p className="toggle-bar block xlgTablet:hidden">
          <Hamburger
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            toggled={sidebarOpen}
          />
        </p>
      </div>
      <div className="nav-link hidden w-full h-12 bg-[#252526] xlgTablet:flex items-center">
        {NavList.map(({ text, href }) => (
          <NavLinkDiv text={text} isActive={isActive(href)} href={href} />
        ))}
      </div>
      <div
        className={cn(
          `navigator-sidebar block xlgTablet:hidden transition-all fixed h-[calc(100vh-48px)] right-0 z-20 bg-[#2e2e2e]`,
          sidebarOpen ? "w-full tablet:w-[400px]" : "w-0"
        )}
      >
        <div className="link w-full">
          {NavList.map(({ text, href }) => (
            <NavLinkDiv
              text={text}
              isActive={isActive(href)}
              href={href}
              onClick={() => setSidebarOpen(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigator;
