function solution(array) {
    var answer = 0;
    const a = array.sort((a,b) => a-b)
    if(a.length % 2 === 0){
        const b = Math.floor(a.length/2)
        return a[b-1]
    } else {
        const b = Math.floor(a.length/2)+1
        return a[b-1]
    }
}