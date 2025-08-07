
function boolean(rabindra,marks){
    if(rabindra===true){
        let result=marks*5;
        return result;
    }
    else{
        result=marks*2;
        return result;
    }
}

let namCall=boolean(true,30);
console.log(namCall);