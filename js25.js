let n = 1;
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 1) {
    n *= i;
    console.log(n);
  }
}
