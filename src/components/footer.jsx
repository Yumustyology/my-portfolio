import React from "react";
import "../styles/footer.css";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="left-footer">
          <div className="find-me">find me in:</div>
          <div className="icon">
            <BsTwitter size={25} color="#FFFFFF"/>
          </div>
          <div className="icon">
            <BsLinkedin size={25} color="#FFFFFF" />
          </div>
        </div>
        <div className="right-footer">
          <div className="git-link">@yumustyology</div>
          {/* <div className="icon"> */}
          &nbsp;
            <BsGithub style={{cursor:"pointer"}}/>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
