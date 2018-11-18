
var indicator = document.querySelector(".indicator");
var hartjes = document.querySelectorAll(".hartje");

for(var i = 0; i < hartjes.length; i++){
  hartjes[i].addEventListener("click", function() {
   indicator.classList.toggle('off');
  });
}

console.log(hartjes);

// hartjes.addEventListener("click",function(){
//     indicator.classList.toggle('off');
//   }
// );










//declaratie van dom elementen
// var vergrootglas = document.querySelector('header img:last-of-type');
// var zoekveld = document.querySelector('header');
//
// //actie !
// vergrootglas.addEventListener("click",function(){
//     zoekveld.classList.toggle('search');
//   }
// );

/*
EventListeners
  click
  mouseover
  mousedown
  mouseup
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

/*
Classlist
  classList.add( String )
  classList.remove( String )
  classList.toggle ( String )
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/
