function bubbleSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const tempNum = nums[j];

        nums[j] = nums[j + 1];
        nums[j + 1] = tempNum;

      }
    }
  }
  return nums;
}
