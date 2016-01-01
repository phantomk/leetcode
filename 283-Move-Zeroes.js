/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0, j = 0;
  for (i; i < nums.length; i ++) {
    if(nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (j; j < nums.length; j ++) {
    nums[j] = 0;
  }
};
