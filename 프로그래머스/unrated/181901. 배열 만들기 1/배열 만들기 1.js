function solution(n, k) {
    var answer = [];
    for(let i =1; i<=n;i++){
        answer.push(i)
    }
    let sol = answer.filter(num => num % k === 0)
    return sol;
}