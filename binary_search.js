console.log("Index of searched element:", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))

function binarySearch(array, id) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (array[index] < id) {
      min = index + 1;
    } else if (array[index] > id) {
      max = index - 1;
    } else {
      return index;
    }
  }

  return void 0;
}
