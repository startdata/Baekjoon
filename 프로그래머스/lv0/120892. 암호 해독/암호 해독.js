function solution(cipher, code) {
    const a = [];
    const b = [...cipher]
    for(let i =0; i<b.length;i++ ){
        a.push(b[code*(i+1)-1])
    }
    const c = a.join("")
    return c;
}