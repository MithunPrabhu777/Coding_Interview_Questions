var mapping = function (array){
    var newarray =  array.map(function(value,index,array){
        console.log(`value: ${value} , index: ${index} , array: [${array}] `);
    })
    return newarray;
}

const array = [2,3,4,5,6,7]
mapping(array);