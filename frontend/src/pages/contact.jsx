import React from "react";
import "../styles/contact.css";
import {
  BsFillCaretDownFill,
  BsTelephoneFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { ImInstagram, ImFacebook2 } from "react-icons//im";
import { useState } from "react";
import { axios } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import CircleText from "../components/circleText";

const RightWingBar = ({
  tab,
  setTab,
  setSidebarTopOpen,
  sidebarTopOpen,
  toggleTopSideNav,
  toggleBottomSideNav,
  changeTab,
  sidebarBottomOpen,
  setSidebarBottomOpen,
}) => {
  return (
    <div>
      <div className="sidebar-title" onClick={()=>{
        toggleTopSideNav()
        sidebarBottomOpen && setSidebarBottomOpen(false);
        }}>
        {sidebarTopOpen ? (
          <BsFillCaretDownFill size={20} />
        ) : (
          <BsFillCaretRightFill size={20} />
        )}
        &nbsp;contacts
      </div>
      <div
        className={`sidebar-body-contact contact-top ${
          sidebarTopOpen ? "opened" : "closed"
        }`}
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
        </div>
      </div>
      {/* social media handle */}
      <div className="sidebar-sub-title" onClick={()=>{
        toggleBottomSideNav()
        sidebarTopOpen && setSidebarTopOpen(false);
        }}>
        {sidebarBottomOpen ? (
          <BsFillCaretDownFill size={20} />
        ) : (
          <BsFillCaretRightFill size={20} />
        )}
        &nbsp;find-me-also-in
      </div>

      <div
        className={`sidebar-body-contact contact-bottom ${
          sidebarBottomOpen ? "opened" : "closed"
        } `}
      >
        <div className="sidebar">
          <div className="social-media-contact">
            <div className="flex-align">
              <a
                href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                target="_blank"
                without
                rel="noreferrer"
              >
                <BsLinkedin size={17} color="#FFFFFF" />
                &nbsp;Linkedin
              </a>
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
              <a
                href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                target="_blank"
                without
                rel="noreferrer"
              >
                <BsTwitter size={17} />
                &nbsp;Twitter
              </a>
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
              <a
                href="https://wa.me/+2348142450182"
                target="_blank"
                without
                rel="noreferrer"
              >
                <RiWhatsappFill size={18} />
                &nbsp;Watsapp
              </a>
            </div>
          </div>

          <div className="social-media-contact">
            <div className="flex-align">
              <a
                href="https://github.com/yumustyology"
                target="_blank"
                without
                rel="noreferrer"
              >
                <BsGithub size={17} />
                &nbsp;Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Contact() {
  const repeat = [1, 2, 3];
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const pruneStates = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    setLoading(false);
  };
  const sendMail = () => {
    if (subject && email && message) {
      setLoading(true);
      axios
        .post("/contactMe", { message, email, subject })
        .then((response) => {
          console.log(response);
          pruneStates();
          showToast("message sent successfully", "msg_sent");
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false);
      showToast("Please fill all fields below", "correction");
    }
  };

  const showToast = function (text, id) {
    toast.dark(text, {
      containerId: "B",
      toastId: id,
    });
  };

  const [sidebarTopOpen, setSidebarTopOpen] = useState(  window.innerWidth <= 899 ? false : true);
  const [sidebarBottomOpen, setSidebarBottomOpen] = useState(  window.innerWidth <= 899 ? false : true);

  const toggleTopSideNav = () => {
    setSidebarTopOpen(!sidebarTopOpen);
  };

  const toggleBottomSideNav = () => {
    setSidebarBottomOpen(!sidebarBottomOpen);
  };

  return (
    <div>
      <div className="body">
        <div className="left-wing">
          <div className="left-wing-top">
            <div className="left-wing-top-inner"></div>
            <div>
              <div className="page-title">contacts</div>
            </div>
            {/* i put it here */}
            <div className="left-wing-top-inner md-drop-down">
                  <div>
                    <RightWingBar
                      // tab={tab}
                      // setTab={setTab}
                      setSidebarTopOpen={setSidebarTopOpen}
                      sidebarTopOpen={sidebarTopOpen}
                      toggleTopSideNav={toggleTopSideNav}
                      toggleBottomSideNav={toggleBottomSideNav}
                      // changeTab={changeTab}
                      sidebarBottomOpen={sidebarBottomOpen}
                      setSidebarBottomOpen={setSidebarBottomOpen}
                    />
                  </div>
                </div>
          </div>
          <div className="left-wing-body">
            <ToastContainer
              containerId={"B"}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              type="success"
            />
            <div className="max-width">
              <section className="contact-body">
                <div className="contact-info">
                  <div className="inputs-container">
                    <label>
                      <div className="label">_subject:</div>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="inputs-container">
                    <label>
                      <div className="label">_email:</div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="inputs-container">
                    <label>
                      <div className="label">_message:</div>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </label>
                  </div>

                  <div className="inputs-container flex">
                    <button className="submit-mail" onClick={sendMail}>
                      submit-message
                    </button>
                    &nbsp;&nbsp;
                    <div className="contact-loader">
                      <ClipLoader size={25} color="#696767" loading={loading} />
                    </div>
                  </div>
                </div>
              </section>
              <div className="rotating-text-box fixed">
                <CircleText
                  prevPage="/projects"
                  nextPage="/"
                  isPrevPage={true}
                  isNextPage={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right-wing">
          <div className="right-wing-top">
            <div className="right-wing-top-inner"></div>
            <div>
              <div className="sidebar-title" onClick={toggleTopSideNav}>
                {sidebarTopOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;contacts
              </div>
              <div
                className={`sidebar-body-contact contact-top ${
                  sidebarTopOpen ? "opened" : "closed"
                }`}
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
                </div>
              </div>
              {/* social media handle */}
              <div className="sidebar-sub-title" onClick={toggleBottomSideNav}>
                {sidebarBottomOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;find-me-also-in
              </div>

              <div
                className={`sidebar-body-contact contact-bottom ${
                  sidebarBottomOpen ? "opened" : "closed"
                } `}
              >
                <div className="sidebar">
                  <div className="social-media-contact">
                    <div className="flex-align">
                      <a
                        href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <BsLinkedin size={17} color="#FFFFFF" />
                        &nbsp;Linkedin
                      </a>
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
                      <a
                        href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <BsTwitter size={17} />
                        &nbsp;Twitter
                      </a>
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
                      <a
                        href="https://wa.me/+2348142450182"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <RiWhatsappFill size={18} />
                        &nbsp;Watsapp
                      </a>
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <div className="flex-align">
                      <a
                        href="https://github.com/yumustyology"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <BsGithub size={17} />
                        &nbsp;Github
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

export default Contact;
