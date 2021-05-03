Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}

const array1 = [2,3,4,5,6,7];
console.log(array1.myFilter());