// bodlogo 3
const a = 17;
const b = 4;
const c = 30;

if (num1 < num2) {
  if (num2 < num3) {
    console.log("Osoh");
  } else {
    console.log("Osoh bish");
  }
} else {
  console.log("Osoh bish");
}
// bodlogo 4
if (a > b) {
  if (a > c) {
    console.log("max", a);
  } else {
    console.log("max", c);
  }
} else {
  if (b > c) {
    console.log("max", b);
  } else {
    console.log("max", c);
  }
}
// bodlogo 5
if (a > b) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    if (a > c) {
      console.log(a, c, b);
    } else {
      console.log(c, a, b);
    }
  }
} else {
  if (a > c) {
    console.log(b, a, c);
  } else {
    if (b > c) {
      console.log(b, c, a);
    } else {
      console.log(c, b, a);
    }
  }
}

// const a = 11;
// const b = 7;
// const c = a * -1;
// const k = c + b;
// if (k > 0) {
//   console.log("max", b);
// } else {
//   console.log("max", a);
// }
