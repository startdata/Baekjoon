function solution(q, r, code) {
    let arr = [...code]
    let answer = []
    for(let i=0;i<arr.length;i++){
        if(i % q === r){
            answer.push(arr[i])
        }
    }
    return answer.join("");
}