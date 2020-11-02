const myheader = new AutoTyping({
  id: "at",
  typeText: ["full-stack developer.", "data-scientist."],
  textColor: "#fff500",
  typeSpeed: 100,
  typeDelay: 100,
  typeRandom: false,
  deleteSpeed: 50,
  deleteDelay: 1000,
  cursor: "|",
  cursorColor: "#fff",
  cursorSpeed: 300,
});
myheader.init();

$(document).ready(function () {
  $(".sec3 .box2 p").mouseover(function () {
    $(this).parent().css({ "border-top-left-radius": "30px", "border-bottom-left-radius": "30px", "transition": "0.3s" });
  });
  $(".sec3 .box2 p").mouseout(function () {
    $(this).parent().css({ "border-radius": "unset" });
  });
  $(".sec3 .box2").mouseover(function () {
    $(this).css({ "border-top-left-radius": "30px", "border-bottom-left-radius": "30px", "transition": "0.3s" });
  });
  $(".sec3 .box2").mouseout(function () {
    $(this).css({ "border-radius": "unset" });
  });
  $(".sec3 .box2").mouseover(function () {
    $(this).find("p").css({ "margin-left": "15%", "margin-top": "3%", "transition": "0.3s", "cursor": "pointer" });
  });
  $(".sec3 .box2").mouseout(function () {
    $(this).find("p").css({ "margin-left": "-15px", "cursor": "default" });
  });
});