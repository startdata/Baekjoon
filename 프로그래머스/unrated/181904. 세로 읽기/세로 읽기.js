function solution(my_string, m, c) {
    let result = '';
    
    while(my_string.length) {
        result += my_string[c - 1];
        my_string = my_string.slice(m);
    }
    
    return result;
}