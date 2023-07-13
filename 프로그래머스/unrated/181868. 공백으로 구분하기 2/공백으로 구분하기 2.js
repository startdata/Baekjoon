function solution(my_string) {
    const arr = my_string.split(' ').filter(x => x!=='')
    return arr;
}