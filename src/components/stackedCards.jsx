import React, { useRef } from "react";
import "../styles/stackedCards.css";
function StackedCards() {
  // var $card = $(".card");
  var cards = useRef([]);
  var uls = useRef();
  var ul = uls.current;
  var lis = useRef();
  var li = uls.current;
  var card = cards.current;
  // var card = $(".card");
  // var lastCard = $(".card-list .card").length - 1;
  var lastCard = cards.length - 1;

//   function next() {
//     console.log("cards ", cards.current[0]);

    // cards.current.map((card) => {
    //   if (card.classList.contains("activeNow")) {
    //     alert("yo");
    //   } else {
    //     console.log("fbklfbkfb");

    //     // let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    //     // let arrs =  uls.current.children
    //     // let arr = Array.prototype.slice.call(arrs)
    //     // console.log("vdv ",Array.prototype.slice.call(arr))
    //     // arrs = Array.prototype.slice.call(arrs)
    //     // console.log(arr)

    //     setInterval(() => {
    //       //    console.log(arr[arr.length -1])
    //       //    const lastItem = arr[arr.length -1]
    //       //    arr.pop()
    //       //    arr.unshift(lastItem)
    //       //    console.log("arry",arrs)
    //       //    console.log("arr",arr)
    //       //    console.log("arraya ",arrs[0].className)


    //       if (card[0].classList.contains("activeNow")) {
    //         alert("yo");
    //       } else {
    //         console.log("fbklfbkfb");
    //       }


          
    //     }, 2000);
    //   }
    // });

    //     // console.log(cards);
    //     console.log(uls);

    //     console.log("bfekw");
//   }

  //   console.log(uls);

  // $(".prev").click(function () {
  // 	var appendToList = function () {
  // 		if ($(".card").hasclassNameNams("activeNow")) {
  // 			var $slicedCard = $(".card").slice(0, 1).addclassNameNams("transformPrev");
  // 			$(".card-list").append($slicedCard);
  // 		}
  // 	};

  // 	$("li")
  // 		.removeclassNameNams("transformPrev")
  // 		.last()
  // 		.addclassNameNams("activeNow")
  // 		.prevAll()
  // 		.removeclassNameNams("activeNow");
  // 	setTimeout(function () {
  // 		appendToList();
  // 	}, 150);
  // });

  return (
    <div>
         
          <div className="container">
            <div className="card-stack">
              <a className="buttons prev" href="#">
                &lt;
              </a>
              <ul className="card-list" ref={uls}>
                <li
                  className="card"
                  ref={(el) => (cards.current[0] = el)}
                  style={{
                    background: "#c31432" /* fallback for old browsers */,
                    background:
                      "-webkit-linear-gradient(to right, #240b36, #c31432)" /* Chrome 10-25, Safari 5.1-6 */,
                    background: "linear-gradient(to right, #240b36, #c31432)",
                  }}
                >
                  <img
                    src="https://svgshare.com/i/E90.svg"
                    alt="Sun"
                    className="card-list__image"
                  />

                  <h3 className="card-list__text">
                    Watch your way toward success as you excel above your
                    competitors.{" "}
                  </h3>
                </li>
                <li
                  className="card"
                  ref={(el) => (cards.current[1] = el)}
                  style={{
                    background: "#00416A",
                    background:
                      "-webkit-linear-gradient(to right, #FFE000, #799F0C, #00416A)",
                    background:
                      "linear-gradient(to right, #FFE000, #799F0C, #00416A)",
                  }}
                >
                  <img
                    src="https://svgshare.com/i/E9H.svg"
                    alt="Sun"
                    className="card-list__image"
                  />

                  <h3 className="card-list__text">
                    Relax and chill, we've got you covered :){" "}
                  </h3>
                </li>
                <li
                  className="card"
                  ref={cards}
                  style={{
                    background: "#1e3c72",
                    background:
                      " -webkit-linear-gradient(to right, #2a5298, #1e3c72)",
                    background: "linear-gradient(to right, #2a5298, #1e3c72)",
                  }}
                >
                  <img
                    src="https://svgshare.com/i/E86.svg"
                    alt="Sun"
                    className="card-list__image"
                  />

                  <h3 className="card-list__text">
                    {" "}
                    Boost your social networking presence
                  </h3>
                </li>

                <li
                  className="card"
                  ref={cards}
                  style={{
                    background: "#2C3E50",
                    background:
                      "-webkit-linear-gradient(to right, #FD746C, #2C3E50)",
                    background: "linear-gradient(to right, #FD746C, #2C3E50)",
                  }}
                >
                  <img
                    src="https://svgshare.com/i/E8Y.svg"
                    alt="Sun"
                    className="card-list__image"
                  />

                  <h3 className="card-list__text">
                    {" "}
                    Be at the top of your competitors
                  </h3>
                </li>
                <li
                  className="card"
                  ref={cards}
                  style={{
                    background: "#373B44",
                    background:
                      "-webkit-linear-gradient(to right, #4286f4, #373B44)",
                    background: "linear-gradient(to right, #4286f4, #373B44)",
                  }}
                >
                  <img
                    src="https://svgshare.com/i/E9z.svg"
                    alt="Sun"
                    className="card-list__image"
                  />

                  <h3 className="card-list__text">
                    {" "}
                    Create contents for your online courses
                  </h3>
                </li>
              </ul>
              <a className="buttons next" href="#">
                &gt;
              </a>
            </div>
          </div>
       
    </div>
  );
}

export default StackedCards;
