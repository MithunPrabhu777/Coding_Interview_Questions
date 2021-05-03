function rearrange(array){
    var negativevalues = [];
    var positivevalues = [];
    for(var number of array){
        if(number < 0){
            negativevalues.push(number);
        }else{
            positivevalues.push(number);
        }
    }
    return negativevalues.concat(positivevalues);
}

var array = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
console.log(rearrange(array));