function solution(my_string) {
    let answer = [];
    const a = [...my_string]
    for(let i =0;i<my_string.length;i++){
        let b = a.join('')
        answer.push(b)
        a.shift()
    }
    return answer.sort();
}