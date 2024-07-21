import React from "react";

function Education() {
  return (
    <React.Fragment>
      <div
        className="about-wrap-tag text-[26px] font-normal"
        style={{ color: "#515FD8", marginTop: "1em" }}
      >
        &lt;
        <span style={{ color: "#FFBD44" }}>
          div <span className="className_tag_class">className=</span>
          <span className="className_tag_text">"my_education"</span>
        </span>
        &gt;
      </div>
      <div className="tabcontent-sm px-20">
        <div style={{ color: "#fff" }} className="about-wrap-tag-text  text-[26px] font-normal">
          <p className="interest-text">
            I Am A Student Of A Reputable Institution In Nigeria, University Of
            Ilorin Mathematics Department. Admitted in the year 2020 and
            expected to graduate in the year 2024.
          </p>
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

export default Education;
