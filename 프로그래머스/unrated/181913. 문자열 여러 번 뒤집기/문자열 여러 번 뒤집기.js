function solution(my_string, queries) {
    let answer = my_string;
    for(let i =0; i<queries.length;i++){
        const preStr = answer.slice(0,queries[i][0])
        const reverseStr = answer.slice(queries[i][0],queries[i][1]+1).split('').reverse().join('')
        const nextStr = answer.slice(queries[i][1]+1)
        answer = preStr+reverseStr+nextStr
    }
    return answer;
}