function solution(strArr) {
    let answer = strArr.filter(a => !a.includes('ad'))
    return answer;
}