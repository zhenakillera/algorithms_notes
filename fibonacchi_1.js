function fibbonachi(n) {
  if (n == 1 || n == 2) {
    return 1;

  } else if (n == 0) {
    return 0;

  }

  const fib_n = fibbonachi(n - 1) + fibbonachi(n - 2);

  return fib_n;
}

console.log(fibbonachi(35))