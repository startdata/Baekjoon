function solution(myString) {
    let answer = myString.split('x')
    let arr = [];
    for(let i =0; i<answer.length;i++){
        arr.push(answer[i].length);
    }
    
    return arr;
}