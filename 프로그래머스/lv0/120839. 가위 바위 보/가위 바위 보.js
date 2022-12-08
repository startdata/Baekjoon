function solution(rsp) {
    const a = [...rsp]
    const b = []
    for(let i =0; i<a.length; i++){
        if(a[i] === '2'){
            b.push('0')
        } else if(a[i] === '0'){
            b.push('5')
        } else {
            b.push('2')
        } 
    }
    const c = b.join("")
    return c;
}