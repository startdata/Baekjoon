function solution(n) {
    var answer = 0;
    const a = n**(1/2)
    if(a%1 === 0 ){
        return (a+1)**2;
    } else {
        return -1;        
    }

}