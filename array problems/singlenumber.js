var singleNumber = function(nums) {
    var result = 0;
    for(let num in nums){
        result ^= num;
    }
    return result;
};

nums = [2,2,1];
console.log(singleNumber(nums));