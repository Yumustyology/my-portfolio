import CircleType from "circletype";
import { useEffect, useRef } from "react";
import "../styles/circleText.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function CircleText({ nextPage, prevPage, isPrevPage, isNextPage }) {
  const textRef = useRef();
  const textRef1 = useRef();
  useEffect(() => {
    // new CircleType(textRef.current).radius(65);
    new CircleType(textRef.current).radius(60);
    new CircleType(textRef1.current).radius(60);
    // new CircleType(textRef1.current).radius(65);
  }, []);
  console.log(isPrevPage);
  return (
    <div>
      {isPrevPage ? (
        <>
          <Link to={prevPage}>
            <div className="left-nextBtn-container">
              <span
                className="arrow-down"
                style={{ position: "absolute", top: 43, right: 50 }}
              >
                <BsArrowLeft size={30} color="#fff" />
              </span>
              <div
                className={`rotating-text-inverse text-white`}
                style={{ position: "relative" }}
              >
                <span className={`text-inverse text-white`} ref={textRef}>
                  back - back - back - back - back -
                  {/* back - back - back - back - back - back - */}
                </span>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <span ref={textRef}></span>
      )}

      {isNextPage ? (
        <>
          <Link to={nextPage}>
            <div className="right-nextBtn-container">
              <span
                className="arrow-down"
                style={{ position: "absolute", top: 43, right: 50 }}
              >
                <BsArrowRight size={30} color="#fff" />
              </span>
              <div className={`rotating-text text-white`}>
                <span className={`text text-white`} ref={textRef1}>
                  next - next - next - next - next -
                  {/* next - next - next - next - next - next - */}
                </span>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <span ref={textRef1}></span>
      )}
    </div>
  );
}

export default CircleText;
