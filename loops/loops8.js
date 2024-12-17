// 8.Write a program that finds the largest number in an array using a for of loop.

let numbers = [10, 20, 30, 40, 50,60];
let largest = numbers[0];
for (let num of numbers) {
    if (num > largest) {
        largest = num;  
    }
}
console.log("The largest number is:", largest);

