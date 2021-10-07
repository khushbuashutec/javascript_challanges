'use strict'
// //challange 1
// const checkDogs = function (dogJulia, dogKate) {
//     const dogsJulia = dogJulia.slice(1, -2);
//     console.log(dogsJulia);
//     const dogs = dogKate.concat(dogsJulia);
//     console.log(`dogs are:${dogs}`);
//     dogs.forEach(function (value, i) {
//         value >= 3 ? console.log(`Dog ${i + 1} is an adult, and is ${value} Year old`) :
//             console.log(`dog ${i + 1} is still a puppy!`);
//     })

// }


// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

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
// const calcAverageHumanAge = function (dogs) {
//     const humanAge = dogs
//         .map(dog => dog <= 2 ? 2 * dog : 16 + dog * 4)
//         .filter(dog => dog > 18)
//         .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
//     console.log(humanAge);
// }
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//challenge 4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
//1.
dogs.forEach((dog) => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);
//2.
const sarahDogs = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(sarahDogs);
console.log(`Sarah dog is eating Too ${sarahDogs.curFood > sarahDogs.recommendedFood ? 'much' : 'little'}`);

//3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
//4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too Little`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6.
const checkEating = dog => dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEating));

//7.
console.log(dogs.filter(checkEating));

//8.
const dogSorted = dogs.slice().sort((a, b) =>
    a.recommendedFood - b.recommendedFood);
console.log(dogSorted);