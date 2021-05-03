function occurence(array){
    count = 0;
    for(var value of array){
        if(value === x){
            count+=1
        }
    }
    return count;
}

var array = [1,2,3];
var x = 4;
console.log(occurence(array,x));