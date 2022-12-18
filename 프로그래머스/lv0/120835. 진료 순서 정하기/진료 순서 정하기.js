function solution(emergency) {
  const b = emergency.map((list) => list).sort((a, b) => b - a);
  const a = [];
  for (let i = 0; i < b.length; i++) {
    const c = b.indexOf(emergency[i]);
    a.push(c + 1);
  }

  return a;
}