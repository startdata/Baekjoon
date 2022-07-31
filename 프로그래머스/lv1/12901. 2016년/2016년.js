function solution(a, b) {
    return new Date(2016, a-1,b).toString().slice(0,3).toUpperCase()
}

//a 월 b 일
// 2016년 

//월화수목금토일 
// 1/1
// a == 12월 까지
// b == 1357 / 81012 31
// b == 46 / 9 11 30
// b == 29일
