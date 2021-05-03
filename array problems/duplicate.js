var shiftingFun = function(nums,rotations) {

    for(let i=0;i<rotations;i++){
        let firstElement = nums.shift();
        nums.push(firstElement)
    }
    return nums;
};

const rotations = 3;
const nums = [1,2,3,4,5];
console.log(shiftingFun(nums,rotations));
