var majorityElement = function(nums) {
    var length = nums.length; 
    var ht = {};

for(var key of nums){
    ht[key] = ht[key] + 1 || 1;
}

for(var key of nums){
    if(ht[key] > Math.floor(length/2)){
        return key;
    }
}
};

const nums = [3,2,3]
console.log(majorityElement(nums));


