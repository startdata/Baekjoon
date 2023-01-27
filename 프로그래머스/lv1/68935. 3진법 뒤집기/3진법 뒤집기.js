function solution(n) {
    const a = n.toString(3)
    const b = [...a]
    let c = 0;
    for(let i =0; i<b.length; i++){
        c+=parseInt(b[i]) * 3**i
    }
    return c;
}