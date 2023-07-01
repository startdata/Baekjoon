function solution(arr) {
    const isTwo = (num) => {
        return (num & (num - 1)) === 0;
    }
    
    let len = arr.length;
    while(1) {
        if(isTwo(len)) break;
        else len++;
    }
    
    if(arr.length === len) return arr;
    else {
        const extra = Array(len - arr.length).fill(0);
        return [...arr, ...extra];
    }

}