function solution(arr) {
    var answer = [];
    const stk = [];
    for(let i =0; i<arr.length;i++){
        if(stk.length === 0){
            stk.push(arr[i])
        } else if(stk.at(-1) === arr[i]){
            stk.pop()
        } else if(stk.at(-1) !== arr[i]){
            stk.push(arr[i])
        }
    }
    if(stk.length === 0){
        return [-1]
    } else{
        return stk;    
    }
}