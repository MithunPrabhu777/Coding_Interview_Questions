var findDisappearedNumbers = function(nums) {
    let disappeared = [];
    nums.sort();
    for(var i=1;i<=nums.length;i++){
      if(!nums.includes(i)){
        disappeared.push(i);
      }
    }
    return disappeared;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));