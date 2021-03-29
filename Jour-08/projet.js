// var prompt = require("prompt");

// prompt.start();

var grid = [

    [rover, " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];




var rover = {
    direction: "N",
    x: 0,
    y: 0
};



function turnLeft(rover) {

    //direction = 1;

    if (rover.direction === "N") {
        rover.direction = "W"

        console.log(rover.direction)

    } else (rover.direction === "W"); {

        rover.direction = "S"

        console.log(rover.direction)
    };

}
turnLeft(rover);



function turnRight(rover) {

    //direction = 1;

    if (rover.direction === "S") {
        rover.direction = "E"

        console.log(rover.direction)

    } else (rover.direction === "E"); {

        rover.direction = "N"

        console.log(rover.direction)
    };

}
turnRight(rover);



function movForward(myRover) {

    myRover.x = 10

        for (var i = 0; i <= 10; i++) {
          
            console.log(myRover)

        }
    

}

movForward(rover)

