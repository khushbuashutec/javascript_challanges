'use strict'
//challange 1
const checkDogs = function (dogJulia, dogKate) {
    const dogsJulia = dogJulia.slice(1, -2);
    console.log(dogsJulia);
    const dogs = dogKate.concat(dogsJulia);
    console.log(`dogs are:${dogs}`);
    dogs.forEach(function (value, i) {
        value >= 3 ? console.log(`Dog ${i + 1} is an adult, and is ${value} Year old`) :
            console.log(`dog ${i + 1} is still a puppy!`);
    })

}


checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//challange 2

// const calcAverageHumanAge = function (dogs) {
//     const humanAge = dogs.map((dog) => dog <= 2 ? 2 * dog : 16 + dog * 4);
//     const adults = humanAge.filter((dog) => dog > 18)
//     console.log(humanAge);
//     console.log(adults);
//     const average = adults.reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
//     console.log(average);
// }
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//challange 3
const calcAverageHumanAge = function (dogs) {
    const humanAge = dogs
        .map(dog => dog <= 2 ? 2 * dog : 16 + dog * 4)
        .filter(dog => dog > 18)
        .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
    console.log(humanAge);
}
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);