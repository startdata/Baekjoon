function solution(n) {
    const d = String(n);
    const arr = [...d];
    const a = d.split('');
    const b = a.sort().reverse();
    const c = b.join('')
        
    return Number(c);
}