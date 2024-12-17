// 1. Write a code which can give grades to students according to theirs marks using Conditionals
// 80%-100%, Distinction
// 60%-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 0%-34%, FAIL

let percentage = 80;

   
        if(percentage >= 80){
            console.log('Distinction');
        }
    
       else if(percentage > 60 && percentage < 80){
            console.log('First class');
        }
        
    
        else if(percentage > 50 && percentage < 60){
                console.log('second class');
         }
        
        else if(percentage > 35 && percentage < 50){
            console.log('pass');
        }
            
        else {
            console.log('fail');
        }
        

