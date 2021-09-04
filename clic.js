
window.onload = function () {
    let clickDiv = document.getElementById("click-here");
    clickDiv.onclick = addClick;
}
var counterClick = 0;

//////////////////////////////////////// AUGMENTER LES CLICS ////////////////////////////////////////
    document.getElementById("click-here").addEventListener("click", function() {
        counterClick++;
        document.getElementById("click-counter").innerHTML = counterClick;
    });
//////////////////////////////////////// RESET LES CLICS AVEC CONFIRMATION ////////////////////////////////////////
document.getElementById("reset-button").addEventListener("click", function() {
    var reset = confirm("En continuant, vous perdrez toutes vos touffes d'herbes sans rien recevoir en échange");
        if (reset == true) {
            counterClick = 0;
        document.getElementById("click-counter").innerHTML = counterClick;
        }
        else {
        }
    });
//////////////////////////////////////// ACHAT PREMIER BONUS ////////////////////////////////////////
    var autoClick = document.getElementById('click-here');
        document.getElementById("first-bonus").addEventListener("click", function() {
            counterClick = counterClick -20;  
    var button = document.getElementById("first-bonus");        //////////////////////////////////////// DÉSACTIVATION BOUTON
        button.disabled = true;                                 //////////////////////////////////////// DÉSACTIVATION BOUTON
            document.getElementById("click-counter").innerHTML = counterClick;
            setInterval(function(){
                autoClick.click();
            },750);
        });
//////////////////////////////////////// BOUTON PREMIER BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
addClick = function() {
    updateNumberClick(+counterClick);
}
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




