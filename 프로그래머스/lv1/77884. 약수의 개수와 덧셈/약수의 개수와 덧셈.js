function solution(left, right) {
  let answer = 0;
  for (let j = left; j <= right; j++) {
    let a = 0;
    for (let i = 1; i <= j; i++) {
      if (j % i === 0) {
        a += 1;
      }
    }
    if (a % 2 === 0) {
      answer += j;
    } else {
      answer -= j;
    }
  }
  return answer;
}
