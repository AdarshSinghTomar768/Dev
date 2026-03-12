function sum(num1,num2,funToCall){
    let result = num1 + num2;
    funToCall(result);
}

function displayResult(data){
    console.log("The result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sums result is: " + data);
}

const ans = sum(5, 10, displayResult);
console.log(ans);