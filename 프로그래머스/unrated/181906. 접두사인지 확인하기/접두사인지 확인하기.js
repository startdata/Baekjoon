function solution(my_string, is_prefix) {
    const result = []
    const prefixies = [...my_string].reduce((acc, cur, idx) => {
        const sliceWord = my_string.slice(0, idx+1)
        
        return [...acc, sliceWord]
    }, [])
    
    return prefixies.includes(is_prefix) ? 1 : 0
}