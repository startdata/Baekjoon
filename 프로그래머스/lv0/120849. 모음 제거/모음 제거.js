function solution(my_string) {
    const answer = [...my_string].filter(a => ['a','e','i','o','u'].includes(a) ? false : true).join("")
        return answer
}