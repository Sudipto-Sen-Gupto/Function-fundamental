
function array(list){
    console.log(list);
    let newList=[];
    let sum=0;
    for(let item of list){
        if(item%2===0){
            newList.unshift(item);
            sum=sum+item;
        }
    }
      console.log("Summation of even number of array=",sum);
        return newList
}

const newArray=array([34,35,65,94,32,56,45])
console.log(newArray);