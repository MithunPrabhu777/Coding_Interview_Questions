function sort(array){
    for(var i=0;i < array.length-1;i++){
        for(j=1;j < array.length;j++){
            if(array[i] > array[j]){
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}


array = [6,3,4,1,2,8,7];
console.log(sort(array));