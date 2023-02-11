import React, { useEffect } from "react";
import "../styles/index.css";
import StackedCards from "../components/stackedCards";
import "../index.css";
import Marquee from "../components/marquee";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import CircleText from "../components/circleText";
import alanBtn from '@alan-ai/alan-sdk-web';


function Index() {


  // useEffect(() => {
  //   alanBtn({
  //       key: 'a66bdda9b1d4c7f4f387d447a484d9602e956eca572e1d8b807a3e2338fdd0dc/stage',
  //       bottom: '50px',
  //       left: '50%',
  //       right: '50%',
  //       zIndex: 10,
  //       onCommand: (commandData) => {
  //         if (commandData.command === 'go:back') {
  //           // Call the client code that will react to the received command
  //         }
  //       }
  //   });
  // }, []);


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
                  I build softwares to solve problems
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
