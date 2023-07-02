function solution(strArr) {
    const dict={}
    // key: 문자열 길이, value: 문자열 목록
    strArr.forEach(item => {
        const len = item.length
        dict[len] = dict[len] ?? []
        dict[len].push(item)
    })
    // 길이 별 목록 수의 최댓값
    const values = Object.values(dict).map(a => a.length)
    return Math.max(...values)
}

