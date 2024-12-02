const remove = [1, 2, 2, 2, 3, 2, 4, 4];
const afterRemove = [];
for (let i = 0; i < remove.length; i++) {
  if (!afterRemove.includes(remove[i])) {
    afterRemove.push(remove[i]);
  }
}
console.log(afterRemove);
