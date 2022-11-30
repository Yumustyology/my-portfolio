import React from "react";
import "../styles/contact.css";
import {
  BsFillCaretDownFill,
  BsTelephoneFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { ImInstagram, ImFacebook2 } from "react-icons//im";

function Contact() {
  const repeat = [1, 2, 3];

  return (
    <div>
      <div className="body">
        <div className="left-wing">
          <div className="left-wing-top">
            <div className="left-wing-top-inner"></div>
            <div>
              <div className="page-title">contacts</div>
            </div>
          </div>
          <div className="left-wing-body">
            <div className="max-width">
              {/* {repeat.map((data) => ( */}
              <section className="contact-body">
                <div className="contact-info">
                  <div className="inputs-container">
                    <label>
                      <div className="label">_name:</div>
                      <input type="text" />
                    </label>
                  </div>

                  <div className="inputs-container">
                    <label>
                      <div className="label">_email:</div>
                      <input type="email" />
                    </label>
                  </div>

                  <div className="inputs-container">
                    <label>
                      <div className="label">_message:</div>
                      <textarea></textarea>
                    </label>
                  </div>

                  <div className="inputs-container">
                    <button className="submit-mail">submit-message</button>
                  </div>
                </div>
              </section>
              {/* ))} */}
            </div>
          </div>
        </div>
        <div className="right-wing">
          <div className="right-wing-top">
            <div className="right-wing-top-inner"></div>
            <div>
              <div className="sidebar-title">
                <BsFillCaretDownFill size={20} />
                &nbsp;contacts
              </div>
              <div className="sidebar-body-contact">
                <div className="sidebar">
                  <div className="social-media-contact">
                    <div className="flex-align">
                      <BsTelephoneFill size={15} />
                      &nbsp;+234 814 245 0182
                    </div>
                  </div>
                  <div className="social-media-contact">
                    <div className="flex-align">
                      <MdMail size={17} />
                      &nbsp;yumustyology@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              {/* social media handle */}
              <div className="sidebar-sub-title">
                <BsFillCaretDownFill size={20} />
                &nbsp;find-me-also-in
              </div>
              <div className="sidebar-body-contact">
                <div className="sidebar">
                  {/* {repeat.map((data) => ( */}
                  <div className="social-media-contact">
                    <div className="flex-align">
                      <BsLinkedin size={17} color="#FFFFFF" />
                      &nbsp;Linkedin
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <div className="flex-align">
                      <ImInstagram size={17} />
                      &nbsp;Instagram
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <div className="flex-align">
                      <BsTwitter size={17} />
                      &nbsp;Twitter
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <div className="flex-align">
                      <ImFacebook2 size={17} />
                      &nbsp;Facebook
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <div className="flex-align">
                      <BsGithub size={17} />
                      &nbsp;Github
                    </div>
                  </div>

                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
