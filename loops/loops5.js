// 5. Write a program that uses a for in loop to loop through an object and prints the key-value pairs.
let x = {name:'John',class:10, place:'mysore' };
for (let element in x){
    console.log(element + ":"+x[element]);
    
}