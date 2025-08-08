// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 
function make_avg(array){
    let sum=0;
    let average;
    for(let item=0;item<array.length;item++){
       
        sum =sum+array[item];
         average=(sum/array.length-1).toFixed(2);
    }
    // for(const item of array){
    //     sum=sum+item;
    // }
    return average;
}

const list=make_avg([3,34,5,54,67,24]);
console.log(list);