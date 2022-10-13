function solution(price) {
    var answer = 0;
    if(price >= 100000 && price < 300000){
        return answer += Math.floor(price*(95/100))
    } else if(price >= 300000 && price<500000){
        return answer += Math.floor(price*(90/100))
    } else if(price >= 500000){
        return answer += Math.floor(price*(80/100))
    } else {
        return answer += price
    }
    return answer;
}

// 10만원 5%, 30 10%, 50 20%