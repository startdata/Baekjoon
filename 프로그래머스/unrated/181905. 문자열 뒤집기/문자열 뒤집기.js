function solution(my_string, s, e) {
    const reverseStr = my_string.slice(s,e+1).split('').reverse().join('')
    const preStr = my_string.slice(0,s)
    const nextStr = my_string.slice(e+1)
    const answer = preStr+reverseStr+nextStr
    return answer;
}