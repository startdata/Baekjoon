function solution(strlist) {
    var answer = [];
    for(let i =0; i<strlist.length; i++){
        let a = strlist[i].split('')
        answer.push(a.length)
    }
    return answer;
}
