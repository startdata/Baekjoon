function solution(num_list) {
    const answer = num_list.map(list => list);
    if(num_list[num_list.length-1] > num_list[num_list.length-2]){
        answer.push(num_list[num_list.length-1] - num_list[num_list.length-2])
    } else {
        answer.push(num_list[num_list.length-1] * 2)
    }
    return answer;
}