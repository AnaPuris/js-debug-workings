'use strict';

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     console.log (`Today`);
// } else if (daysUntilDeadline === 1) {
//     console.log (`Tomorrow`);
// } else if (daysUntilDeadline === 2) {
//     console.log (`Overmorrow`);
// } else if (daysUntilDeadline >= 3) {
//     console.log (`Date in the future`);
// }



// function getLastElementMeta(array) {
// let lastElementIndex = array.length - 1;
// let arrayNew = [lastElementIndex, array[lastElementIndex]];

// return arrayNew;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
// console.log(getLastElementMeta(["apple"]));





// function getExtremeElements(array) {
// let lastElement = array.length - 1;
// let arrayNew = [array[0], array[lastElement]];
// return arrayNew;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); //[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //["apple", "banana"]


const employees = [
    { name: "Jessica", hours: 30 },
    { name: "Sarah", hours: 20 },
    { name: "David", hours: 45 },
    { name: "John", hours: 40 },
    { name: "Susan", hours: 38},
]

function calculateWeeklyPay(employees) {
    let totalPay = 0;
    for (let i = 0; i <= employees.length; i++) {
        totalPay = hours * rate;
    } return totalPay;
}

