// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

var prev = 0;
function scrollFunction() {
  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  if (document.body.scrollTop > prev || document.documentElement.scrollTop > prev) {
    document.getElementById("navbar").style.top = "-66px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
  if (document.body.scrollTop == 0) {
    document.getElementById("navbar").style.top = "0";
  }
  prev = document.body.scrollTop;
}
