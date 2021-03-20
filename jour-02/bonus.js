// - Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
// - À l'aide d'une condition, affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas


var random = Math.random();

var min = 1;
var max = 6;
var b = Math.floor(random*(max-min+1)+min)

if (b==6) {
    console.log("yes I win !");

}    
    
else   {
        
        console.log("so close !");
    
    }
        
    
