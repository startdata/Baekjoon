// function solution(n) {
//     const arr = [];
//     const b = n.toString();
//     const a = b.split('').reverse();
//     for(let i =0; i<a.length; i++){
//         return arr.push(Number(a[i]))
//     }
//     return arr
// }
function solution(n) {
    var nStr = n.toString();
    var answer = [];
    for( let i = nStr.length-1; i >= 0; i-- ) {
      answer.push(Number(nStr[i]));
    }
    return answer;
}