function solution(a, b) {
    let str = Number(a+""+b)
    let num = 2*a*b
    if(str > num){
        return str
    } else {
        return num
    }
}

