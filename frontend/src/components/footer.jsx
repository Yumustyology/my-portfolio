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
            <a href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09" target="_blank" without rel="noreferrer">
              <BsTwitter size={25} color="#FFFFFF" />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/yusuf-mustahan-086006221" target="_blank" without rel="noreferrer">
              <BsLinkedin size={25} color="#FFFFFF" />
            </a>
          </div>
        </div>
        <div className="right-footer">
          <a href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09" target="_blank" without rel="noreferrer">
            <div className="git-link">@yumustyology</div>
          </a>
          <a href="https://github.com/yumustyology" target="_blank" without rel="noreferrer"> 
            &nbsp;
            <BsGithub style={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
