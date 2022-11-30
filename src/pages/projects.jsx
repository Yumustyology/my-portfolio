import React, {useState} from "react";
import "../styles/projects.css";
import {
  BsFillCaretDownFill,
  BsTelephoneFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { languageFilterList } from "../assets/js/languageFlter";


import projectimg from "../imgs/project-img.png";
function Projects() {
  const [repeat,setRepeat] = useState([1,2,3,4,5,6,7,8,9,0])
  const [languages,setLanguages] = useState([])

  const setLanguage = (lang)=>{
  //   if(languages.length === 3){
      // setLanguages([])
      // setLanguages([...languages, lang])
    // }else{
      if(languages.includes(lang)){
      setLanguages(languages.filter(e => e !== lang))
      }else{
      setLanguages([...languages, lang])

      // }
    }
  }
  // const removeLang = ()=>{
    
  // }
  return (
    <div>
      <div className="body">
        <div className="left-wing">
          <div className="left-wing-top">
            <div className="left-wing-top-inner"></div>
            <div className="page-title-container">
              <div className="projects-page-title">{languages.length != 0 ? languages.join("; ") : "all"}</div>
              {/* <div className="projec/ts-page-title">{languages.length != 0 ? languages.map(lang => <div>{lang};</div>) : "all"}</div> */}
            </div>
          </div>
          <div className="left-wing-body">
            <div className="max-width">
             
              <section className="projects-body">
                 {repeat.map((data,i) => (
                <div className="projects-info" key={i}>
                  <div className="project-name">
                    <span>Project {i + 1} //</span> _color shades generator
                  </div>
                  <div className="project-card">
                    <div className="project-image">
                      <img
                        src={projectimg}
                        alt="project-img"
                        className="project-img"
                      />
                    </div>
                    <div className="project-info">
                      After Mastering React Js, I Decided To Solve A Problem
                      With Colors Using React Js And A Third Party API As
                      Programmers Find's It Dificult To Get Lighter And Deeper
                      Shades Of Their Production Colors
                    </div>
                    <div className="project-links">
                      <div className="live-preview">
                        <div>
                        View Project here
                        </div>
                        <div>
                          {/* <GrNext className="next-btn" color="#fff"/> */}
                          <MdOutlineNavigateNext className="next-btn" color="#fff" size={25}/>
                        </div>
                      </div>
                      <div className="git-preview">
                        <BsGithub style={{ cursor: "pointer"}}  size={20}/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </section>
            </div>
          </div>
        </div>
        <div className="right-wing">
          <div className="right-wing-top">
            <div className="right-wing-top-inner"></div>
            <div>
              <div className="sidebar-title">
                <BsFillCaretDownFill size={20} />
                &nbsp;projects
              </div>
              <div className="sidebar-body-project">
                <div className="sidebar">
                  {languageFilterList.map((data,i) => (
                    <div className="social-media-project" key={i}>
                      <div className="flex-align">
                        <label className="label">
                          <input type="checkbox" onChange={()=>{
                            setLanguage(data.name)
                          }}/>
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
