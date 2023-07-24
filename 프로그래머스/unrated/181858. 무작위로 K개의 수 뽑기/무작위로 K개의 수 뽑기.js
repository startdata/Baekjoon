function solution(arr, k) {
    const answer = [];
    for(let i =0; i<arr.length; i++){
        if(!answer.includes(arr[i])){
            answer.push(arr[i])    
        }
        if(answer.length === k) return answer;
    }
    while(answer.length < k){
        answer.push(-1);
    }
    return answer;
}
