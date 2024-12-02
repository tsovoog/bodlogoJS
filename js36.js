const mult = [];
let mult1 = 1;
if (mult.length === 0) {
  mult1 = 0;
}
for (let i = 0; i < mult.length; i++) {
  mult1 *= mult[i];
}
console.log(mult1);
