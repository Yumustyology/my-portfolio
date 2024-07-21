"use client";
import React, { useEffect } from "react";
import "../style.css";
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
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { useState } from "react";
// import { axios } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
// import CircleText from "../components/circleText";
import Link from "next/link";
import ContactRightWingSidebar from "@/ui/molecules/contact/ContactRightWingSidebar";
import { pageTitleClassName } from "@/lib/utils/generalClassNames";
import { cn } from "@/lib/utils";
import Container from "@/ui/atoms/Container";
import { doSendMail } from "@/lib/actions/doSendMail";

function page() {
  const repeat = [1, 2, 3];
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sidebarSubTitleClassNames =
    "sidebar-sub-title transition-[1s] mt-[.5em] border-b border-t border-t-[#ffffff33] border-b-[#ffffff33] border-b border-b-[#ffffff33]";

  const pruneStates = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    setLoading(false);
  };
  const sendMail = async () => {
    if (subject && email && message) {
      setLoading(true);
      const resp = await doSendMail({ subject, email, message });
      showToast("message sent successfully", "msg_sent");
      setLoading(false);
    } else {
      showToast("Please fill all fields below", "correction");
    }
  };

  const showToast = function (text: string, id: string) {
    toast.dark(text, {
      containerId: "B",
      toastId: id,
    });
  };

  const [sidebarTopOpen, setSidebarTopOpen] = useState(
  false
  );
  const [sidebarBottomOpen, setSidebarBottomOpen] = useState(
  false
  );

  useEffect(()=>{
    typeof window !== undefined && setSidebarTopOpen(window.innerWidth <= 899 ? false : true)
    typeof window !== undefined && setSidebarBottomOpen(window.innerWidth <= 899 ? false : true)
  },[])

  const toggleTopSideNav = () => {
    setSidebarTopOpen(!sidebarTopOpen);
  };

  const toggleBottomSideNav = () => {
    setSidebarBottomOpen(!sidebarBottomOpen);
  };
  const inputClassName =
    "w-[520px] h-[55px] bg-[#252526] rounded-[4.3px] border-non-e outline-none pl-[1em] text-white focus:border focus:border-white";
  const labelClassName =
    "font-normal tracking-[.08em] text-base text-white mb-[.5em]";
  return (
    <Container bordered>
      <div
        className="body flex"
        style={{
          fontFamily: "Consolas",
        }}
      >
        <div className="left-wing w-3/4 border-r border-r-[#ffffff33] h-screen">
          <div className="left-wing-top border-b border-b-[#ffffff33] h-[50px] xlgTablet:border-b-none">
            <div className={cn("page-title", pageTitleClassName)}>contacts</div>
            {/* i put it here */}
            <ContactRightWingSidebar
              screenRender="small"
              sidebarTopOpen={sidebarTopOpen}
              setSidebarTopOpen={setSidebarTopOpen}
              toggleTopSideNav={toggleTopSideNav}
              toggleBottomSideNav={toggleBottomSideNav}
              sidebarBottomOpen={sidebarBottomOpen}
              setSidebarBottomOpen={setSidebarBottomOpen}
            />
          </div>
          <div className="left-wing-body">
            {/* <ToastContainer
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
            /> */}
            <div
              className=""
              style={{
                fontFamily: "Consolas",
              }}
            >
              <section className="contact-body ml-[4%] text-left w-[736px] h-[70dvh] xlgTablet:h-[8dvh]">
                <div className="contact-info mt-[3em]">
                  <div className="inputs-container mb-[1em]">
                    <label>
                      <div className={cn("label", labelClassName)}>
                        _subject:
                      </div>
                      <input
                        className={cn(inputClassName)}
                        type="text"
                        value={subject}
                        disabled={loading}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="inputs-container mb-[1em]">
                    <label>
                      <div className={cn("label", labelClassName)}>_email:</div>
                      <input
                        className={cn(inputClassName)}
                        type="email"
                        value={email}
                        disabled={loading}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="inputs-container mb-[1em]">
                    <label>
                      <div className={cn("label", labelClassName)}>
                        _message:
                      </div>
                      <textarea
                        className="w-[520px] min-h-[220px] pl-[1em] pt-[1em] text-whit bg-[#252526] rounded-[4.4px]"
                        disabled={loading}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </label>
                  </div>

                  <div className={`inputs-container mb-[1em] flex`}>
                    <button
                      className={cn(
                        "submit-mail flex py-4 px-5 gap-3 bg-[#2e2e2e] min-h-[44px] rounded-md w-fit font-normal text-2xl leading-[74.37%] items-start tracking-wide laptop:tracking-wider text-white border-none outline-none mt-[1em] cursor-pointer",
                        { "opacity-30": loading }
                      )}
                      onClick={sendMail}
                      disabled={loading}
                    >
                      submit-message
                    </button>
                    &nbsp;&nbsp;
                    <div className="contact-loader flex mt-[1em] leading-[74.37%] cursor-pointer">
                      <ClipLoader size={25} color="#696767" loading={loading} />
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="rotating-text-box fixed">
                <CircleText
                  prevPage="/projects"
                  nextPage="/"
                  isPrevPage={true}
                  isNextPage={false}
                />
              </div> */}
            </div>
          </div>
        </div>
        <ContactRightWingSidebar
          setSidebarTopOpen={setSidebarTopOpen}
          sidebarTopOpen={sidebarTopOpen}
          toggleTopSideNav={toggleTopSideNav}
          toggleBottomSideNav={toggleBottomSideNav}
          sidebarBottomOpen={sidebarBottomOpen}
          setSidebarBottomOpen={setSidebarBottomOpen}
        />
      </div>
    </Container>
  );
}

export default page;
