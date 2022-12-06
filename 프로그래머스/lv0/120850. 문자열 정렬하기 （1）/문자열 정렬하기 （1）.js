function solution(my_string) {
    const a = [...my_string].filter(a => ['0','1','2','3','4','5','6','7','8','9','10'].includes(a) ? true : false).sort((a,b) => a-b)
    const b = a.map(item => {
      return Math.floor(item)
    })
    return b;
}