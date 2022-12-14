function solution(before, after) {
    before = [...before].sort()
    after = [...after].sort()
    return before.filter((a,i) => a === after[i]).length === after.length ? 1 : 0
}