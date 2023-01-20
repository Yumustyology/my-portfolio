import React, { useEffect, useRef } from "react";
import "../styles/experience.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const repeat = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 9, 9, 2, 7, 5, 4, 2, 6, 9, 5, 4, 3, 3, 1, 2,
  2, 6, 4, 5, 7, 9,
];

function ExperienceList() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <pre
        className="line-numbers experience-box"
        style={{ background: "none" }}
      >
        <code className="language-jsx" style={{ background: "none" }}>
          {repeat.map((data, i) => (
            <>
              {/* <span className="section">&lt;section&gt;</span> */}
              
              {codeBlock("tahoo")}
              {/* <p>&lt;section&gt;</p>
              <p>dvddvdvddd</p>
              <p>&lt;/section&gt;</p> */}
              {/* <span className="section">&lt;/section&gt;</span> */}
            </>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default ExperienceList;

const codeBlock = (info) => {
  let code;
  return (code = (`
  <section>
    <h1>company name</h1>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
    </span>
    <span>Fullstack Developer </span>
    <span> 02/15/22 - 12/23/22 </span>
  </section>
  
  //------------------------------------------
      `));
};

// <div key={i}>
// <section className="experience-info">
//   <span className="section">&lt;section&gt;</span>
//   <br />
//   <div className="tabcontent">
//     <span className="span">&lt;h1&gt;</span>
//     <span className="white-exp-text">company name ${info}</span>
//     <span className="span">&lt;/h1&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <div className="tabcontent-sm">
//       <span className="white-exp-text">
//       ${info}
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
//         aliquam, purus sit amet luctus venenatis, lectus magna
//         fringilla urna, porttitor
//       </span>
//     </div>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <span className="white-exp-text">Fullstack Developer</span>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//     <span className="span">&lt;span&gt;</span>
//     <span className="white-exp-text">02/15/22 - 12/23/22 </span>
//     <span className="span">&lt;/span&gt;</span>
//     <br />
//   </div>
//   <span className="section">&lt;/section&gt;</span>
//   <br />
// </section>
// </div>
//   `;
