
window.onload = function () {
    let clickDiv = document.getElementById("click-here");
    clickDiv.onclick = addClick;
}
var counterClick = 0;

//////////////////////////////////////// AUGMENTER LES CLICS ////////////////////////////////////////
$(document).ready(function(){

    document.getElementById("click-here").addEventListener("click", function() {
        counterClick++;
        document.getElementById("click-counter").innerHTML = counterClick;
    });
});
//////////////////////////////////////// RESET LES CLICS ////////////////////////////////////////
$(document).ready(function(){

    document.getElementById("reset-button").addEventListener("click", function() {
        counterClick = 0;
        document.getElementById("click-counter").innerHTML = counterClick;
    });
});
//////////////////////////////////////// DÉPENSER LES CLICS ////////////////////////////////////////
$(document).ready(function(){
    
    document.querySelector(".first-stuff-10").addEventListener("click", function() {
        counterClick = counterClick -10;
        document.getElementById("click-counter").innerHTML = counterClick;
    });
});
//////////////////////////////////////// BOUTON BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
addClick = function() {
    updateNumberClick(+counterClick);
}
function updateNumberClick(number){
    var button = document.getElementById("btn");
    document.getElementById("click-counter").innerHTML = number;
    if (number >=0 && number <9) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}
////////////////////////////////////////  ////////////////////////////////////////


/* const button = document.getElementById("btn");
    if (counterClick < 10) {
        button.disabled = true;
    }    */




