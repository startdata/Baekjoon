function solution(strArr) {
    let answer = strArr.map((list, index) => 
      index % 2 === 0 ? list.toLowerCase() : list.toUpperCase())
    return answer
}