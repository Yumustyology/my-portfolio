"use client";
import React, { useEffect, useState, useRef } from "react";
// import "../styles/experience.css";
// import "../style.css";
import {
  BsFillCaretDownFill,
  BsTelephoneFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFillCaretRightFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdMail, MdOutlineNavigateNext } from "react-icons/md";
import { HiFolder } from "react-icons/hi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AboutTab, aboutTabs, socialMediaContacts } from "@/lib/Data";
import { sidebarTitleClassNames } from "@/lib/utils/generalClassNames";

//TODO make general
type tabType = "bio" | "education" | "interest";

const RightWingBar = ({
  screenRender = "large",
  sidebarOpen,
  setSidebarOpen,
  toggleSideNav,
  toggleBottomSideNav,
  changeTab,
  sidebarBottomOpen,
  setSidebarBottomOpen,
  toggleResumeSideNav,
  resumeSidebarOpen,
  setResumeSidebarOpen,
}: {
  screenRender?: "small" | "large";
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideNav: () => void;
  toggleBottomSideNav: () => void;
  changeTab: (tab: tabType) => void;
  sidebarBottomOpen: boolean;
  setSidebarBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleResumeSideNav: () => void;
  resumeSidebarOpen: boolean;
  setResumeSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const sidebarSubTitleClassNames =
    "sidebar-sub-title transition-[1s] mt-[.5em] border-b border-t border-t-[#ffffff33] border-b-[#ffffff33] border-b border-b-[#ffffff33]";
  const sidebarClassName =
    "sidebar font-normal text-white text-sm tracking-[.08em] mt-[.5em] pl-[6em] flex flex-col";

  const sectionAndSpanClassName =
    "font-normal text-base tracking-[.08em] h-[30px]";

  const socialMediaAbout = "h-[25%] cursor-pointer";

  return (
    <React.Fragment>
      {/* large screen display */}
      {screenRender == "large" ? (
        <div
          className="right-wing w-[25%] hidden xlgTablet:block"
          style={{
            fontFamily: "Consolas",
            fontStyle: "normal",
          }}
        >
          <div className="right-wing-top border-b border-b-[#ffffff33] h-[50px] w-full">
            <div>
              <div
                className={cn("sidebar-title", sidebarTitleClassNames)}
                onClick={toggleSideNav}
              >
                {sidebarOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;personal-information
              </div>
              <div
                className={cn(`sidebar-body-about overflow-y-auto transition-[1s] about-top`,{
                  "hidden": !sidebarOpen,
                  "block": sidebarOpen
                })}
              >
                <div className="sidebar text-sm text-white flex flex-col py-.5 pl-[8em] my-[.5em] font-normal tracking-[.08em]">
                  {aboutTabs.map((tab: AboutTab, index) => (
                    <div
                      key={index}
                      className={cn("social-media-about", "social-media-about")}
                      onClick={() =>
                        changeTab(tab.tabName as unknown as tabType)
                      }
                    >
                      <div className="flex items-center">
                        <MdOutlineNavigateNext color="white" size={20} />
                        &nbsp;
                        <HiFolder color={tab.color} size={tab.size} />
                        &nbsp;{tab.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* resume */}

              <div
                className={cn(
                  sidebarSubTitleClassNames,
                  sidebarTitleClassNames,
                  'mt-0',
                  {
                    'border-t-0': !sidebarOpen,
                  }
                )}
                onClick={toggleResumeSideNav}
                style={{
                  fontFamily: "Consolas",
                }}
              >
                {resumeSidebarOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;resume
              </div>
              <div
                className={cn(
                  `sidebar-body-about overflow-y-auto transition-[1s] about-top`,
                  { block: resumeSidebarOpen, hidden: !resumeSidebarOpen }
                )}
              >
                <div className={cn(sidebarClassName)}>
                  <div
                    className={cn(socialMediaAbout, "social-media-about py-2")}
                  >
                    <Link
                      href="https://drive.google.com/drive/folders/1ihpe6IfMVGt3VmLKZi-1_UfLDv765RkY?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                      download
                    >
                      <div className="flex items-center">
                        &nbsp;
                        <BsFillFileEarmarkFill size={18} color="#787773" />
                        &nbsp;yusuf_mustahan.pdf
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* social media handle */}
              <div
                className={cn(
                  sidebarSubTitleClassNames,
                  sidebarTitleClassNames,
                  'mt-0',
                  {
                    'border-t-0': !resumeSidebarOpen,
                  }
                )}
                style={{
                  fontFamily: "Consolas",
                }}
                onClick={toggleBottomSideNav}
              >
                {sidebarBottomOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;contacts
              </div>
              <div
                className={cn(
                  "sidebar-body-contact about-bottom transition-[40s]",
                  {
                    block: sidebarBottomOpen,
                    hidden: !sidebarBottomOpen,
                  }
                )}
              >
                <div
                  className={cn(
                    sidebarClassName,
                    "space-y-2.5 mt-[1.5em] h-[20vh] lgDesktop:h-[28vh] xxlDesktop:h-auto overflow-y-auto hidden-scrollbar"
                  )}
                >
                  {socialMediaContacts.map((contact, index) => (
                    <div key={index} className="social-media-contact">
                      {contact.href !== "#" ? (
                        <Link
                          href={contact.href}
                          target={contact.target}
                          rel={contact.rel}
                        >
                          <div className="flex items-center">
                            {contact.icon}
                            &nbsp;{contact.label}
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center">
                          {contact.icon}
                          &nbsp;{contact.label}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* small screen display */}
      {screenRender == "small" ? (
        <div
          className="block xlgTablet:hidden"
          style={{
            fontFamily: "Consolas",
          }}
        >
          <div
            className="sidebar-title"
            onClick={() => {
              toggleSideNav();
              // if (!sidebarOpen) {
              setResumeSidebarOpen(false);
              setSidebarBottomOpen(false);
              // }
            }}
          >
            {sidebarOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;personal-information
          </div>
          <div
            className={`sidebar-body-about overflow-y-auto about-top ${
              sidebarOpen ? "opened" : "closed"
            }`}
          >
            <div className={cn(sidebarClassName)}>
              <div
                className={cn(socialMediaAbout, "social-media-about")}
                onClick={() => changeTab("bio")}
              >
                <div className="flex items-center">
                  <MdOutlineNavigateNext color="white" size={20} />
                  &nbsp;
                  <HiFolder color="#FF605C" size={25} />
                  &nbsp;bio
                </div>
              </div>

              <div
                className={cn(socialMediaAbout, "social-media-about")}
                onClick={() => changeTab("interest")}
              >
                <div className="flex items-center">
                  <MdOutlineNavigateNext color="white" size={20} />
                  &nbsp;
                  <HiFolder color="#2C957E" size={25} />
                  &nbsp;interest
                </div>
              </div>

              <div
                className={cn(socialMediaAbout, "social-media-about")}
                onClick={() => changeTab("education")}
              >
                <div className="flex items-center">
                  <MdOutlineNavigateNext color="white" size={20} />
                  &nbsp;
                  <HiFolder color="#9747FF" size={25} />
                  &nbsp;education
                </div>
              </div>
            </div>
          </div>

          {/* resume */}

          <div
            className={cn(sidebarSubTitleClassNames, sidebarSubTitleClassNames)}
            style={{
              fontFamily: "Consolas",
            }}
            onClick={() => {
              toggleResumeSideNav();
              setSidebarBottomOpen(false);
              setSidebarOpen(false);
            }}
          >
            {resumeSidebarOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;resume
          </div>
          <div
            className={`sidebar-body-about overflow-y-auto transition-[1s] about-top ${
              resumeSidebarOpen ? "opened" : "closed"
            }`}
          >
            <div className={cn(sidebarClassName)}>
              <div className={cn(socialMediaAbout, "social-media-about")}>
                <a
                  href="https://drive.google.com/drive/folders/1ihpe6IfMVGt3VmLKZi-1_UfLDv765RkY?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                  download
                >
                  <div className="flex items-center">
                    {/*  <MdOutlineNavigateNext color="white" size={20} /> */}
                    &nbsp;
                    <BsFillFileEarmarkFill size={18} color="#787773" />
                    &nbsp;yusuf_mustahan
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* social media handle */}
          <div
            className={cn(sidebarSubTitleClassNames, sidebarTitleClassNames)}
            style={{ marginTop: "0em", fontFamily: "Consolas" }}
            onClick={() => {
              toggleBottomSideNav();
              // sidebarOpen && setSidebarOpen(false);
              // if (sidebarOpen) {
              setResumeSidebarOpen(false);
              setSidebarOpen(false);
              // }
            }}
          >
            {sidebarBottomOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;contacts
          </div>
          <div
            className={`sidebar-body-contact about-bottom ${
              sidebarBottomOpen ? "opened opened-about" : "closed"
            } `}
            // style={{ height: sidebarOpen ? "20vh" : "30vh" }}
            style={{ height: "35vh" }}
          >
            {/* <div className={cn(sidebarClassName)}>
              <div className="social-media-contact">
                <a
                  href="tel://+234 814 245 0182"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <BsTelephoneFill size={15} />
                    &nbsp;+234 814 245 0182
                  </div>
                </a>
              </div>
              <div className="social-media-contact">
                <a
                  href="mailto://yumustyology@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <MdMail size={17} />
                    &nbsp;yumustyology@gmail.com
                  </div>
                </a>
              </div>

              <div className="social-media-contact">
                <a
                  href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <BsLinkedin size={17} color="#FFFFFF" />
                    &nbsp;Linkedin
                  </div>
                </a>
              </div>

              <div className="social-media-contact">
                <div className="flex items-center">
                  <ImInstagram size={17} />
                  &nbsp;Instagram
                </div>
              </div>

              <div className="social-media-contact">
                <a
                  href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <BsTwitter size={17} />
                    &nbsp;Twitter
                  </div>
                </a>
              </div>

              <div className="social-media-contact">
                <div className="flex items-center">
                  <ImFacebook2 size={17} />
                  &nbsp;Facebook
                </div>
              </div>

              <div className="social-media-contact">
                <a
                  href="https://wa.me/+2348142450182"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <RiWhatsappFill size={18} />
                    &nbsp;Watsapp
                  </div>
                </a>
              </div>

              <div className="social-media-contact">
                <a
                  href="https://github.com/yumustyology"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center">
                    <BsGithub size={17} />
                    &nbsp;Github
                  </div>
                </a>
              </div>
            </div> */}
            <div className={cn(sidebarClassName)}>
              {socialMediaContacts.map((contact, index) => (
                <div key={index} className="social-media-contact">
                  {contact.href !== "#" ? (
                    <Link
                      href={contact.href}
                      target={contact.target}
                      rel={contact.rel}
                    >
                      <div className="flex items-center">
                        {contact.icon}
                        &nbsp;{contact.label}
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      {contact.icon}
                      &nbsp;{contact.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default RightWingBar;
