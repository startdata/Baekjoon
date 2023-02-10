function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((answer, value, index) => answer + value * B[index], 0);
}