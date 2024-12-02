let n = 0;
for (i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  n += i;
  //   console.log(n);
}
console.log(n);
