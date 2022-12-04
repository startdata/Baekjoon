function solution(my_string, n) {
    const aa = my_string.split("")
    let bb =[]
    for(let i =0;i<aa.length; i++){
        let d = aa[i].repeat(n)
        bb.push(d)
    }
    const answer = bb.join().replaceAll(",", "");
    return answer;
}