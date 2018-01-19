'use strict'
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
//ref: https://github.com/HackYourFuture/JavaScript/blob/master/fundamentals/objects.md
let listOfVehicles = ["car", "motorbike", "caravan", "bike", "boat"]
function advertise1(types) {
    let message = 'Amazing Joe\'s Garage, we service ';

    const firstTypes = types.slice(0, -1);
    const lastType = types.slice(-1);

    for (let i = 0; i < firstTypes.length; i++) {
        message += i > 0 ? ', ' : '';
        message += firstTypes[i] + 's';
    }

    message += ' and ' + lastType + 's.';

    console.log(message);
}

// Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.
advertise1(listOfVehicles);