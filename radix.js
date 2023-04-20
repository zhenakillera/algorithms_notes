const getLongestNumber = (n) => {
  longestNum = 0;
  for (item of n) {
    itemLength = item.toString().length
    longestNum = itemLength > longestNum ? itemLength : longestNum;
  }

  return longestNum;
}

const getDigit = (number, place, longestNumber) => {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

const radixSort = (array) => {
  const longestNumber = getLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift())
      }
    }
  }

  return array;

}

console.log(radixSort([1, 100, 25, 2526, 0, 12, 22294, 2]))