// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd 

function odd_even(intvalue){
    if(intvalue%2!==0){
        return "Odd Number";
    }
    else
           return  "Even number";
}
const number=odd_even(33);
console.log(number);