function solution(strArr) {
    let answer = [];
    for(let i =0; i<strArr.length;i++){
        if(i === 0){
            let a = strArr[i].toLowerCase();
            answer.push(a)
        }
        else if(i % 2 === 0){
            let a = strArr[i].toLowerCase();
            answer.push(a)
        }else {
            let a = strArr[i].toUpperCase();
            answer.push(a)
        }
    }
    return answer
}