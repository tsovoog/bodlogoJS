const a = 12670;
if (a >= 60) {
  const sec = a % 60;
  const min = parseInt(a / 60);
  console.log(min, "m", sec, "s");
  if (min >= 60) {
    const hour = parseInt(min / 60);
    const minute = min % 60;
    console.log(hour, "h", minute, "m", sec, "s");
  } else {
    console.log("0", h);
  }
} else {
  console.log("minute boloh bolomjgui too baina");
}

// const seconds = 30;

// const hours = parseInt(seconds / 3600);
// const minutes = parseInt(seconds / 60);
// const sec = seconds % 60;

// console.log({ hours, minutes, sec });
