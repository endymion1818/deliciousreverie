window.onload = function(){

  var links = document.querySelectorAll('a:not(.sr-only)');

  for( var i=0,il = links.length; i< il; i ++ ){
   links[i].onclick = clickHandler;
  }

  function clickHandler(event) {

    event.preventDefault();

    var travelTo = this.getAttribute("href");

    // add `s` to `Element`
    var animOutUp = document.getElementsByClassName("animateOutUp");

    // iterate `animOut` elements
    for (var i = 0; i < animOutUp.length; i++) {
       // add `out` `className` to `animOut` element at index `i`
       animOutUp[i].classList.add("outUp");
    };
    // add `s` to `Element`
    var animOutDown = document.getElementsByClassName("animateOutDown");

    // iterate `animOut` elements
    for (var i = 0; i < animOutDown.length; i++) {
       // add `out` `className` to `animOut` element at index `i`
       animOutDown[i].classList.add("outDown");
    };
    // Delay page out until the animation finishes
    setTimeout(function() {
      window.location.href = travelTo;
    }, 500);
  };
};
