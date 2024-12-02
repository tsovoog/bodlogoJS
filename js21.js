let n = 0;
for (i = 0; i < 30; i++) {
  if (i % 2 === 0) {
    continue;
  }
  n += i;
  console.log(n);
}
