function solution(my_string) {
    const a = my_string.toLowerCase()
    const b = [...a].sort().join('')
    return b;
}