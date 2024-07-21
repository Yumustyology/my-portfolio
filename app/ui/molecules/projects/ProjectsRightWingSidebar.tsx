import { cn } from "@/lib/utils";
import { sidebarTitleClassNames } from "@/lib/utils/generalClassNames";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

const ProjectsRightWingSidebar = ({
  sidebarOpen,
  toggleSideNav,
  setLanguage,
  languageFilterList,
  screenRender,
}: {
  screenRender: "large" | "small";
  sidebarOpen: boolean;
  toggleSideNav: () => void;
  setLanguage: (arg: string) => void;
  languageFilterList: any[];
}) => {
  return (
    <>
      {screenRender == "small" ? (
        <div className=" xlgTablet:hidden">
          <div
            className="sidebar-title"
            onClick={toggleSideNav}
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
          >
            {sidebarOpen ? (
              <BsFillCaretDownFill size={20} />
            ) : (
              <BsFillCaretRightFill size={20} />
            )}
            &nbsp;Languages_Filter
          </div>
          <div className={`sidebar-body ${sidebarOpen ? "opened" : "closed"}`}>
            <div className={`sidebar`}>
              {languageFilterList.map((data: any, i: number) => (
                <div
                  className="social-media-project"
                  key={i}
                  style={{ marginBottom: "0em" }}
                >
                  <div className="flex-align">
                    <label className="label">
                      <input
                        type="checkbox"
                        onChange={() => {
                          setLanguage(data.name);
                        }}
                      />
                      &nbsp;
                      {data.icon}
                      &nbsp;{data.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {screenRender == "large" ? (
        <div className="right-wing w-[25%] hidden xlgTablet:block">
          <div
            className="right-wing-top border-b border-b-[#ffffff33] h-[50px] w-full"
            style={{
              fontFamily: "Consolas",
              fontStyle: "normal",
            }}
          >
            <div>
              <div className={cn("sidebar-title",sidebarTitleClassNames)} onClick={toggleSideNav}>
                {sidebarOpen ? (
                  <BsFillCaretDownFill size={20} />
                ) : (
                  <BsFillCaretRightFill size={20} />
                )}
                &nbsp;Languages_Filter
              </div>
              <div
                className={`sidebar-body-project ${
                  sidebarOpen ? "opened" : "closed"
                }`}
              >
                <div className="sidebar">
                  {languageFilterList.map((data, i) => (
                    <div className="social-media-project" key={i}>
                      <div className="flex-align">
                        <label className="label">
                          <input
                            type="checkbox"
                            onChange={() => {
                              setLanguage(data.name);
                            }}
                          />
                          &nbsp;
                          {data.icon}
                          &nbsp;{data.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectsRightWingSidebar;
