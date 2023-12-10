import React, { useContext, useState } from "react";
import "../styles/projects.css";
import {
  BsFillCaretDownFill,
  BsGithub,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { languageFilterList } from "../assets/js/languageFlter";
import { useEffect } from "react";
import CircleText from "../components/circleText";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { yungContext } from "../context/context";

const RightWingBar = ({
  sidebarOpen,
  toggleSideNav,
  setLanguage,
  languageFilterList,
}) => {
  return (
    <div>
      <div
        className="sidebar-title"
        onClick={toggleSideNav}
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        {sidebarOpen ? (
          <BsFillCaretDownFill size={20} />
        ) : (
          <BsFillCaretRightFill size={20} />
        )}
        &nbsp;Languages_Filter
      </div>
      <div className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}>
        <div className={`sidebar`}>
          {languageFilterList.map((data, i) => (
            <div
              className="social-media-project"
              key={i}
              style={{ marginBottom: "0em" }}
            >
              <div className="flex-align">
                <label className="label">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setLanguage(data.name);
                    }}
                  />
                  &nbsp;
                  {data.icon}
                  &nbsp;{data.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const { projects, setProjects, getProjects } = useContext(yungContext);
  const [languages, setLanguages] = useState([]);
  const [updatedProjectData, setUpdatedProjectData] = useState(projects);
  const languageFilter = useRef(null);

  let formattedLangs = [];

  const filterProjects = (projectsData, filterLangs) => {
    console.log("tuib ", updatedProjectData);
    console.log("tuiby ", projectsData, filterLangs);

    // if (formattedLangs.length > 0) {
    //   return projectsData.filter((data) => {
    //     return filterLangs.every((filterLang) =>
    //       data.languages.includes(filterLang)
    //     );
    //   });
    // } else {
    //   return projects
    // }
  };

  const setLanguage = (lang) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((e) => e !== lang));
    } else {
      setLanguages([...languages, lang]);
    }

    formattedLangs = languages.map((langa) => {
      return langa.split(" ").join("_").toLowerCase();
    });

    let filteredProject = filterProjects(updatedProjectData, formattedLangs);

    // setUpdatedProjectData(filteredProject);

    console.log("filteredProj ", filteredProject);

    if (formattedLangs.length > 0) {
      setUpdatedProjectData(
        updatedProjectData.filter((data) => {
          return formattedLangs.every((filterLang) =>
            data.languages.includes(filterLang)
          );
        })
      );
      // setUpdatedProjectData(filtered);
    } else {
      setUpdatedProjectData(projects);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth <= 899 ? false : true
  );

  const toggleSideNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    languageFilter.current.scrollLeft = 40000;
  }, [languages]);

  return (
    <div>
      <div className="body">
        <div className="left-wing">
          <div className="left-wing-top">
            <div className="left-wing-top-inner"></div>
            <div className="page-title-container">
              <div
                className="projects-page-title"
                onClick={() => console.log(languages)}
                style={{
                  display: "flex",
                  overflowX: "auto",
                  borderRight: "none",
                }}
              >
                <div
                  className="projects-language-filter"
                  style={{ display: "-webkit-inline-box", overflowX: "auto" }}
                  ref={languageFilter}
                >
                  {languages.length !== 0
                    ? languages.map((lang, i) => (
                        <div
                          key={i}
                          onClick={() => console.log(formattedLangs)}
                        >
                          {lang.split(" ").join("_")};&nbsp;
                        </div>
                      ))
                    : "all"}
                </div>
              </div>
            </div>
            <div className="left-wing-top-inner md-drop-down">
              <div>
                <RightWingBar
                  languageFilterList={languageFilterList}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  toggleSideNav={toggleSideNav}
                  setLanguage={setLanguage}
                />
              </div>
            </div>
          </div>
          <div className="left-wing-body">
            <div className="max-width">
              <section className="projects-body">
                {updatedProjectData.length > 0 ? (
                  updatedProjectData.map((data, i) => (
                    <div className="projects-info" key={i}>
                      <div className="project-name">
                        <span>Project {i + 1} //</span>{" "}
                        <span
                          style={{
                            textTransform: "lowercase",
                            color: "#FFFFFF",
                          }}
                        >{`_${data.projectName}`}</span>
                      </div>
                      <div className="project-card">
                        <div className="project-image">
                          <div className="more-btn">
                            <div>more</div>
                            <div>
                              <MdOutlineNavigateNext
                                className="more-arrow"
                                style={{ marginLeft: "0em", display: "inline" }}
                                size={20}
                              />
                            </div>
                          </div>
                          <LazyLoadImage
                            alt="project-img"
                            effect="blur"
                            src={data.image}
                            className="project-img"
                          />
                        </div>
                        <div className="project-info">{data.projectInfo}</div>
                        <div className="project-links">
                          <a
                            href={data.livePreviewLink}
                            target="_blank"
                            without
                            rel="noreferrer"
                          >
                            <div className="live-preview">
                              <div>View Project here</div>
                              <div>
                                <MdOutlineNavigateNext
                                  className="next-btn"
                                  color="#fff"
                                  size={25}
                                />
                              </div>
                            </div>
                          </a>

                          <div
                            className="git-preview"
                            target="_blank"
                            without
                            rel="noreferrer"
                          >
                            <a href={data.githubLink}>
                              <BsGithub
                                style={{ cursor: "pointer" }}
                                size={20}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="not-found-container">
                    <div className="project-open-tag">
                      &lt;
                      <span className="white-tag-text">
                        <span style={{ color: "#FFBD44" }}>h1</span>
                      </span>
                      &gt;
                    </div>
                    <span className="not-found-text">
                      Sorry, match not found !
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
            <div className="rotating-text-box fixed">
              <CircleText
                prevPage="/experience"
                nextPage="/contact"
                isPrevPage={true}
                isNextPage={true}
              />
            </div>
          </div>
        </div>
        <div className="right-wing">
          <div className="right-wing-top">
            <div className="right-wing-top-inner"></div>
            <div>
              <div className="sidebar-title" onClick={toggleSideNav}>
                {sidebarOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;Languages_Filter
              </div>
              <div
                className={`sidebar-body-project ${
                  sidebarOpen ? "opened" : "closed"
                }`}
              >
                <div className="sidebar">
                  {languageFilterList.map((data, i) => (
                    <div className="social-media-project" key={i}>
                      <div className="flex-align">
                        <label className="label">
                          <input
                            type="checkbox"
                            onChange={() => {
                              setLanguage(data.name);
                            }}
                          />
                          &nbsp;
                          {data.icon}
                          &nbsp;{data.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
