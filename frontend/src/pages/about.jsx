import React, { useEffect, useState, useRef, useContext } from "react";
import "../styles/experience.css";
import "../styles/about.css";
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
import { ImInstagram, ImFacebook2 } from "react-icons//im";
import { MdMail, MdOutlineNavigateNext } from "react-icons/md";
import { HiFolder } from "react-icons/hi";
import Interest from "../components/Interest";
import Education from "../components/education";
import CircleText from "../components/circleText";
import { yungContext } from "../context/context";


const RightWingBar = ({
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
}) => {
  return (
    <div>
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
        className={`sidebar-body-about about-top ${
          sidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="sidebar">
          <div className="social-media-about" onClick={() => changeTab("bio")}>
            <div className="flex-align">
              <MdOutlineNavigateNext color="white" size={20} />
              &nbsp;
              <HiFolder color="#FF605C" size={25} />
              &nbsp;bio
            </div>
          </div>

          <div
            className="social-media-about"
            onClick={() => changeTab("interest")}
          >
            <div className="flex-align">
              <MdOutlineNavigateNext color="white" size={20} />
              &nbsp;
              <HiFolder color="#2C957E" size={25} />
              &nbsp;interest
            </div>
          </div>

          <div
            className="social-media-about"
            onClick={() => changeTab("education")}
          >
            <div className="flex-align">
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
        className="sidebar-sub-title"
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
        className={`sidebar-body-about about-top ${
          resumeSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="sidebar">
          <div className="social-media-about">
            <a
              href="https://drive.google.com/drive/folders/1ihpe6IfMVGt3VmLKZi-1_UfLDv765RkY?usp=sharing"
              rel="noreferrer"
              target="_blank"
              download
            >
              <div className="flex-align">
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
        className="sidebar-sub-title"
        style={{ marginTop: "0em" }}
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
        <div className="sidebar">
          <div className="social-media-contact">
            <a
              href="tel://+234 814 245 0182"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <BsTelephoneFill size={15} />
                &nbsp;+234 814 245 0182
              </div>
            </a>
          </div>
          <div className="social-media-contact">
            <a
              href="mailto://yumustyology@gmail.com"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <MdMail size={17} />
                &nbsp;yumustyology@gmail.com
              </div>
            </a>
          </div>

          <div className="social-media-contact">
            <a
              href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <BsLinkedin size={17} color="#FFFFFF" />
                &nbsp;Linkedin
              </div>
            </a>
          </div>

          <div className="social-media-contact">
            <div className="flex-align">
              <ImInstagram size={17} />
              &nbsp;Instagram
            </div>
          </div>

          <div className="social-media-contact">
            <a
              href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <BsTwitter size={17} />
                &nbsp;Twitter
              </div>
            </a>
          </div>

          <div className="social-media-contact">
            <div className="flex-align">
              <ImFacebook2 size={17} />
              &nbsp;Facebook
            </div>
          </div>

          <div className="social-media-contact">
            <a
              href="https://wa.me/+2348142450182"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <RiWhatsappFill size={18} />
                &nbsp;Watsapp
              </div>
            </a>
          </div>

          <div className="social-media-contact">
            <a
              href="https://github.com/yumustyology"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="flex-align">
                <BsGithub size={17} />
                &nbsp;Github
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function About() {
  const { about } = useContext(yungContext);

  let getAboutTab = window.localStorage.getItem("aboutTab");
  const [sidebarBottomOpen, setSidebarBottomOpen] = useState(false);
  const [lineNumber, setLineNumber] = useState([]);
  const [tab, setTab] = useState("bio");
  let [calcLines, setCalcLines] = useState();
  let [resumeSidebarOpen, setResumeSidebarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth <= 899 ? false : true
  );

  let lineNum = [];
  let element = useRef(null);

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

  const doings = () => {
    var divHeight = element.current.offsetHeight;
    var lineHeight = parseInt(element.current.style.lineHeight);
    let lines = divHeight / lineHeight;
    setCalcLines(lines);
    for (let i = 0; i < lines; i++) {
      if (!lineNum.includes(lines - 1)) {
        lineNum.push(i);
        // console.log("lineNum", lineNum);
        setLineNumber(lineNum);
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (about && !lineNum.includes(calcLines - 1)) {
      setTimeout(() => {
        doings();
      }, 200);
    } else {
      return;
    }
  }, [about]);

  // useEffect(() => {
  //   setSidebarOpen(window.innerWidth <= 899 ? false : true);
  //   console.log('yoyoyo');
  // }, [window.innerWidth]);

  const changeTab = (tab) => {
    setTab(tab);
    window.localStorage.setItem("aboutTab", tab);
  };

  
  return (
    <div>
      <div>
        <div className="body">
          <div className="left-wing">
            <div className="left-wing-top">
              <div className="left-wing-top-inner">
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
                <div className="left-wing-top-inner md-drop-down">
                  <div>
                    <RightWingBar
                      tab={tab}
                      setTab={setTab}
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
                <div className="page-title">
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
            <div className="left-wing-body">
              <div className="max-width">
                <section className="about-body">
                  {tab === "bio" ? (
                    about && (
                      <div id="form">
                        <div id="number">
                          {lineNumber.length > 0 &&
                            lineNumber.map((num, index) => (
                              <span key={index}>{num + 1} *</span>
                            ))}
                        </div>
                        <div
                          id="text"
                          ref={element}
                          style={{ width: "80%", lineHeight: "30px" }}
                        >
                          <span>/**</span>
                          <span>
                            <b onClick={() => console.log(lineNum)}>
                              About me (bio)
                            </b>
                          </span>
                          {about?.info}
                          {/* I am a Fullstack Developer and enjoy creating things
                          that solve peoples problem using my coding
                          "Ninjustsu😜"(skills). My interest in web development
                          started back in the year 2016 when I decided to learn
                          programming as it sounded fun😂, trust me I was going
                          to learn the advanced programming languages🙄, until I
                          discovered that HTML & CSS with an "Hello World! 😏"
                          startup output was the basics knowledge I needed to
                          get into the web programming world. 🚀Fast-forward to
                          today, I have had the privilege of mentoring over 20
                          junior Frontend Developers and 5 Backend programmers
                          at an IT institute, as a start-up I teamed up with a
                          friend of mine who does UIUX in other to move forward
                          together in the tech industry. My main focus is
                          building accessible, inclusive products and digital
                          exceptional experiences to solve peoples problem */}
                          <br />
                          <span>*/</span>
                        </div>
                      </div>
                    )
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
              {/* <div className=""> */}
              <div className="rotating-text-box fixed">
                <CircleText
                  prevPage="/"
                  nextPage="/experience"
                  isPrevPage={true}
                  isNextPage={true}
                />
              </div>
              {/* </div> */}
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
                  &nbsp;personal-information
                </div>
                <div
                  className={`sidebar-body-about about-top ${
                    sidebarOpen ? "opened" : "closed"
                  }`}
                >
                  <div className="sidebar">
                    <div
                      className="social-media-about"
                      onClick={() => changeTab("bio")}
                    >
                      <div className="flex-align">
                        <MdOutlineNavigateNext color="white" size={20} />
                        &nbsp;
                        <HiFolder color="#FF605C" size={25} />
                        &nbsp;bio
                      </div>
                    </div>

                    <div
                      className="social-media-about"
                      onClick={() => changeTab("interest")}
                    >
                      <div className="flex-align">
                        <MdOutlineNavigateNext color="white" size={20} />
                        &nbsp;
                        <HiFolder color="#2C957E" size={25} />
                        &nbsp;interest
                      </div>
                    </div>

                    <div
                      className="social-media-about"
                      onClick={() => changeTab("education")}
                    >
                      <div className="flex-align">
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
                  className="sidebar-sub-title"
                  onClick={toggleResumeSideNav}
                >
                  {resumeSidebarOpen ? (
                    <BsFillCaretDownFill size={20} />
                  ) : (
                    <BsFillCaretRightFill size={20} />
                  )}
                  &nbsp;resume
                </div>
                <div
                  className={`sidebar-body-about about-top ${
                    resumeSidebarOpen ? "opened" : "closed"
                  }`}
                >
                  <div className="sidebar">
                    <div className="social-media-about">
                      <a
                        href="https://drive.google.com/drive/folders/1ihpe6IfMVGt3VmLKZi-1_UfLDv765RkY?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        download
                      >
                        <div className="flex-align">
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
                  className="sidebar-sub-title"
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
                  className={`sidebar-body-contact about-bottom ${
                    sidebarBottomOpen ? "opened opened-about" : "closed"
                  } `}
                  style={{ height: sidebarOpen ? "20vh" : "30vh" }}
                >
                  <div className="sidebar">
                    <div className="social-media-contact">
                      <a
                        href="tel://+234 814 245 0182"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <BsTelephoneFill size={15} />
                          &nbsp;+234 814 245 0182
                        </div>
                      </a>
                    </div>
                    <div className="social-media-contact">
                      <a
                        href="mailto://yumustyology@gmail.com"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <MdMail size={17} />
                          &nbsp;yumustyology@gmail.com
                        </div>
                      </a>
                    </div>

                    <div className="social-media-contact">
                      <a
                        href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <BsLinkedin size={17} color="#FFFFFF" />
                          &nbsp;Linkedin
                        </div>
                      </a>
                    </div>

                    <div className="social-media-contact">
                      <div className="flex-align">
                        <ImInstagram size={17} />
                        &nbsp;Instagram
                      </div>
                    </div>

                    <div className="social-media-contact">
                      <a
                        href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <BsTwitter size={17} />
                          &nbsp;Twitter
                        </div>
                      </a>
                    </div>

                    <div className="social-media-contact">
                      <div className="flex-align">
                        <ImFacebook2 size={17} />
                        &nbsp;Facebook
                      </div>
                    </div>

                    <div className="social-media-contact">
                      <a
                        href="https://wa.me/+2348142450182"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <RiWhatsappFill size={18} />
                          &nbsp;Watsapp
                        </div>
                      </a>
                    </div>

                    <div className="social-media-contact">
                      <a
                        href="https://github.com/yumustyology"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <div className="flex-align">
                          <BsGithub size={17} />
                          &nbsp;Github
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;



// return (code = `I am a Fullstack Developer and enjoy creating things that solve peoples problem using my coding "Ninjustsu😜" (skills). \nMy interest in web development started back in the year 2016 when I decided to learn programming as it sounded fun😂,\ntrust me I was going to learn the advanced programming languages🙄,\nuntil I discovered that HTML & CSS with an "Hello World! 😏" startup output was the basics knowledge\nI needed to get into the web programming world. 🚀Fast-forward to today,\nI have had the privilege of mentoring over 20 junior Frontend Developers and 5 Backend programmers at an IT institute,\nas a start-up I teamed up with a friend of mine who does UIUX in other to move forward together in the tech industry.\nMy main focus is building accessible, inclusive products and digital exceptional experiences to solve peoples problem.

// <div key={i}>
// <section className="experience-info">
//   <span className="section">&lt;section&gt;</span>
//   <br />
//   <div className="tabcontent">
//     <span className="span">&lt;h1&gt;</span>
//     <span className="white-exp-text">company name ${info}</span>
//     <span className="span">&lt;/h1&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <div className="tabcontent-sm">
//       <span className="white-exp-text">
//       ${info}
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
//         aliquam, purus sit amet luctus venenatis, lectus magna
//         fringilla urna, porttitor
//       </span>
//     </div>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <span className="white-exp-text">Fullstack Developer</span>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <span className="white-exp-text">02/15/22 - 12/23/22 </span>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//   </div>
//   <span className="section">&lt;/section&gt;</span>
//   <br />
// </section>
// </div>
//   `;
