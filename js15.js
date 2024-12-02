const a = 4;
const b = 9;
const c = 5;
const d = 11;
const e = 1;
const f = 6;
let mult = 1;
let count = 0;

if (a > 5) {
  mult *= a;
  count++;
}
if (b > 5) {
  mult *= b;
  count++;
}
if (c > 5) {
  mult *= c;
  count++;
}
if (d > 5) {
  mult *= d;
  count++;
}
if (e > 5) {
  mult *= e;
  count++;
}
if (f > 5) {
  mult *= f;
  count++;
}
if (count >= 2) {
  console.log(mult);
} else {
  console.log(0);
}
