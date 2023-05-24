function solution(num_list) {
    let answer = [];
    const newArr = num_list.map(list => list);
    const sortArr = newArr.sort((a,b) => a-b);
    for(let i =0; i<5;i++){
        answer.push(sortArr[i]);
    }
    return answer;
}