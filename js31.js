const maximum = [1, 2, 3, 4];
let a = maximum[0];
for (let i = 0; i < maximum.length; i++) {
  if (a < maximum[i]) {
    a = maximum[i];
  }
}
console.log(a);
