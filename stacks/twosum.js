function twosum(nums,target){
    for(let i=0;i<nums.length - 1;i++){
        for(let j = 1; j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                console.log([i,j]);
            }
        }
    }
}

var nums = [2,7,11,15];
var target = 9;
console.log(twosum(nums));    // [0,1]