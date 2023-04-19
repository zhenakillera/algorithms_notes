function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let j;

    for (j = i - 1; nums[j] > currentNum && j >= 0; j--) {
      nums[j + 1] = nums[j];

    }

    nums[j + 1] = currentNum;

  }

  return nums;
}

console.log(insertionSort([3, 2, 7, 12, 9, 1]))