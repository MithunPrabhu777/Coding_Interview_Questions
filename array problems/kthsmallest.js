function smallestIndex(array,k){
    array.sort((a,b) => a -b);
    var value = array[k - 1];
    return value;
}

var array = [7, 10, 4, 3, 20, 15];
var k = 4;
console.log(smallestIndex(array,k));