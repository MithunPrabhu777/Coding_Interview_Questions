var singleNumber = function(nums) {
    var hashtable = {};
    for(let key of nums){
        hashtable[key] = hashtable[key] + 1 || 1;
    }
};

nums = [2,2,3,2];
console.log(singleNumber(nums));