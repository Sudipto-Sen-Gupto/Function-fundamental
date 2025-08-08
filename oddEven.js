// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number){
  if(number%2!==0){
    let result=number*2;
    return result;
  }
  else{
    result=number/2;
    return result;
  }
}
const res=oddEven(44);
console.log(res);
