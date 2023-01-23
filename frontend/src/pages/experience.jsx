import React, { useEffect, useRef, useState } from "react";
import "../styles/experience.css";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import ExperienceList from "../components/experienceList";
import { experienceList } from "../data";
import { axios } from "../utils/axios";
import { FormatDate as formatDate } from "../utils/dateFormat";

const RightWingBar = ({ sidebarOpen, toggleSideNav, experiences }) => {
  const repeat = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 9, 9, 2, 7, 5, 4, 2, 6, 9, 5, 4, 3, 3, 1,
    2, 2, 6, 4, 5, 7, 9,
  ];
  return (
    <div>
      <div className="sidebar-title" onClick={toggleSideNav}>
        {sidebarOpen ? (
          <BsFillCaretDownFill size={20} />
        ) : (
          <BsFillCaretRightFill size={20} />
        )}
        &nbsp;Experience
      </div>
      <div
        className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}
        style={{ height: experiences.length === 0 && 0 }}
      >
        <div className={`sidebar`}>
          {experiences.length > 0 &&
            experiences?.map((data, i) => (
              <div key={i} style={{ cursor: "pointer" }}>
                &lt;&gt; _{data.tagName} &lt;/&gt;
              </div>
            ))}
          {/* {repeat?.map((data, i) => (
            <div key={i} style={{ cursor: "pointer" }}>
              &lt;&gt; _{data} &lt;/&gt;
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [date, setDate] = useState(null);

  const repeat = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 9, 9, 2, 7, 5, 4, 2, 6, 9, 5, 4, 3, 3, 1,
    2, 2, 6, 4, 5, 7, 9,
  ];

  // const [sidebarOpen, setSidebarOpen] = useState(true); TODO change to true
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const rootRef = useRef(null);

  const toggleSideNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getExp = () => {
    axios.get("/experience").then((resp) => setExperiences(resp.data));
  };

  useEffect(() => {
    getExp();
  }, []);

  return (
    <div>
      <header data-plugin-header="line-numbers"></header>
      <div className="body">
        <div className="left-wing">
          <div className="left-wing-top">
            <div className="left-wing-top-inner"></div>
              <div className="page-title">Experience</div>
              <div className="left-wing-top-inner md-drop-down">
                <div>
                  <RightWingBar
                    experiences={experiences}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    toggleSideNav={toggleSideNav}
                  />
              </div>
            </div>
          </div>
          <div className="left-wing-body">
            <div className="max-width">
              {/* {repeat.map((data, i) => (
                <div key={i}>
                  <section className="experience-info">
                    <span className="section">&lt;section&gt;</span>
                    <br />
                    <div className="tabcontent">
                      <span className="span">&lt;h1&gt;</span>
                      <span className="white-exp-text">company name</span>{" "}
                      <span className="span">&lt;/h1&gt;</span>
                      <br />
                      <span className="span">&lt;span&gt;</span>
                      <div className="tabcontent-sm">
                        <span className="white-exp-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis,
                          lectus magna fringilla urna, porttitor
                        </span>
                      </div>
                      <span className="span">&lt;/span&gt;</span>
                      <br />
                      <span className="span">&lt;span&gt;</span>
                      <span className="white-exp-text">
                        Fullstack Developer
                      </span>
                      <span className="span">&lt;/span&gt;</span>
                      <br />
                      <span className="span">&lt;span&gt;</span>
                      <span className="white-exp-text">
                        02/15/22 - 12/23/22{" "}
                      </span>
                      <span className="span">&lt;/span&gt;</span>
                      <br />
                    </div>
                    <span className="section">&lt;/section&gt;</span>
                    <br />
                  </section>
                </div>
              ))} */}

              {/* <ExperienceList /> */}

              <div className="experience-info-box">
                {experiences.length > 0 &&
                  experiences.map((data, i) => (
                    <div key={i} id={i}>
                      <div className="experience-info">
                        <div className="experience-wrap-open-tag">
                          &lt;
                          <span className="white-wrap-tag-text">
                            {data.tagName}
                          </span>
                          &gt;
                        </div>
                        <div className="tabcontent-sm">
                          <div style={{ marginBottom: ".5em" }}>
                            <span className="experience-name">
                              {data.companyName}
                            </span>
                            <span className="experience-country">
                              ,{data.country}
                              &nbsp;&#8212;&nbsp;
                            </span>
                            <span className="experience-role">
                              {data.role},
                            </span>
                            <div>
                              <b className="experience-date">
                                {data?.fromDate && formatDate(data?.fromDate)}
                                &nbsp;&#8212;&nbsp;
                                {data.toDate && formatDate(data?.toDate)}
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
                        <div className="experience-wrap-close-tag">
                          &lt;
                          <span className="white-wrap-tag-text">
                            /{data.tagName}
                          </span>
                          &gt;
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* experience info box ends */}
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
                &nbsp;Experience
              </div>
              <div
                className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}
              >
                <div className={`sidebar`}>
                  {experiences.length > 0 &&
                    experiences?.map((data, i) => (
                      <div key={i} style={{ cursor: "pointer" }}>
                        &lt;&gt; _{data.tagName} &lt;/&gt;
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

export default Experience;
