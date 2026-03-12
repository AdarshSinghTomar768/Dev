function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 2000);  // async function
console.log("This will be printed before the sum is calculated");
