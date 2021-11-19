window.onload = function () {
    var clickDiv = document.getElementById("click-here");
    clickDiv.onclick = addClick;
}
////////////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
addClick = function() {
    firstUpdateNumberClick(+counterClick);
    secondUpdateNumberClick(+counterClick);
    thirdUpdateNumberClick(+counterClick);
}
///////////////////////////////////////////// VARIABLES ////////////////////////////////////////
var counterClick = 0;           // compteur de clic au départ
var firstPerSecond = 0;         // premier par seconde au départ
var secondPerSecond = 0;        // second par seconde au départ
var thirdPerSecond = 0;         // troisième par seconde au départ
var numberFirstBonus = 0;       // nombre premier bonus achetés
var numberSecondBonus = 0;      // nombre second bonus achetés
var numberThirdBonus = 0;       // nombre troisième bonus achetés
var priceFirstStuff = 20;       // affichage prix du premier bonus au départ
var newPriceFirstStuff = 16;    // prix du premier bonus au départ
var priceSecondStuff = 120;     // affichage prix du second bonus au départ
var newPriceSecondStuff = 80;   // prix du second bonus au départ
var priceThirdStuff = 245;      // affichage prix du troisième bonus au départ
var newPriceThirdStuff = 140;   // prix du troisième bonus au départ




//////////////////////////////////////// AUGMENTER LES CLICS ////////////////////////////////////////
    document.getElementById("click-here").addEventListener("click", function() {
        counterClick++;
        document.getElementById("click-counter").innerHTML = (Math.round(counterClick));
    });
//////////////////////////////////////// RESET LES CLICS AVEC CONFIRMATION ////////////////////////////////////////
    document.getElementById("reset-button").addEventListener("click", function() {
        var reset = confirm("En continuant, vous perdrez toutes vos planètes sans rien recevoir en échange");
            if (reset == true) {
                counterClick = 0;
            document.getElementById("click-counter").innerHTML = counterClick;
            }
            else {
            }
    });
//////////////////////////////////////// AFFICHAGE PRIX PREMIER BONUS ////////////////////////////////////////
    document.getElementById('first-bonus').addEventListener("click", function() {
        priceFirstStuff = (Math.round(priceFirstStuff * 1.25)); 
        newPriceFirstStuff = (Math.round(newPriceFirstStuff * 1.25)); 
        document.getElementById('price-first-stuff').innerHTML = "Prix: " + priceFirstStuff;
    });
//////////////////////////////////////// ACHAT PREMIER BONUS ////////////////////////////////////////
    var firstAutoClick = document.getElementById('click-here');
        document.getElementById("first-bonus").addEventListener("click", function() {
            counterClick = counterClick - newPriceFirstStuff;  
    var firstButton = document.getElementById("first-bonus");           //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
        firstButton.disabled = true;                                    //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
            document.getElementById("click-counter").innerHTML = counterClick;
            setInterval(function(){
                firstAutoClick.click();
            },1000);
        });
//////////////////////////////////////// AFFICHAGE NOMBRE PREMIER BONUS ACHETÉS ////////////////////////////////////////
    document.getElementById('first-bonus').addEventListener("click", function() {
        numberFirstBonus++;
        document.getElementById('number-first-bonus').innerHTML = "Achetés: " + numberFirstBonus;
        document.getElementById('planet-first-per-second').innerHTML =  numberFirstBonus; //compteur par seconde
    });
////////////////////////////////////////  BOUTON PREMIER BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
function firstUpdateNumberClick(number){
    var firstButton = document.getElementById("first-bonus");
        document.getElementById("click-counter").innerHTML = number;
        if (number < priceFirstStuff) {
            firstButton.disabled = true;
        }
        else {
            firstButton.disabled = false;
        }
};




