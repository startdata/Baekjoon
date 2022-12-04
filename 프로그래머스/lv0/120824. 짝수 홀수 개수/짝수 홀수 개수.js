function solution(num_list) {
    let o = 0;
    let s = 0;
    for (let i =0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            o += 1
        } else {
            s += 1
        }
    }
    let answer = [o, s];
    return answer;
}