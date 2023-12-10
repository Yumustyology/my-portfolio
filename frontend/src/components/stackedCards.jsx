import React from "react";
import "../styles/stackedCards.css";
import "../styles/projects.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { yungContext } from "../context/context";
import { useContext } from "react";

function StackedCards() {
  const { projects } = useContext(yungContext);
 

  return (
    <div>
      <div className="container">
        <div className="card-stack">
          {/* <span className="buttons prev">
            &lt;
          </span> */}
          <ul className="card-list">
            {projects
              .filter((e) => e.featuredApp === true)
              .map((data, i) => (
                <li className="card" key={i}>
                  <div className="feature-project-container">
                    <span className="feature-project-name">
                      <Link to="/">
                        {/* featured_project // <span>_{data.projectName}</span> */}
                      </Link>
                      {/* Project 1 //<span>_{data.projectName.split(" ").join("_")}</span> */}
                      <span>
                        <MdOutlineNavigateNext
                          className="more-arrow"
                          style={{ marginLeft: "0em", display: "inline" }}
                          size={20}
                        />
                      </span>
                    </span>
                    <div className="swipe-card-img">
                      <LazyLoadImage
                        style={{ position: "relative" }}
                        alt="project-img"
                        effect="blur"
                        src={data.image}
                        className="swipe-img"
                      />
                      {/* <img src={data.image} className="swipe-img" /> */}
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
