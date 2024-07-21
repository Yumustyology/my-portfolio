import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SiWebpack } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { cn } from "@/lib/utils";

function Interest() {
    const listContentClassName = "min-w-[300px] flex h-[50px] items-center justify-start text-base";
  return (
    <React.Fragment>
      <div
        className="about-wrap-tag text-[26px] font-normal"
        style={{ color: "#515FD8", marginTop: "1em" }}
      >
        &lt;
        <span style={{ color: "#FFBD44" }}>
          div <span className="className_tag_class">className=</span>
          <span className="className_tag_text">"my_interest"</span>
        </span>
        &gt;
      </div>
      <div className="tabcontent-sm">
        <div style={{ color: "#fff" }} className="text-[25px] font-normal">
          <p className="text-base my-[.8em] capitalize">
            I have been into the tech industry tech for over five years, i have
            vast interest in programming but my core interest in programming
            are...
          </p>

          <div
            className="list-interest"
            style={{ marginLeft: ".5em", marginTop: ".5em" }}
          >
            <div className={cn("list-content",listContentClassName)}>
              <div className="flex-align">
                <MdOutlineNavigateNext color="white" size={20} />
                &nbsp;
                <SiWebpack color="#333742" size={25} />
                &nbsp;Blockchain Development
              </div>
            </div>
            <div className={cn("list-content",listContentClassName)}>
              <div className="flex-align">
                <MdOutlineNavigateNext color="white" size={20} />
                &nbsp;
                <CgWebsite color="#333742" size={25} />
                &nbsp;Web Development
              </div>
            </div>
            <div className={cn("list-content",listContentClassName)}>
              <div className="flex-align">
                <MdOutlineNavigateNext color="white" size={20} />
                &nbsp;
                <HiOutlineDevicePhoneMobile color="#333742" size={25} />
                &nbsp;Mobile
                <wbr /> Application
                <wbr /> Development
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="about-wrap-tag text-[26px] font-normal" style={{ color: "#515FD8" }}>
        &lt;<span style={{ color: "#FFBD44" }}>/div</span>
        &gt;
      </div>
    </React.Fragment>
  );
}

export default Interest;
