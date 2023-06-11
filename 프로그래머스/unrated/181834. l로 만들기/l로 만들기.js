function solution(myString) {
    const type = ['a','b','c','d','e','f','g','h','i','j','k']
    let answer = [...myString].map(a => type.includes(a) ? 'l' : a).join('')
    
    return answer;
}
