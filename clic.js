
window.onload = function () {
    let clickDiv = document.getElementById("click-here");
    clickDiv.onclick = addClick;
}
                        // FONCTION POUR AUGMENTER LE COMPTEUR DE CLIC ET AUTOCLIC
var counterClick = 0;

addClick = function() {
    updateNumberClick(++counterClick);
}


function updateNumberClick(number) {
    var autoClick = document.getElementById('click-here');
    document.getElementById("click-counter").innerHTML = number;
    if (number >= 3) {
        setInterval(function(){
        autoClick.click();
        },200);
    }
 
}

                        // FONCTION POUR RESET LE COMPTEUR DE CLIC
function resetCounter() {
    counterClick = 0;
    updateNumberClick(counterClick);
}
                        
