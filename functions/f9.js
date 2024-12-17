// Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. What happens when you call a function before it’s declared?


// function declaration
console.log(add(10,20));
function add(a,b){
    return a+b
}
// function expression
console.log(subtract(10,2));
let subtract = function(a,b){
    return a-b
}

