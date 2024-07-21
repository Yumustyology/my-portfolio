import CircleType from "circletype";
import { LegacyRef, useEffect, useRef } from "react";
import "../styles/circleText.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

function CircleText({ nextPage, prevPage, isPrevPage, isNextPage }:{
    nextPage:string, prevPage:string, isPrevPage:boolean, isNextPage:boolean
}) {

    const textRef = useRef<HTMLSpanElement>(null);
    const textRef1 = useRef<HTMLSpanElement>(null);
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
          <Link href={prevPage}>
            <div className="left-nextBtn-container">
              <span
                className="arrow-down"
                style={{ position: "absolute", top: 43, right: 60 }}
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
       null
      )}

      {isNextPage ? (
        <>
          <Link href={nextPage}>
            <div className="right-nextBtn-container">
              <span
                className="arrow-down"
                style={{ position: "absolute", top: 43, right: 55 }}
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
       null
      )}
    </div>
  );
}

export default CircleText;
