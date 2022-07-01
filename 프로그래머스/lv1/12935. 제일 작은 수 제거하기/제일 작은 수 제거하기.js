function solution(arr) {
    var answer = [];
    const idx = arr.indexOf(Math.min(...arr))
    if(arr.length<=1){
        return [-1];
    } else {
     arr.splice(idx,1)
       return arr;
    }
}