function solution(n) {
    var answer = 0;
     for (let i =1; i<=10; i++){
        if(n >= getFactory(i)){
            answer = i
            continue;
        } else {
            break;
        }
    }
    return answer;
}
 const getFactory = (num) => {
    if(num > 1) return num*getFactory(num-1)
    return num
    }