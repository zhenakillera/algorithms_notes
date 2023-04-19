// Frequently used in .sort() methods of JS Engines due to it's best/worst case scenario O(n log n) complexity.

const mergeSort = (n) => {
  if (n.length <= 1) { return n };

  const leftN = n.slice(0, n.length / 2);
  const rightN = n.slice(n.length / 2);

  const sortedLeft = mergeSort(leftN);
  const sortedRight = mergeSort(rightN);

  return merge(sortedLeft, sortedRight);
};

const merge = (sortedArray1, sortedArray2) => {
  const results = [];

  while (sortedArray1.length && sortedArray2.length) {
    if (sortedArray1[0] <= sortedArray2[0]) {
      results.push(sortedArray1.shift())
    } else {
      results.push(sortedArray2.shift())
    }
  }

  return results.concat(sortedArray1, sortedArray2);
};


console.log(mergeSort([1, 3, 2, 5, 5, 9, 7]));