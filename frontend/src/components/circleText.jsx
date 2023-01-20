import CircleType from "circletype";
import { useEffect, useRef } from "react";
import "../styles/circleText.css";

function CircleText({}) {
  const textRef = useRef();
  const textRef1 = useRef();
  useEffect(() => {
    new CircleType(textRef.current).radius(65);
    new CircleType(textRef1.current).radius(65);
  }, []);
  return (
    <div>
      <div className="left-nextBtn-container">
        {/* <img
          src={`/imgs/arrDown_${mode ? "dark" : "light"}.png`}
          className="arrow-down"
          width="45"
          height="80"
          alt="spining-btn"
        /> */}
        <div className={`rotating-text rotating-text text-white`}>
          <span className={`text text-white`} ref={textRef}>
            next - next - next - next - next - next -
          </span>
        </div>
      </div>

      <div className="right-nextBtn-container">
        {/* <img
          src={`/imgs/arrDown_${mode ? "dark" : "light"}.png`}
          className="arrow-down"
          width="45"
          height="80"
          alt="spining-btn"
        /> */}
        <div className={`rotating-text rotating-text text-white`}>
          <span className={`text text-white`} ref={textRef1}>
            back - back - back - back - back - back -
          </span>
        </div>
      </div>
    </div>
  );
}

export default CircleText;
