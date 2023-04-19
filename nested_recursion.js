// Recursive function that returns the sum of every element
// of nested array X

x = [10, 12, 6, [[3, 8], 4, [3, 5, [2]], 3]]

let num = 0;
function getArraySum(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      getArraySum(array[i])

    } else if (typeof array[i] === "number") {
      num += array[i]
    }
  }
  return num;
}

console.log(getArraySum(x))