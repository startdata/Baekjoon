function solution(bin1, bin2) {
    const a = parseInt(bin1,2)
    const b = parseInt(bin2,2)
    const c = a+b
    const d = c.toString(2);
    return d;
}