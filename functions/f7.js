// 7.Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sum(...numbers){  

    let total = 0
    for(let element of numbers){
        total += element
    }
    return total

}

console.log(sum(10,20,30,40,50));


