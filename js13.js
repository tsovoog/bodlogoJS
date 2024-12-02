const a = 94;
const b = 12;
const c = 33;
const d = 8;
if (a > b) {
  if (b > c) {
    if (c > d) {
      console.log("min", d);
    } else {
      console.log("min", c);
    }
  } else {
    if (b > d) {
      console.log("min", d);
    } else {
      console.log("min", b);
    }
  }
} else {
  if (a > c) {
    if (c > d) {
      console.log("min", d);
    } else {
      console.log("min", c);
    }
  } else {
    if (a > d) {
      console.log("min", d);
    } else {
      console.log("min", a);
    }
  }
}
