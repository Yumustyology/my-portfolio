"use client";

import doGetProjects from "@/lib/actions/doGetProjects";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { pageTitleClassName } from "@/lib/utils/generalClassNames";
import Container from "@/ui/atoms/Container";
import { ProjectCard } from "@/ui/atoms/ProjectCard";
import BlurFade from "@/ui/atoms/magic-ui/blur-fade";
import ProjectsRightWingSidebar from "@/ui/molecules/projects/ProjectsRightWingSidebar";
import { ExperienceSkeleton } from "@/ui/molecules/skeletons/ExperienceSkeleton";
import React, { useState, useRef, useEffect } from "react";
import useSWR from "swr";

function page() {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("projects", doGetProjects);
  // console.log(projects);
  // console.log(error);

  const [, setTechnologies] = useState<any[]>([]);
  const [updatedProjectData, setUpdatedProjectData] = useState(projects);
  const languageFilter = useRef(null);
  const languageFilterList: any[] = [];
  let formattedTechnologies: any[] = [];

  const filterProjects = (projectsData: any, filterLangs: any) => {
    if (formattedTechnologies.length > 0) {
      return projectsData.filter((data: any) => {
        return filterLangs.every((filterLang: string) =>
          data.technologies.includes(filterLang)
        );
      });
    } else {
      return projects;
    }
  };

  const setLanguage = (lang: string) => {
    // if (technologies.includes(lang)) {
    //   setTechnologies(technologies.filter((e) => e !== lang));
    // } else {
    //   setTechnologies([...technologies, lang]);
    // }
    // formattedTechnologies = technologies.map((technology) => {
    //   return technology.split(" ").join("_").toLowerCase();
    // });
    // let filteredProject = filterProjects(
    //   updatedProjectData,
    //   formattedTechnologies
    // );
    // setUpdatedProjectData(filteredProject);
    // console.log("filteredProj ", filteredProject);
    // if (formattedTechnologies.length > 0) {
    //   setUpdatedProjectData(
    //     updatedProjectData.filter((data) => {
    //       return formattedTechnologies.every((filterLang) =>
    //         data.technologies.includes(filterLang)
    //       );
    //     })
    //   );
    // setUpdatedProjectData(filtered);
    // } else {
    //   setUpdatedProjectData(projects);
    // }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSidebarOpen(window.innerWidth <= 899 ? false : true);
    }
  }, []);

  const toggleSideNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // useEffect(() => {
  //   // languageFilter?.current && languageFilter?.current.scrollLeft = 40000;
  // }, [technologies]);

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
            <div className={cn("page-title-container hidden-scrollbar")}>
              <div
                className={cn(
                  "projects-page-title",
                  pageTitleClassName,
                  "justify-end flex-nowrap px-4 border-r border-r-[#ffffff33]"
                )}
                style={{
                  display: "flex",
                  overflowX: "auto",
                }}
              >
                <div
                  className="projects-language-filter"
                  style={{ display: "-webkit-inline-box", overflowX: "auto" }}
                  ref={languageFilter}
                >
                  {/* {technologies.length !== 0
                    ? technologies.map((lang, i) => (
                        <div
                          key={i}
                          onClick={() => console.log(formattedTechnologies)}
                        >
                          {lang.split(" ").join("_")};&nbsp;
                        </div>
                      ))
                    : "all"} */}
                </div>
              </div>
            </div>
            <div className="left-wing-top-inner md-drop-down">
              <div>
                {/* small wing */}
                <ProjectsRightWingSidebar
                  screenRender="small"
                  languageFilterList={languageFilterList}
                  sidebarOpen={sidebarOpen}
                  toggleSideNav={toggleSideNav}
                  setLanguage={setLanguage}
                />
              </div>
            </div>
          </div>

          <div className="left-wing-body overflow-y-auto h-full">
            {/* project card */}
            <section className="projects-body pb-20 pt-[1.5em] h-[70vh] xlgTablet:h-[75dvh] overflow-y-auto hidden-scrollbar lgDesktop:[pb-8]">
              {isLoading ? (
                <ExperienceSkeleton />
              ) : projects && projects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[700px] lgDesktop:max-w-[800px] mx-auto">
                  {projects.map((project, i) => (
                    <React.Fragment key={(i * Math.random()).toString()}>
                      <BlurFade
                        key={project.projectName}
                        delay={BLUR_FADE_DELAY * 12 + i * 0.05}
                      >
                        <ProjectCard
                          key={project.projectName}
                          title={project.projectName}
                          description={project.projectInfo}
                          dates={project.dates}
                          tags={project.languages}
                          image={project?.image}
                          video={project?.video}
                          link={project.livePreviewLink}
                        />
                      </BlurFade>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="not-found-container tracking-wide text-white h-[50vh] w-full items-center flex justify-center text-2xl">
                  <div className="project-open-tag">
                    &lt;
                    <span className="white-tag-text">
                      <span style={{ color: "#FFBD44" }}>h1</span>
                    </span>
                    &gt;
                  </div>
                  <span className="not-found-text text-xl font-semibold">
                    &nbsp; Sorry, match not found 😥!&nbsp;
                  </span>
                  <div className="project-close-tag">
                    &lt;
                    <span className="white-tag-text">
                      /<span style={{ color: "#FFBD44" }}>h1</span>
                    </span>
                    &gt;
                  </div>
                </div>
              )}
            </section>
          </div>
          {/* <div className="rotating-text-box fixed">
              <CircleText
                prevPage="/experience"
                nextPage="/contact"
                isPrevPage={true}
                isNextPage={true}
              />
            </div> */}
        </div>
        <ProjectsRightWingSidebar
          screenRender="large"
          languageFilterList={languageFilterList}
          sidebarOpen={sidebarOpen}
          toggleSideNav={toggleSideNav}
          setLanguage={setLanguage}
        />
      </div>
    </Container>
  );
}

export default page;
