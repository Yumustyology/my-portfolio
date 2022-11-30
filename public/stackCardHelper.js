// var $card = $('.card');
// var lastCard = $(".card-list .card").length - 1;

 
var card = document.querySelectorAll(".card");
var card1 = document.querySelector(".card");
var lastCard = document.querySelectorAll(".card-list .card").length - 1;
console.log("yj", card);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

next?.addEventListener("click", function () {
	alert("uo")
  var prependList = function () {
    if (card1.hasClass("activeNow")) {
      var slicedCard = card1
        .slice(lastCard)
        .removeClass("transformThis activeNow");
      ul.prepend(slicedCard);
    }
  };
  li.last()
    .removeClass("transformPrev")
    .addClass("transformThis")
    .prev()
    .addClass("activeNow");
  setTimeout(function () {
    prependList();
  }, 150);
});

prev?.addEventListener("click",function () {
  var appendToList = function () {
    if (card1.hasClass("activeNow")) {
      var slicedCard = card1.slice(0, 1).addClass("transformPrev");
      $(".card-list").append(slicedCard);
    }
  };

  li.removeClass("transformPrev")
    .last()
    .addClass("activeNow")
    .prevAll()
    .removeClass("activeNow");
  setTimeout(function () {
    appendToList();
  }, 150);
});
