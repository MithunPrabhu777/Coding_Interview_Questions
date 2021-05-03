function missing(array){
    newarray = [];
    for(var value of array){
        continue
    }
    newarray.push(value);
    return newarray;
}

var array = [1, 2, 4, 6, 3, 7, 8]
console.log(missing(array));