
/* solution: 1 */
/**
* time limit execeded
*/
var NumArray = function(nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
  var sum = 0;
  for (i; i <= j; i++) {
    sum += this.nums[i];
  }
  console.log(sum);
  return sum;
};

var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0,2);
numArray.sumRange(2,5);
numArray.sumRange(0,5);
/* END: solution: 1 */




/* solution: 2 */

 /**
  * @constructor
  * @param {number[]} nums
  */
 var NumArray = function(nums) {
   this.sums = [];
   var i = 0, sum = 0;
   for (i; i < nums.length; i++) {
      sum += nums[i];
      this.sums.push(sum);
   }
 };

 /**
  * @param {number} i
  * @param {number} j
  * @return {number}
  */
  /**
  * time limit execeded
  */
 NumArray.prototype.sumRange = function(i, j) {
   console.log(this.sums[j] - (i > 0 ? this.sums[i - 1] : 0));
   return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
 };

 var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 numArray.sumRange(0,2);
 numArray.sumRange(2,5);
 numArray.sumRange(0,5);


 /**
  * Your NumArray object will be instantiated and called as such:
  * var numArray = new NumArray(nums);
  * numArray.sumRange(0, 1);
  * numArray.sumRange(0, 2);
  */
  /* solution: 2 */
