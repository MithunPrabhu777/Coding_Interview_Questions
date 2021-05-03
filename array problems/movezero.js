var moveZeroes = function(nums) {
    let anchor = 0;
    for(let explorer = 0; explorer < nums.length;explorer++){
        if(nums[explorer] !== 0){
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;
            anchor++;
        }
    }
    return nums;
};

nums = [0,0,1];
console.log(moveZeroes(nums));