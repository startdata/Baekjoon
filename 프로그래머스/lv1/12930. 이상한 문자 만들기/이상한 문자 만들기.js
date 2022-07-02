function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length ; j++){
            if(j % 2 !== 0){
                answer = answer + arr[i][j].toLowerCase()
            } else {
                answer = answer + arr[i][j].toUpperCase()
            }
        }
        if (i < arr.length -1){
            answer = answer + " ";
        }
    }
    return answer;
}