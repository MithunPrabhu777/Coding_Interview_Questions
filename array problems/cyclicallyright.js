function cycle(array,rotation){
    for(var i=0;i < rotation; i++){
        let shiftedValue = array.shift();
        array.push(shiftedValue);
    }
    return array;
}

var array = [1,2,3,4,5];
var rotation = 3;
console.log(cycle(array,rotation));