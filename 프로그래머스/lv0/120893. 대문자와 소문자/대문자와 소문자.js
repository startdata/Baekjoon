function solution(my_string) {
    const arr = []
    const str = my_string.toUpperCase()
    const strArr = [...str]
    const myArr = [...my_string]
    for(let i =0; i<my_string.length;i++){
        if(strArr.includes(myArr[i])){
            arr.push(myArr[i].toLowerCase())
        } else {
            arr.push(myArr[i].toUpperCase())
        }
    }
    return arr.join("");
}