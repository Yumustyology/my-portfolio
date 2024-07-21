import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavTypes = "home" | "about" | "experience" | "projects" | "contact";

function Navigator() {
const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isActive = (href:NavTypes)=> pathname.includes(href)
  return (
    <div>
      <div className="app-name">
        <p className="text-3xl font-bold underline">Yusuf Mustahan</p>
        <p className="hrefggle-bar">
          <Hamburger
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            toggled={sidebarOpen}
          />
        </p>
      </div>
      <div className="nav-link">
        <Link href="/" className={cn(`${isActive('home') && "active"}`)}>
          <div>_home</div>
        </Link>
        <Link href="/about" className={cn(`${isActive("about") && "active"}`)}>
          <div>_about</div>
        </Link>
        <Link href="/experience" className={cn(`${isActive("experience") && "active"}`)}>
          <div>_experience</div>
        </Link>
        <Link href="/projects" className={cn(`${isActive("projects") && "active"}`)}>
          <div>_project</div>
        </Link>
        <Link href="/contact" className={cn(`${isActive("contact") && "active"}`)}>
          <div>_contact me</div>
        </Link>
      </div>
      <div
        className={`navigator-sidebar ${
          sidebarOpen ? "open-sidebar" : "closed-sidebar"
        }`}
      >
        <div className="link">
          <Link href="/" className={cn(`${isActive("home") && "active"}`)}>
            <div onClick={() => setSidebarOpen(false)}>_home</div>
          </Link>
          <Link href="/about" className={cn(`${isActive("about") && "active"}`)}>
            <div onClick={() => setSidebarOpen(false)}>_about</div>
          </Link>
          <Link href="/experience" className={cn(`${isActive("experience") && "active"}`)}>
            <div onClick={() => setSidebarOpen(false)}>_experience</div>
          </Link>
          <Link href="/projects" className={cn(`${isActive("projects") && "active"}`)}>
            <div onClick={() => setSidebarOpen(false)}>_project</div>
          </Link>
          <Link href="/contact" className={cn(`${isActive("contact") && "active"}`)}>
            <div onClick={() => setSidebarOpen(false)}>_contact me</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
