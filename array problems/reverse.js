function reverse(array1){
    var reversed = [];
    for(var i=array1.length - 1; i >= 0 ; i--){
        reversed.push(array1[i]);
    }
    return reversed;
}

var array1 = [1,2,3,4,5];
console.log(reverse(array1));