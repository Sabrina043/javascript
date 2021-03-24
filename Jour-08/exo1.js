// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret


var countriesNames = [""];

var request = require("request");

function getCountries() {

    request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

        getCountries.map(function (elem) 
            var result = JSON.parse(body);
            console.log("country :", resul.name);
            console.log("capital :", result.capital);
        
    });
}

getCountries();