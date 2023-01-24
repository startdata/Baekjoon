function solution(numbers) {
    let answer = 0;
    const b = numbers.sort((a,b) => a-b)
    for(let i =0; i<10; i++){
        if(!b.includes(i)){
            answer += i
        }
    }
    return answer;
}