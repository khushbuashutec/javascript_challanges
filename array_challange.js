'use strict'

const checkDogs = function (dogJulia, dogKate) {
    const dogsJulia = dogJulia.slice(1, -2);
    console.log(dogsJulia);
    const dogs = dogKate.concat(dogsJulia);
    console.log(dogs);
    dogs.forEach(function (value, i) {
        value >= 3 ? console.log(`Dog ${i + 1} is an adult, and is ${value} Year old`) :
            console.log(`dog ${i + 1} is still a puppy!`);
    })

}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);