var moveZeroes = function(nums) {
    for(var i=0; i < nums.length;i++){
       if(nums[i] === 0){
           var zero = Number(nums.splice(i,1));
           nums.push(zero);
       }
       if(0 === nums[nums.length - 1]){
           nums.shift(0);
           nums.push(0);
       }
    }
    return nums;
};

nums = [0,0,1];
console.log(moveZeroes(nums));