function solution(array) {
    const b = [];
    const a = array.join("").split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "7") {
      b.push(a[i]);
    }
  }
  return b.length;
}