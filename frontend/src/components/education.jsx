import React from 'react'
import "../styles/experience.css"
import "../styles/about.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { SiWebpack } from "react-icons/si"
import { CgWebsite } from "react-icons/cg"


function Education() {
    return (
        <div>
            <div className="about-wrap-tag" style={{ color: "#515FD8", marginTop: "1em" }}>
                &lt;<span style={{ color: "#FFBD44" }}>div <span className='className_tag_class'>className=</span><span className='className_tag-text'>"my_education"</span></span>
                &gt;
            </div>
            <div className='tabcontent-sm'>
                <div style={{ color: "#fff" }} className="about-wrap-tag-text">
                    {/* <span><b>My Interest</b></span> */}
                    <p className='interest-text'>I Am A Student Of A Reputable Institution In Nigeria, University Of Ilorin Mathematics Department. Admitted in the year 2020 and expected to graduate in the year 2024.</p>
                </div>
                <div>

                </div>
            </div>
            <div className="about-wrap-tag" style={{ color: "#515FD8" }}>
                &lt;<span style={{ color: "#FFBD44" }}>/div</span>
                &gt;
            </div>
        </div>
    )
}

export default Education