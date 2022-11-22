function compare(a, b) {
  return Number(a.toString() + b.toString()) >
    Number(b.toString() + a.toString())
    ? a
    : b;
}

function sort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      let currentMax = compare(a[i], a[j]);
      if (currentMax === a[j]) {
        a[j] = a[i];
        a[i] = currentMax;
        continue;
      }
    }
  }
  return a;
}

console.log(sort([20, 9, 3, 2]));
