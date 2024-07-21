import { cn } from "@/lib/utils";
import { sidebarTitleClassNames } from "@/lib/utils/generalClassNames";
import Link from "next/link";
import React from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

const EperienceRightWingSideBar = ({
  sidebarOpen,
  toggleSideNav,
  experiences,
  screenRender = "large",
}: {
  sidebarOpen: boolean;
  toggleSideNav: () => void;
  screenRender?: "small" | "large";
  experiences: {
    tagName: string;
    companyName: string;
    country: string;
    role: string;
    fromDate: Date;
    toDate: Date;
    tasks: string;
  }[];
}) => {
  return (
    <React.Fragment>
      {screenRender == "small" ? (
        <div className="left-wing-top-inner md-drop-down border-b border-b-[#ffffff33] h-[50px] xlgTablet:hidden">
          <div
            className={cn("sidebar-title", sidebarTitleClassNames)}
            onClick={toggleSideNav}
          >
            {sidebarOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;Experiences 1
          </div>
          <div
            className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}
            style={{ height: experiences.length === 0 ? 0 : "auto" }}
          >
            <div
              className={`sidebar text-sm text-white flex flex-col py-.5 pl-[8em] my-[.5em] font-normal tracking-[.08em]`}
            >
              {experiences.length > 0 &&
                experiences?.map((data, i) => (
                  <div key={i} style={{ cursor: "pointer" }}>
                    &lt;&gt; _{data.tagName} &lt;/&gt;
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}

      {screenRender == "large" ? (
        <div className="right-wing overflow-y-auto h-full w-3/12 hidden lgDesktop:block">
          <div className="right-wing-top">
            <div>
              <div
                className={cn("sidebar-title", sidebarTitleClassNames)}
                onClick={toggleSideNav}
              >
                {sidebarOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;Experiences
              </div>
              <div
                className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}
              >
                <div
                  className={`sidebar text-sm text-white flex flex-col py-5 gap-5 pl-[7em] my-[.5em] font-normal tracking-[.08em]`}
                >
                  {experiences.length > 0 &&
                    experiences?.map((data, i) => (
                      <div
                        // href={`/experience/#${i}`}
                        key={i}
                        style={{ cursor: "pointer" }}
                      >
                        &lt;&gt; _{data.tagName} &lt;/&gt;
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default EperienceRightWingSideBar;
