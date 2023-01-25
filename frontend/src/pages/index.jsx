import React from "react";
import "../styles/index.css";
import StackedCards from "../components/stackedCards";
import "../index.css";
import Marquee from "../components/marquee";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import CircleText from "../components/circleText";

function Index() {
  return (
    <div>
      <Marquee rtl={false} />
      <div className="max-width">
        {/* marquee top */}
        <div></div>
        {/* body */}
        <div className="container">
          <div className="app-left">
            <div className="app-intro">
              <div className="hello-txt">&lt;p&gt;Hello, I am&lt;/p&gt;</div>
              <div className="name-txt">Yusuf Mustahan</div>
              <div className="more-info">
                &lt;h2&gt;&nbsp;
                <span className="more-info-txt">
                  I build softwares to solve problem
                </span>
                &nbsp;&lt;/h2&gt;
                {/* <div>
                  <Typed
                    strings={[
                      "I'm a Full Stack Developer",
                      "I Love Software Development",
                      "I Love All My Subscribers",
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                  />
                </div> */}
              </div>
              <Link to="/contact">
                <button className="contact-btn">Contact me</button>
              </Link>
            </div>
          </div>
          <div className="app-right">
            <StackedCards />
          </div>
        </div>
        {/* marquee bottom */}
        <div></div>
      </div>
      <div className="bottom-marquee">
        <Marquee rtl={true} />
      </div>
      <div className="rotating-text-box fixed" >
        <CircleText prevPage='' nextPage='/about' isPrevPage={false} isNextPage={true}/>
      </div>
    </div>
  );
}

export default Index;
