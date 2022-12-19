function solution(balls, share) {
    let a = 1;
  let b = 1;
  for (let i = balls; i > balls - share; i--) {
    a *= i;
  }
  for (let i = share; i >= 1; i--) {
    b *= i;
  }
  const c = a / b;

  return c;
}

// 3c2  3*2 2*1 balls 가 share 개수 만큼만 곱 3 =2
// 5c3 5*4*3