function fibonacchi(n) {
  const stack = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    stack.push(stack[i - 2] + stack[i - 1])

  }

  return stack[n]
}

console.log(fibonacchi(1476))