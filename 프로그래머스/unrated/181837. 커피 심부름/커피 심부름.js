function solution(order) {
    var answer = 0;
    for(let i =0; i<order.length;i++){
        if(order[i].includes('latte')){
            answer += 5000
        } else {
            answer += 4500
        }
    }
    return answer;
}

// 4500 5000
// 메뉴만 = 차가운 , 아무거나 아아
// 