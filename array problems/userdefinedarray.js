Array.prototype.mymap = function (callback) {
    var newarray = [];
    for(let i=0; i < this.length;i++){
        newarray.push(callback(this[i] * 2));
    }
    return newarray;
}

array = [1,2,3];
console.log(array.mymap());