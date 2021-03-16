// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"



function chekpal(strings) {

    var sentence = strings.split("").reverse().join("");
    console.log(sentence);


    if(strings == sentence){
        console.log("palindrome")

    }
    
    else {
        console.log("nop")

    }

}

chekpal("kayak")

// chekpal("kasyak")