//////////////////////////////////////// AFFICHAGE PRIX SECOND BONUS ////////////////////////////////////////
document.getElementById('second-bonus').addEventListener("click", function() {
    priceSecondStuff = (Math.round(priceSecondStuff * 1.50));
    newPriceSecondStuff = (Math.round(newPriceSecondStuff * 1.50));
    document.getElementById('price-second-stuff'). innerHTML = "prix: " + priceSecondStuff;
});
//////////////////////////////////////// ACHAT SECOND BONUS ////////////////////////////////////////
    var secondAutoClick = document.getElementById('click-here');
        document.getElementById("second-bonus").addEventListener("click", function() {
            counterClick = counterClick - newPriceSecondStuff;
    var secondButton = document.getElementById("second-bonus");         //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
        secondButton.disabled = true;                                   //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
            document.getElementById("click-counter").innerHTML = counterClick;
            setInterval(function(){
                secondAutoClick.click();
            },500);
        });
//////////////////////////////////////// AFFICHAGE NOMBRE SECOND BONUS ACHETÉS ////////////////////////////////////////
    document.getElementById('second-bonus').addEventListener("click", function() {
        numberSecondBonus++;
        document.getElementById('number-second-bonus').innerHTML = "Achetés: " + numberSecondBonus;
        document.getElementById('planet-second-per-second').innerHTML = numberSecondBonus * 2; //compteur par seconde
    });
////////////////////////////////////////  BOUTON SECOND BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
function secondUpdateNumberClick(number){
    var secondButton = document.getElementById("second-bonus");
        document.getElementById("click-counter").innerHTML = number;
        if (number < priceSecondStuff) {
            secondButton.disabled = true;
        }
        else {
            secondButton.disabled = false;
        }
};




//////////////////////////////////////// AFFICHAGE PRIX TROISIÈME BONUS ////////////////////////////////////////
document.getElementById('third-bonus').addEventListener("click", function() {
    priceThirdStuff = (Math.round(priceThirdStuff * 1.75));
    newPriceThirdStuff = (Math.round(newPriceThirdStuff * 1.75));
    document.getElementById('price-third-stuff'). innerHTML = "prix: " + priceThirdStuff;
});
//////////////////////////////////////// ACHAT TROISIÈME BONUS ////////////////////////////////////////
    var thirdAutoClick = document.getElementById('click-here');
        document.getElementById("third-bonus").addEventListener("click", function() {
            counterClick = counterClick - newPriceThirdStuff;
    var thirdButton = document.getElementById("third-bonus");           //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
        thirdButton.disabled = true;                                    //////////////////////////////////////// DÉSACTIVATION BOUTON AU CLIC
            document.getElementById("click-counter").innerHTML = counterClick;
            setInterval(function(){
                thirdAutoClick.click();
            },250);
        });
//////////////////////////////////////// AFFICHAGE NOMBRE TROISIÈME BONUS ACHETÉS ////////////////////////////////////////
    document.getElementById('third-bonus').addEventListener("click", function() {
        numberThirdBonus++;
        document.getElementById('number-third-bonus').innerHTML = "Achetés: " + numberThirdBonus;
        document.getElementById('planet-third-per-second').innerHTML = numberThirdBonus * 4; //compteur par seconde
    });
////////////////////////////////////////  BOUTON TROISIÈME BONUS DÉSACTIVÉ ET ACTIVÉ ////////////////////////////////////////
function thirdUpdateNumberClick(number){
    var thirdButton = document.getElementById("third-bonus");
        document.getElementById("click-counter").innerHTML = number;
        if (number < priceThirdStuff) {
            thirdButton.disabled = true;
        }
        else {
            thirdButton.disabled = false;
        }
};

//////////////////////////////////////// COMPTEUR PAR SECONDES POUR TOUS LES AUTOCLICK ////////////////////////////////////////
window.addEventListener('click', function() {
    var first = document.getElementById('planet-first-per-second').innerHTML;
    var second = document.getElementById('planet-second-per-second').innerHTML;
    var third = document.getElementById('planet-third-per-second').innerHTML;
        total = parseFloat(first) + parseFloat(second) + parseFloat(third);
        document.getElementById('planet-per-second').innerHTML = total;
});


