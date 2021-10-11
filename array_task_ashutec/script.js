
// {
//         0: breakfast
//         1: lunch
//         2: dinner
//     }

// available {
//         0: not available
//         1: available
//     }

foodItems = [
    {
        id: 1,
        name: 'Breakfast 1',
        price: 30,
        foodType: 0,
        available: 1
    },
    {
        id: 2,
        name: 'Breakfast 2',
        price: 50,
        foodType: 0,
        available: 1
    },
    {
        id: 3,
        name: 'Breakfast 3',
        price: 40,
        foodType: 0,
        available: 0
    },
    {
        id: 4,
        name: 'Lunch 1',
        price: 60,
        foodType: 1,
        available: 0
    },
    {
        id: 5,
        name: 'Lunch 2',
        price: 40,
        foodType: 1,
        available: 1
    },
    {
        id: 6,
        name: 'Lunch 3',
        price: 20,
        foodType: 1,
        available: 1
    },


    {
        id: 7,
        name: 'Dinner 1',
        price: 200,
        foodType: 2,
        available: 0
    },
    {
        id: 8,
        name: 'Dinner 2',
        price: 50,
        foodType: 2,
        available: 1
    },
    {
        id: 9,
        name: 'Dinner 3',
        price: 60,
        foodType: 2,
        available: 1
    },

];

const foodItem1 = document.getElementById("item1");
const foodItem2 = document.getElementById("item2");
const foodItem3 = document.getElementById("item3");
const button = document.querySelector('.submit');
// console.log(document.querySelector(".btn_open"))

//1.
const breakfastItem = foodItems.filter(val => val.foodType === 0);
const lunchItem = foodItems.filter(val => val.foodType === 1);
const dinnerItem = foodItems.filter(val => val.foodType === 2);
console.log(breakfastItem, lunchItem, dinnerItem);

//2.
const availableFood = foodItems.filter(val => val.available === 1);
console.log('available food= ', availableFood);

//3.
const costlyBreakfast = breakfastItem.filter(val => val.price > 50);
const costlyLunch = lunchItem.filter(val => val.price > 50);
const costlyDinner = dinnerItem.filter(val => val.price > 50);
console.log(costlyBreakfast, costlyLunch, costlyDinner);

const check = function (value) {
    if (value > 0 && value < 10) {
        return foodItems.find((food) => value == food.id);
    } else {
        return ""
    }

}

button.addEventListener('click', function (e) {
    e.preventDefault();
    const checkedItem = [];
    checkedItem.push(check(Number(foodItem1.value)));
    checkedItem.push(check(Number(foodItem2.value)));
    checkedItem.push(check(Number(foodItem3.value)));
    console.log(checkedItem);
    const totalPrice = checkedItem.reduce((acc, item) => item.available === 1 ? acc + item.price : acc + 0, 0);
    const unavailableItem = checkedItem.filter(val => val.available === 0);
    console.log(`total price of available items:${totalPrice}`, unavailableItem);

});

const newFood = new Map();

newFood.set('breakfast', breakfastItem.sort((a, b) => a.price - b.price));
newFood.set('Lunch', lunchItem.sort((a, b) => a.price - b.price));
newFood.set('Dinner', dinnerItem.sort((a, b) => a.price - b.price));

const newFoodItems = { newFood };
console.log(newFoodItems);