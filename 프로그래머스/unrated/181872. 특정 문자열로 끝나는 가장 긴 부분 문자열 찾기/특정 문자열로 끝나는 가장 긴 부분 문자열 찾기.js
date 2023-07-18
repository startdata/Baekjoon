function solution(myString, pat) {
    const result = []
    myString.split("").forEach((a, i) => {
        const curStr = myString.slice(0, i+1)
        if(curStr.endsWith(pat)) {
            result.push(curStr)
        }
    })
    return result.sort((a, b) => b.length - a.length)[0]
}