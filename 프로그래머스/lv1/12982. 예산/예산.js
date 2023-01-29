function solution(d, budget) {
   let c = d.sort((a, b) => a - b);
  let a = budget;
  let b = 0;
  for (let i = 0; i < c.length; i++) {
    if (a >= c[i]) {
      a -= c[i];
      b++;
    } else {
      continue;
    }
  }
  return b;
}