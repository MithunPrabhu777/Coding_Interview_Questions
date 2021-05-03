function merge(array1,array2){
    var intersection = [];
    var result = [];
    var i = 0;
    var j = 0;
    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            result.push(array1[i]);
            i++;
        }else if (array1[i] > array2[j]){
            result.push(array2[j]);
            j++;
        }else{
            intersection.push(array1[i]);
            i++;
        }
    }
    while(j < array2.length){
        result.push(array2[j]);
        j++;
    }

    while(i < array2.length){
        result.push(array1[i]);
        i++;
    }

    // if(result[result.length - 1] === undefined){
    //     result[result.length - 1] = null;
    // }

    return {
        result,
        intersection
    }
}

var array1 = [2, 5, 6];
var array2 = [4, 6, 8, 10];
console.log(merge(array1,array2));