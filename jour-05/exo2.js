// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme

//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console




// TABLE

function multiply(num) {

    var table = 0;
    if (num) {
        for (var i = 1; i <= 10; i++) {

            table = num * i;

            console.log("le produit de ", num, "par", i, "est: ", table)
        }

    } else {

        console.log("error")
    }

}
multiply(process.argv[2]);

// console.log(multiply(8));








// function multiply (num) {

//     var multinum = 0
//     for (var i = 1; i <= 10; i++) {

//         multinum = num*i

//         console.log(num,"*",i,"=",multinum)

//     }

    
// }

// // multiply(2)

// multiply(process.argv[2]);
