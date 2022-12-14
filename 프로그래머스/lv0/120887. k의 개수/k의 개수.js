function solution(i, j, k) {
    
const a = [...Array(j-i+1).fill(0).map((a,idx) => (i+idx)+'').join("")].filter(a => a === (k+'')).length
return a
}
