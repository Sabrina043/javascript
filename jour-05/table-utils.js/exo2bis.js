function multiply(num) {

    var table = 0;
    if (num) {
        for (var i = 1; i <= 10; i++) {

            table = num * i;

            console.log("le produit de ", num, "par", i, "est: ", table)
        }

    } else {

       return "error"
    }

}
multiply(process.argv[2]);

// console.log(multiply(8));


function addition(num1) {

    var table = 0;
    if (num1) {
        for (var i = 1; i <= 10; i++) {

            table = num1 + i;

            console.log("la sommes de", num1, "+", i, "est: ", table)
        }

    } else {

        return "error"
    }

}
addition(process.argv[2]);

// console.log(multiply(8));

module.exports = {
    multiply,
    addition,
  };

