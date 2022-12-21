function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length];
}
// 서서 공부 던지기  1번부터 한명 건너뛰고  그다음 사람에게만
// 4
// 1 -> 3 => 1 => 3 => 1
// 6
// 1 => 3 => 5 => 1 => 3
// 짝수
// 12345
// 1=>3=>5=>2=>4 홀짝

