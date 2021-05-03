function binarySearch(array,left,right){

    
    while(left <= right){
        var mid = Math.floor((left + right)/2);
        if(array[mid] === mid){
            return mid;
        }
        else if(array[mid] < mid){
            left = mid + 1;
            return binarySearch(array,left,right)
        }else{
            right = mid - 1;
            return binarySearch(array,left,right);
        }
    }
    return -1;
}

var array = [-10, -5, 0, 3, 7];
var left = 0;
var right = array.length - 1;
console.log(binarySearch(array,left,right));