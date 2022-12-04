function solution(n) {
    let answer = 0;
    for (let i =1; i<n+1;i++){
        if(n % i == 0){
          answer += 1
        }
    }
    return answer;
}

// 자연수  이 매개변수로 주어질