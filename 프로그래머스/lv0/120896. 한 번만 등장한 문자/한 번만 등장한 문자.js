function solution(s) {
    const dict = {}

    s.split("").forEach(a => dict[a] !== undefined ? dict[a]+=1 : dict[a] = 1)
    return Object.entries(dict).map(a => a[1] === 1 ? a[0] : null).filter(a => a !== null).sort().join("")
    
}    