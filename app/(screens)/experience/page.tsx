"use client";
import { cn, formatDate } from "@/lib/utils";
import "../style.css";
// import { FormatDate } from "@/lib/utils/dateFormat";
import React, { useEffect, useState } from "react";
import Container from "@/ui/atoms/Container";
import doGetExperience from "@/lib/actions/doGetExperience";
import { pageTitleClassName } from "@/lib/utils/generalClassNames";
import EperienceRightWingSideBar from "@/ui/molecules/experience/EperienceRightWingSideBar";
import { ExperienceSkeleton } from "@/ui/molecules/skeletons/ExperienceSkeleton";
import useSWR from "swr";

type ExperienceType = {
  tagName: string;
  companyName: string;
  country: string;
  role: string;
  fromDate: Date;
  toDate: Date;
  tasks: string;
};

function page() {
  const {
    data: experiences,
    error,
    isLoading,
  } = useSWR("experience", doGetExperience);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    typeof window !== "undefined" &&
      setSidebarOpen(window.innerWidth <= 899 ? false : true);
  }, []);

  const toggleSideNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const experienceWrapTag =
    "font-semibold text-[30px] h-[30%] text-[#505ed7] opacity-[0.5]";

  return (
    <Container bordered>
      <header data-plugin-header="line-numbers"></header>
      <div
        className="flex"
        style={{
          fontFamily: "Consolas",
        }}
      >
        <div className="left-wing w-3/4 h-screen pb-40 border-r border-r-[#ffffff33]">
          <div className="left-wing-top border-b border-b-[#ffffff33]">
            <div className={cn("page-title", pageTitleClassName)}>
              Experience
            </div>

            <div>
              <EperienceRightWingSideBar
                screenRender="small"
                experiences={experiences ?? []}
                sidebarOpen={sidebarOpen}
                toggleSideNav={toggleSideNav}
              />
            </div>
          </div>
          <div className="left-wing-body overflow-y-auto scroll-smooth h-full">
            <div className="experience-info-box mt-[2em]">
              {isLoading ? (
                <ExperienceSkeleton />
              ) : experiences && experiences.length > 0 ? (
                experiences?.map((data: ExperienceType, i: number) => (
                  <div key={i} id={i.toString()}>
                    <div className="experience-info ml-[4%] w-[736px] text-left">
                      <div
                        className={cn(
                          "experience-wrap-open-tag text-left mb-[.3em]",
                          experienceWrapTag
                        )}
                      >
                        &lt;
                        <span className="white-wrap-tag-text text-[#FFBD44]">
                          {data.tagName}
                        </span>
                        &gt;
                      </div>
                      <div className="tabcontent-sm px-8">
                        <div style={{ marginBottom: ".5em" }}>
                          <span className="experience-name text-white font-semibold text-xl tracking-[.08em]">
                            {data.companyName}
                          </span>
                          <span className="experience-country text-white font-thin text-xl tracking-[.08em]">
                            ,{data.country}
                            &nbsp;&#8212;&nbsp;
                          </span>
                          <span className="experience-role text-white font-thin text-lg tracking-[.08em]">
                            {data.role},
                          </span>
                          <div>
                            <b
                              className={cn(
                                "experience-date font-thin text-base tracking-[.08em] text-[#FFBD44]"
                              )}
                            >
                              {data?.fromDate &&
                                formatDate(data?.fromDate.toLocaleString())}
                              &nbsp;&#8212;&nbsp;
                              {data.toDate &&
                                formatDate(data?.toDate.toLocaleString())}
                            </b>
                          </div>
                        </div>
                        <span className="white-exp-text">
                          {data.tasks}
                          <br />
                        </span>
                        <br />
                        <br />
                      </div>
                      <div></div>
                      <div
                        className={cn(
                          "experience-wrap-close-tag text-right mt-[.3em] mb-[2em]",
                          experienceWrapTag
                        )}
                      >
                        &lt;
                        <span className="white-wrap-tag-text text-[#FFBD44]">
                          /{data.tagName}
                        </span>
                        &gt;
                      </div>
                    </div>
                  </div>
                ))
              ) : null}
            </div>
            {/* experience info box ends */}
            {/* <div className="rotating-text-box fixed">
                <CircleText
                  prevPage="/about"
                  nextPage="/projects"
                  isPrevPage={true}
                  isNextPage={true}
                />
              </div> */}
            {/* </div> */}
          </div>
        </div>
        <EperienceRightWingSideBar
          experiences={experiences ?? []}
          sidebarOpen={sidebarOpen}
          toggleSideNav={toggleSideNav}
        />
      </div>
    </Container>
  );
}

export default page;
