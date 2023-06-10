function solution(myString, pat) {
    let answer = [...myString].map(a => a === 'A' ? 'B' : 'A').join('')
    return answer.includes(pat) ? 1 : 0;
}