// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"


var prompt = require("prompt");

var properties = [

    {
        name : "email",
        validator : /\S+@\S+\.\S+/,
        warning : ""

    },

    {
        name :"username",
        validator : /^[a-zA-Z\s\-]+$/,
        warning : "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    

    {

        name : "password",
        validator :/[a-zA-Z0-9]{6,}/,
        replace: "*",
        hidden : true 

    }
];

prompt.start(); 

function onErr(err) { 
    console.log(err);
    return ;
  }
  
  prompt.get(properties, function (err, res) {
    if (err) {
          return onErr(err);
      }
  
 console.log("ALL GOOD")
  });