// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu


// GUESS

var min = 1;
var max = 100;
var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min);

var prompt = require("prompt");

var properties = [
  {
    name: "Number",
    validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
    warning: "Number doit être compris entre 1 et 100, pas d'espaces, pas de tirets"

    description: "Saisissez votre Number", // Consigne affichée
    type: "string", // Type de la donnée saisie
    pattern: /^\w+$/, // Regex utilisée pour la validation
    message: "Le mot de passe ne doit contenir que des lettres", // Message d'erreur

function play () {}
