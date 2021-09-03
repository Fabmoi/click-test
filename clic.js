
window.onload = function () {
    let clickDiv = document.getElementById("click-here");
    clickDiv.onclick = addClick;
}
addClick = function() {
    updateNumberClick(+counterClick);
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
//////////////////////////////////////// ACHAT PREMIER BONUS ////////////////////////////////////////
$(document).ready(function(){
    var autoClick = document.getElementById('click-here');
        document.getElementById("first-bonus").addEventListener("click", function() {
            counterClick = counterClick -20;
            document.getElementById("click-counter").innerHTML = counterClick;
            setInterval(function(){
                autoClick.click();
            },750);
        });
});
//////////////////////////////////////// BOUTON BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
function updateNumberClick(number){
    var button = document.getElementById("first-bonus");
        document.getElementById("click-counter").innerHTML = number;
        if (number <19) {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
}
////////////////////////////////////////  ////////////////////////////////////////




