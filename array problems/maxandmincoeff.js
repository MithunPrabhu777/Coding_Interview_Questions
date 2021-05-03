function minmaxcoff(){
    var min = Infinity;
    var max = -Infinity;
    for(var minvalue of array){
        if(minvalue < min){
            min = minvalue;
        }
    }

    for(var maxvalue of array){
        if(maxvalue > max){
            max = maxvalue;
        }
    }

    var range = max - min;

    var coefficientOfRange = (max - min) / (max + min);

    return {
        min,
        max,
        range,
        coefficientOfRange
    }
}

var array = [15, 16, 10, 9, 6, 7, 17];
console.log(minmaxcoff(array));