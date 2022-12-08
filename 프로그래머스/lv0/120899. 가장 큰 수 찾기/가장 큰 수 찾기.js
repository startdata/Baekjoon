function solution(array) {
    const d = array.map(list => list)
    const a = d.sort((a,b)=> b-a)
    const b = array.indexOf(a[0])
    const c = [a[0],b]
    return c;
}