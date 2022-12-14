function solution(my_string) {
    const a = [...my_string]
const b = a.filter((element, index) => {
    return a.indexOf(element) === index;
});
    const c = b.join("")
    return c;
}