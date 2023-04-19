function factorial(n) {
  const stack = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    stack.push(i * stack[i - 1])

  }

  return stack[n]
}

console.log(factorial(10))