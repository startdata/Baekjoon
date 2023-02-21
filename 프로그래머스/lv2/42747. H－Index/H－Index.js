function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => a-b)
    for(let i =0; i<citations.length; i++){
        if(citations[i] >= citations.length-i){
            return answer = citations.length-i
        }
    }
    return answer;
}