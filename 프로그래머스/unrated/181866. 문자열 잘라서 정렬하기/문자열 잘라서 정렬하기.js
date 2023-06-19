function solution(myString) {
    let answer =myString.split('x').filter(x => x !=='').sort()
    return answer;
}