"use client";
import React, { useEffect, useState } from "react";
import { pageTitleClassName } from "@/lib/utils/generalClassNames";
import { cn } from "@/lib/utils";
import { about } from "@/lib/dummyData";
import AboutMeText from "@/ui/molecules/about/AboutMeText";
import Education from "@/ui/molecules/about/Education";
import Interest from "@/ui/molecules/about/Interest";
import RightWingBar from "@/ui/molecules/about/RightWing";
import Container from "@/ui/atoms/Container";

type tabType = "bio" | "education" | "interest";

function index() {
  let getAboutTab: tabType | null = window.localStorage.getItem(
    "aboutTab"
  ) as never as tabType;
  const [sidebarBottomOpen, setSidebarBottomOpen] = useState(false);

  const [tab, setTab] = useState<tabType>("bio");

  let [resumeSidebarOpen, setResumeSidebarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSidebarOpen(window.innerWidth <= 899 ? false : true);
    }
  }, []);

  useEffect(() => {
    getAboutTab && setTab(getAboutTab);
  }, [tab]);

  const toggleSideNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleBottomSideNav = () => {
    setSidebarBottomOpen(!sidebarBottomOpen);
  };

  const toggleResumeSideNav = () => {
    setResumeSidebarOpen(!resumeSidebarOpen);
  };

  const changeTab = (tab: tabType) => {
    setTab(tab);
    window.localStorage.setItem("aboutTab", tab);
  };

  return (
    <Container bordered>
      <div
        className="flex"
        style={{
          fontFamily: "Consolas",
        }}
      >
        <div className="left-wing w-3/4 border-r border-r-[#ffffff33] h-screen">
          <div className="left-wing-top border-b border-b-[#ffffff33] h-[50px] xlgTablet:border-b-none">
            <div className="left-wing-top-inner hidden border-b-none">
              <div className="nav-link-inner">
                <div>
                  _about (
                  {tab === "bio"
                    ? "bio"
                    : tab === "education"
                    ? "education"
                    : "interest"}
                  )
                </div>
              </div>
              <div className="left-wing-top-inner md-drop-down track">
                <div>
                  <RightWingBar
                    screenRender="small"
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    toggleSideNav={toggleSideNav}
                    toggleBottomSideNav={toggleBottomSideNav}
                    changeTab={changeTab}
                    sidebarBottomOpen={sidebarBottomOpen}
                    setSidebarBottomOpen={setSidebarBottomOpen}
                    resumeSidebarOpen={resumeSidebarOpen}
                    setResumeSidebarOpen={setResumeSidebarOpen}
                    toggleResumeSideNav={toggleResumeSideNav}
                  />
                </div>
              </div>
            </div>
            <div className="left-wing-top-inner">
              <div
                className={cn("page-title", pageTitleClassName)}
                style={{
                  fontFamily: "Consolas",
                  fontStyle: "normal",
                }}
              >
                about-me(
                {tab === "bio"
                  ? "bio"
                  : tab === "education"
                  ? "education"
                  : "interest"}
                )
              </div>
            </div>
          </div>

          <div className="left-wing-body overflow-y-auto h-full">
            <div className="">
              <section className="about-body text-left pl-[4%] w-full overflow-y-auto hidden-scrollbar">
                {tab === "bio" ? (
                  about && <AboutMeText about={about} />
                ) : tab === "interest" ? (
                  <div className="about-interest">
                    <div>
                      <Interest />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Education />
                  </div>
                )}
              </section>
            </div>
            {/* next btn */}
            {/* <div className="rotating-text-box fixed">
              <CircleText
                prevPage="/"
                nextPage="/experience"
                isPrevPage={true}
                isNextPage={true}
              />
            </div> */}
          </div>
        </div>
        {/* right wing large screen part */}
        <RightWingBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          toggleSideNav={toggleSideNav}
          toggleBottomSideNav={toggleBottomSideNav}
          changeTab={changeTab}
          sidebarBottomOpen={sidebarBottomOpen}
          setSidebarBottomOpen={setSidebarBottomOpen}
          resumeSidebarOpen={resumeSidebarOpen}
          setResumeSidebarOpen={setResumeSidebarOpen}
          toggleResumeSideNav={toggleResumeSideNav}
        />
      </div>
    </Container>
  );
}

export default index;
