function solution(num_list) {
    let answer = [];
    const newArr = num_list.map(list => list)
    const sortArr = newArr.sort((a,b) => a-b);
    return sortArr.filter((item,index) => index <5);
}