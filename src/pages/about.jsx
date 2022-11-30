import React,{useEffect} from 'react'

import "../styles/experience.css";
import "../styles/ln.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const repeat = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 9, 9, 2, 7, 5, 4, 2, 6, 9, 5, 4, 3, 3, 1, 2,
  2, 6, 4, 5, 7, 9,
];

function About() {


  useEffect(() => {
    Prism.highlightAll();
  }, []);


    const body = 'I am a Fullstack Developer and enjoy creating things that solve peoples problem using my coding "Ninjustsu😜" (skills). My interest in web development started back in the year 2016 when I decided to learn programming as it sounded fun😂, trust me I was going to learn the advanced programming languages🙄, until I discovered that HTML & CSS with an "Hello World! 😏" startup output was the basics knowledge I needed to get into the web programming world. 🚀Fast-forward to today, I have had the privilege of mentoring over 20 junior Frontend Developers and 5 Backend programmers at an IT institute, as a start-up I teamed up with a friend of mine who does UIUX in other to move foward together in the tech industry. My main focus is building accessible, inclusive products and digital exceptional experiences to solve peoples problem.'




  return (
    <div>
       <pre
        className="line-numbers experience-box"
        style={{ background: "none" }}
      >
        <code className="language-jsx" style={{ background: "none" }}>
          {codeBlock("tahoo")}
        </code>
      </pre>
    </div>
  )
}


export default About



const codeBlock = (info) => {
  let code;
  return (code = `I am a Fullstack Developer and enjoy creating things that solve peoples problem using my coding "Ninjustsu😜" (skills). My interest in web development started back in the year 2016 when I decided to learn programming as it sounded fun😂, trust me I was going to learn the advanced programming languages🙄, until I discovered that HTML & CSS with an "Hello World! 😏" startup output was the basics knowledge I needed to get into the web programming world. 🚀Fast-forward to today, I have had the privilege of mentoring over 20 junior Frontend Developers and 5 Backend programmers at an IT institute, as a start-up I teamed up with a friend of mine who does UIUX in other to move forward together in the tech industry. My main focus is building accessible, inclusive products and digital exceptional experiences to solve peoples problem.
`);
};

// return (code = `I am a Fullstack Developer and enjoy creating things that solve peoples problem using my coding "Ninjustsu😜" (skills). \nMy interest in web development started back in the year 2016 when I decided to learn programming as it sounded fun😂,\ntrust me I was going to learn the advanced programming languages🙄,\nuntil I discovered that HTML & CSS with an "Hello World! 😏" startup output was the basics knowledge\nI needed to get into the web programming world. 🚀Fast-forward to today,\nI have had the privilege of mentoring over 20 junior Frontend Developers and 5 Backend programmers at an IT institute,\nas a start-up I teamed up with a friend of mine who does UIUX in other to move forward together in the tech industry.\nMy main focus is building accessible, inclusive products and digital exceptional experiences to solve peoples problem.


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
