function solution(A, B) {
    if(A===B) return 0;

    let total = 0;
    let arr = A.split("");
    
    for (let i = arr.length-1; i >= 0; i-- ){
        let tmp = arr.splice(arr.length-1, 1)[0]
        arr.unshift(tmp);
        total++
        if(arr.join("") === B) return total;
    }
    return -1;
}