// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
   
    // binary.split("");
    let string="";
    let count=0;
  for( const x of binary){
      if(x==='0'){
         
         count ++;
         string +=x;
      } 
  }
 console.log(count);
    return string;
  
}
const str=count_zero("1001101");
console.log(str);