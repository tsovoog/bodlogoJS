let n;
let count = 0;

const value = prompt("Utgaa oruul bandia");

for (let i = 0; i < +value; i++) {
  if (i % 2 !== 1) {
    console.log(i);
    count++;
  }
  console.log(count);
}
