const a = 22;
const b = 2;
const c = 4;
const d = 1;
let mult = 1;
let count = 0;
if (a < 5) {
  mult *= a;
  count++;
}
if (b < 5) {
  mult *= b;
  count++;
}
if (c < 5) {
  mult *= c;
  count++;
}
if (d < 5) {
  mult *= d;
  count++;
}
if (count >= 2) {
  console.log(mult);
} else {
  console.log(0);
}
