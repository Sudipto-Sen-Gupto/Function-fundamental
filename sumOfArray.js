
function array(list){
    console.log(list);
    let sum=0;
    for(let i=0;i<list.length;i++){
        sum=sum+list[i];
    }
    return sum;
}

const listed=array([3,2,5,6,7,8]);
console.log(listed);