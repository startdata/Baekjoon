function solution(l, r) {
    const ret = Array.from({length : r - l + 1}, (_, index) => index + l).filter(item => {
        return String(item).replace(/['0','5']/gi, '').length === 0;
    });
    return ret.length === 0 ? [-1] : ret;
}