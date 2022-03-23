// https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true

function getSecondLargest(nums) {
    nums = new Set(nums);
    nums = Array.from(nums);
    nums = nums.sort((a,b)=>{return a-b})
    return nums[nums.length-2]
    
}
