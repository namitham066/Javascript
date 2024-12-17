// 5. Create an anonymous function that takes an array of numbers and returns the sum of all the numbers

(function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);  
  })([10, 20, 30, 40, 50]);
  