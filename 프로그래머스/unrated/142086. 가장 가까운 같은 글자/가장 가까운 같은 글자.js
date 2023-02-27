function solution(s) {
    let arr = [];
    let answer = [];
    
    for(let i = 0; i < s.length; i++){
        if(!arr.includes(s[i])){
            answer.push(-1);
            arr.push(s[i]);
            continue;
        }       
        if(arr.includes(s[i])){
            answer.push(arr.length - arr.lastIndexOf(s[i]));
            arr.push(s[i]);
            continue;
        }
    }
    
    return answer;
}