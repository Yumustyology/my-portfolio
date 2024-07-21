"use client";
import React, { useEffect, useRef, useState } from "react";

const AboutMeText = ({about}:{about:{info:string}}) => {
  const [lineNumber, setLineNumber] = useState<number[]>([]);
  let [calcLines, setCalcLines] = useState(0);


  let lineNum: number[] = [];
  let element = useRef<null | any>(null);

  const handleCalLines = () => {
    var divHeight = element?.current?.offsetHeight;
    var lineHeight = parseInt(element?.current?.style.lineHeight);
    let lines = divHeight / lineHeight;
    setCalcLines(lines);
    for (let i = 0; i < lines; i++) {
      if (!lineNum.includes(lines - 1)) {
        lineNum.push(i);
        // console.log("lineNum", lineNum);
        setLineNumber(lineNum);
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (about && !lineNum.includes(calcLines - 1)) {
      setTimeout(() => {
        handleCalLines();
      }, 200);
    } else {
      return;
    }
  }, [about]);

  return (
    <div id="form" className="about-text-box flex mt-[1.5em] h-[90vh] xlgTablet:h-[70dvh] overflow-y-auto" style={{
        fontFamily: 'Consolas'
    }} >
      <div id="number" className="h-[80vh] flex flex-col font-normal text-base tracking-[.08em] text-white mr-[1em] leading-[30px] pr-2.5">
        {lineNumber.length > 0 &&
          lineNumber.map((num, index) => <span key={index}>{num + 1} *</span>)}
      </div>
      <div id="text" className="h-max leading-[30px] flex flex-col items-start font-normal text-base tracking-[.08em] text-white" ref={element} style={{ width: "80%", lineHeight: "30px" }}>
        <span>/**</span>
        <span>
          <b onClick={() => console.log(lineNum)}>About me (bio)</b>
        </span>
        {about?.info}
        {/* */}
        <br />
        <span>*/</span>
      </div>
    </div>
  );
};

export default AboutMeText;
