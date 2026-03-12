// given an array, give me back a new array in which all the elements are multiplied by 2

const arr = [1,2,3,4,5];

// using a for loop
// const newArr = [];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i] * 2);
//}
// console.log(newArr);

// using map


const ans = arr.map(function(i){
    return i * 2;
});
console.log(ans);



// Filters
// given an array, give me back a new array in which all the elements are even

const arr2 = [1,2,3,4,5,6];

const ans2 = arr2.filter(function(i){
    return i % 2 === 0;
});
console.log(ans2);