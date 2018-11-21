// declareer alle variabele
var indicator = document.querySelector(".indicator");
var hartjes = document.querySelectorAll(".hartje");


for(var i = 0; i < hartjes.length; i++){
  hartjes[i].addEventListener("click", function() {


    indicator.classList.add('pulse');
    setTimeout(function(){
        	indicator.classList.remove('pulse');
        }, 500);

    this.classList.toggle('saved');

    var saved = document.querySelectorAll(".saved").length;
    var amount = document.getElementById('amount');
    amount.innerHTML = saved;

    if(amount.innerHTML === "0") {

     amount.style.display = "none";
        } else {
          amount.style.display = "block";
      }
   document.querySelectorAll(".saved").length;
  });
}
