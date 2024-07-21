import { cn } from "@/lib/utils";
import { sidebarTitleClassNames } from "@/lib/utils/generalClassNames";
import Link from "next/link";
import React, { Dispatch } from "react";
import {
  BsFillCaretDownFill,
  BsFillCaretRightFill,
  BsTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const ContactRightWingSidebar = ({
  setSidebarTopOpen,
  sidebarTopOpen,
  toggleTopSideNav,
  toggleBottomSideNav,
  screenRender = "large",
  sidebarBottomOpen,
  setSidebarBottomOpen,
}: {
  setSidebarTopOpen: Dispatch<React.SetStateAction<boolean>>;
  screenRender?: "large" | "small";
  toggleBottomSideNav: () => void;
  setSidebarBottomOpen: Dispatch<React.SetStateAction<boolean>>;
  toggleTopSideNav: () => void;
  sidebarTopOpen: boolean;
  sidebarBottomOpen: boolean;
}) => {
  const sidebarSubTitleClassNames =
    "sidebar-sub-title transition-[1s] mt-[.5em] border-b border-t border-t-[#ffffff33] border-b-[#ffffff33] border-b border-b-[#ffffff33]";

  return (
    <>
      {screenRender == "small" ? (
        <div className="left-wing-top-inner md-drop-down xlgTablet:hidden">
          <div
            className={cn("sidebar-title", sidebarTitleClassNames)}
            onClick={() => {
              toggleTopSideNav();
              sidebarBottomOpen && setSidebarBottomOpen(false);
            }}
          >
            {sidebarTopOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;contacts
          </div>
          <div
            className={`sidebar-body-contact contact-top hidden-scrollbar ${
              sidebarTopOpen ? "opened" : "closed"
            }`}
          >
            <div
              className={`sidebar text-sm text-white flex flex-col py-.5 pl-[7em] my-[.5em] font-normal tracking-[.08em]`}
            >
              <div className="social-media-contact h-[35px]">
                <Link
                  rel="noreferrer"
                  href="tel://+234 814 245 0182"
                  target="_blank"
                >
                  <div className="flex-align flex items-center">
                    <BsTelephoneFill size={15} />
                    &nbsp;+234 814 245 0182
                  </div>
                </Link>
              </div>
              <div className="social-media-contact h-[35px]">
                <Link
                  rel="noreferrer"
                  href="mailto://yumustyology@gmail.com"
                  target="_blank"
                >
                  <div className="flex-align flex items-center">
                    <MdMail size={17} />
                    &nbsp;yumustyology@gmail.com
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* social media handle */}
          <div
            className={cn(
              sidebarSubTitleClassNames,
              sidebarTitleClassNames
              // 'mt-0',
              // {
              //   'border-t-0': !sidebarOpen,
              // }
            )}
            onClick={() => {
              toggleBottomSideNav();
              sidebarTopOpen && setSidebarTopOpen(false);
            }}
          >
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
            <div
              className={`sidebar text-sm text-white flex flex-col py-.5 pl-[8em] my-[.5em] font-normal tracking-[.08em]`}
            >
              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <Link
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                    target="_blank"
                  >
                    <BsLinkedin size={17} color="#FFFFFF" />
                    &nbsp;Linkedin
                  </Link>
                </div>
              </div>

              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <ImInstagram size={17} />
                  &nbsp;Instagram
                </div>
              </div>

              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <Link
                    rel="noreferrer"
                    href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                    target="_blank"
                  >
                    <BsTwitter size={17} />
                    &nbsp;Twitter
                  </Link>
                </div>
              </div>

              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <ImFacebook2 size={17} />
                  &nbsp;Facebook
                </div>
              </div>

              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <Link
                    rel="noreferrer"
                    href="https://wa.me/+2348142450182"
                    target="_blank"
                  >
                    <RiWhatsappFill size={18} />
                    &nbsp;Watsapp
                  </Link>
                </div>
              </div>

              <div className="social-media-contact h-[35px]">
                <div className="flex-align flex items-center">
                  <Link
                    rel="noreferrer"
                    href="https://github.com/yumustyology"
                    target="_blank"
                  >
                    <BsGithub size={17} />
                    &nbsp;Github
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      ) : null}

      {screenRender == "large" ? (
        <div className="right-wing w-1/4 hidden xlgTablet:block">
          <div className="right-wing-top">
            <div>
              <div
                className={cn("sidebar-title", sidebarTitleClassNames)}
                onClick={toggleTopSideNav}
              >
                {sidebarTopOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;contacts
              </div>
              <div
                className={`sidebar-body-contact contact-top hidden-scrollbar ${
                  sidebarTopOpen ? "opened" : "closed"
                }`}
              >
                <div
                  className={`sidebar text-sm text-white flex flex-col py-5 pl-[7em] my-[.5em] font-normal tracking-[.08em] gap-4`}
                >
                  <div className="social-media-contact">
                    <Link
                      href="tel://+234 814 245 0182"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <BsTelephoneFill size={15} />
                        &nbsp;+234 814 245 0182
                      </div>
                    </Link>
                  </div>
                  <div className="social-media-contact">
                    <Link
                      href="mailto://yumustyology@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <MdMail size={17} />
                        &nbsp;yumustyology@gmail.com
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* social media handle */}
              <div
                className={cn(
                  sidebarSubTitleClassNames,
                  sidebarTitleClassNames
                  // 'mt-0',
                  // {
                  //   'border-t-0': !sidebarOpen,
                  // }
                )}
                onClick={toggleBottomSideNav}
              >
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
                <div
                  className={`sidebar text-sm text-white flex flex-col py-5 pl-[7em]  font-normal tracking-[.08em] gap-4`}
                >
                  <div className="social-media-contact ">
                    <Link
                      href="https://www.linkedin.com/in/yusuf-mustahan-086006221"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <BsLinkedin size={17} color="#FFFFFF" />
                        &nbsp;Linkedin
                      </div>
                    </Link>
                  </div>

                  <div className="social-media-contact ">
                    <div className="flex-align flex items-center">
                      <ImInstagram size={17} />
                      &nbsp;Instagram
                    </div>
                  </div>

                  <div className="social-media-contact ">
                    <Link
                      href="ttps://twitter.com/Yumustyung_DEV?t=V2nQRg0gbi2frQyvlOQA2g&s=09"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <BsTwitter size={17} />
                        &nbsp;Twitter
                      </div>
                    </Link>
                  </div>

                  <div className="social-media-contact ">
                    <div className="flex-align flex items-center">
                      <ImFacebook2 size={17} />
                      &nbsp;Facebook
                    </div>
                  </div>

                  <div className="social-media-contact">
                    <Link
                      href="https://wa.me/+2348142450182"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <RiWhatsappFill size={18} />
                        &nbsp;Watsapp
                      </div>
                    </Link>
                  </div>

                  <div className="social-media-contact h-[35px]">
                    <Link
                      href="https://github.com/yumustyology"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-align flex items-center">
                        <BsGithub size={17} />
                        &nbsp;Github
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ContactRightWingSidebar;
