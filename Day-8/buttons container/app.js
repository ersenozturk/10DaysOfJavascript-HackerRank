const btn5 = document.querySelector(('#btn5'))

let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

btn5.onclick= () => {
    
     nums.unshift(nums.pop())

    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
}