function solution(my_string, letter) {

    const answer = my_string.replaceAll(letter,'')
    return answer;
}