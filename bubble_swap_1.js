function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];

        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;


      }
    }
  } while (swapped) {

  }

  return nums;
}

console.log(bubbleSort([3, 2, 7, 12, 9, 1]))

