const arr = [13, 26, 10, 7];
arr.sort(compareNum);
console.log(arr)

function compareNum(a, b){ 
    return a - b;
}