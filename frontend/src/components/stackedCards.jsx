import React, { useEffect, useRef } from "react";
import "../styles/stackedCards.css";
import { featuredProject } from "../data";
import "../styles/projects.css";
import { BsGithub } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";

function StackedCards() {
  useEffect(()=>{
    // alert(window.innerHeight);
    // console.log(window.innerHeight)
    console.log("window.innerHeight")
    // alert(window.innerWidth);  
  },[])
  return (
    <div>
      <div className="container">
        <div className="card-stack">
          {/* <span className="buttons prev">
            &lt;
          </span> */}
          <ul className="card-list">
            {featuredProject.map((data) => (
              <li className="card">
                <div className="feature-project-container">
                  <span className="feature-project-name">
                    Project 1 // <span>_{data.projectName}</span>
                  </span>
                  <div className="swipe-card-img">
                    <img src={data.image} className="swipe-img" />
                  </div>
                  {/* <div className="project-links" style={{height:"40px"}}>
                      <div className="live-preview">
                        <div>
                          <a href={data.livePreview} target="_blank" without rel="noreferrer">
                            View Project here
                          </a>
                        </div>
                        <div>
                          <MdOutlineNavigateNext
                            className="next-btn"
                            color="#fff"
                            size={25}
                          />
                        </div>
                      </div>
                      <div className="git-preview" target="_blank" without rel="noreferrer">
                        <a href={data.githubLink}>
                          <BsGithub style={{ cursor: "pointer" }} size={20} />
                        </a>
                      </div>
                    </div> */}
                </div>
              </li>
            ))}
          </ul>
          {/* <span className="buttons next" href="#">
            &gt;
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default StackedCards;
