 
 
 

     const nums = [10, 5, 20, 3, 15];

let min = nums[0];
let max = nums[0];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] < min) {
        min = nums[i];
    }

    if (nums[i] > max) {
        max = nums[i];
    }
}
 
console.log("Minimum:", min);
console.log("Maximum:", max);

 