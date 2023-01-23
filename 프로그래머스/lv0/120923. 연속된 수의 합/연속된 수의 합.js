function solution(num, total) {
  let answer = [];
  let a = 0;
  for (let i = 1; i < num; i++) {
    a += i;
  }
  let b = total - a;
  let c = b / num;
  for (let j = 0; j <= num-1; j++) {
    answer.push(c + j);
  }
  return answer;
}