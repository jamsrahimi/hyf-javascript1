"use strict";
// you can use simple block instead of an IIFE
// (thanks George Sapkin for pointing me to this)
{

    console.log("1. Strings!");
    let myString = "hello,this,is,a,difficult,to,read,sentence";
    console.log(myString.length);
    myString = myString.replace(/,/g, " ");
    console.log(myString);

    console.log("\n2.Arrays!");
    let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
    favoriteAnimals.push("turtle");
    console.log(favoriteAnimals);
    favoriteAnimals.splice(1, 0, "meerkat");
    console.log("I think the new array is: blowfish, meerkat, capricorn, giraffe, turtle");
    console.log(favoriteAnimals);
    console.log("The array has a length of:", favoriteAnimals.length);
    favoriteAnimals.splice(3, 1);
    console.log(favoriteAnimals);
    const indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
    console.log("The item you are looking for is at index:", indexOfMeerkat);


    // More JavaScript 1
    function sum(a, b, c) {
        return a + b + c;
    }

    console.log("\nThe sum of 1, 2, and 3 is:", sum(1, 2, 3));
    console.log("The sum of 4, 5, and 6 is:", sum(4, 5, 6));

    // More JavaScript 2
    function colorCar(color) {
        return "a " + color + " car";
    }

    console.log("\n" + colorCar("red"))

    // More JavaScript 3
    const teacher = {
        firstName: "Jim",
        lastName: "Cramer",
        age: 63,
        colorOfEyes: "brown"
    };

    console.log("\nnames and values:")
    for (const key of Object.keys(teacher)) {
        console.log(key + ": " + teacher[key]);
    }

    // More JavaScript 4
    function vehicleType(color, code) {
        // if code is not 1 or 2 default to this string
        let vehicleName = "vehicle of unknown type";
        if (code === 1) {
            vehicleName = "car";
        } else if (code === 2) {
            vehicleName = "motorbike";
        }
        console.log("a " + color + " " + vehicleName);
    }

    console.log();
    vehicleType("blue", 2)

    // More JavaScript 5
    console.log();
    console.log(3 === 3 ? "true" : "false");
    // or, shorter
    console.log(3 === 3);

    // More JavaScript 6
    function vehicle(color, code, age) {
        let carCondition = "new";
        if (age >= 1) {
            carCondition = "used";
        }
        let vehicleName = "vehicle of unknown type";
        if (code === 1) {
            vehicleName = "car";
        } else if (code === 2) {
            vehicleName = "motorbike";
        }
        console.log("a " + color + " " + carCondition + " " + vehicleName);
    }

    console.log();
    vehicle("blue", 1, 5);

    // More JavaScript 7
    let vehicleList = ["car", "motorbike", "caravan", "bike"];

    // MoreJavaScript 8
    console.log("\nthird element:", vehicleList[2]);

    // More JavaScript 9
    function vehicle2(color, age, code) {
        let carCondition = "new";
        if (age >= 1) {
            carCondition = "used";
        }
        // Use the || operator to as a default value if code is out of range
        const vehicleName = vehicleList[code] || "vehicle of unknown type";
        console.log("a " + color + " " + carCondition + " " + vehicleName);
    }

    console.log();
    vehicle2("green", 3, 1);

    // More JavaScript 10
    function ad(list) {
        let text = "";
        for (let i = 0; i < list.length - 1; i++) {
            if (i > 0) {
                text += ", ";
            }
            text += list[i] + "s"
        }
        const lastVehicle = list[list.length - 1];
        const message = "Amazing Joe's Garage, we service " + text + " and " + lastVehicle + "s.";
        console.log(message);
    }

    console.log();
    ad(vehicleList);

    // More JavaScript 11
    vehicleList.push("tractor");
    console.log();
    ad(vehicleList);

    // More JavaScript 12
    const emptyObject = {};

    // More JavaScript 13
    const teachers = {
        "HTML/CSS": [
            "Philip",
            "Dine"
        ],
        "CLI/GIT": [
            "Unmesh"
        ],
        "JavaScript": [
            "Jim",
            "Didac"
        ]
    }
    console.log();
    console.log(teachers);

    // More JavaScript 14
    const teachersAndLanguages = {
        "HTML/CSS": {
            names: ["Philip", "Dine"],
            languages: ["HTML", "CSS"]
        },
        "CLI/GIT": {
            names: ["Unmesh"],
            languages: ["bash", "Git"]
        },
        "JavaScript": {
            names: ["Jim", "Didac"],
            languages: ["JavaScript"]
        }
    };
    console.log();
    console.log(teachersAndLanguages);

    // More JavaScript 15
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;

    console.log("\nx and y are twin brothers but not one and the same person: they are not equal");
    console.log("z and y reference the same array: they are equal");
    console.log("x == y", x == y);
    console.log("x === y", x === y);
    console.log("z == y", z == y);
    console.log("z == x", z == x);

    // More JavaScript 16
    let o1 = { foo: "bar" };
    let o2 = { foo: "bar" };
    let o3 = o2;

    o2.foo = "baz";
    console.log("\no2 was changed: because o3 references the same object it should also be changed:", o3);
    console.log("o2 was changed; o1 is a twin brother to o2 but not the person: it is not changed:", o1);

    // More JavaScript 17
    let bar = 42;
    // typeof typeof bar ?
    console.log();
    console.log(typeof typeof bar);
    // Let's do it again, but now in two steps
    const typeOfBar = typeof bar
    console.log("typeOfBar:", typeOfBar);
    console.log(typeof typeOfBar);
}