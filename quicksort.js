const quicksort = (n) => {
  if (n.length <= 1) { return n; }

  const pivot = n[n.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < pivot) {
      left.push(n[i]);
    } else {
      right.push(n[i]);
    }
  }

  const sortedLeft = quicksort(left);
  const sortedRight = quicksort(right);

  return sortedLeft.concat(pivot, sortedRight);
}


console.log(quicksort([1, 8, 3, 5, 4, 7, 7, 2]))