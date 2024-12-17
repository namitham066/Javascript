// 9.Write a program that reverses a string using a loop.

let string = "Hello";
let reverse = "";
for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];  
}
console.log("Reversed string is:", reverse);

