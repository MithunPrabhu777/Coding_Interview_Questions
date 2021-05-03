function secondLargest(array){
    array.sort((a,b) => (a-b));
    array.pop();
    let secondlargest = array.pop();
    return secondlargest;
}

array = [10,5,8,20];
console.log(secondLargest(array));