let n;
let count = 0;

const value = prompt("Utgaa oruul");

for (let i = 0; i < +value; i++) {
  if (2 * i + 1 < +value) {
    console.log(2 * i + 1);
    count++;
  }
  console.log(count);
}
