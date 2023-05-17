function solution(my_string, index_list) {
    var answer = [];
    let str = my_string.split("")
     for(let i =0; i<index_list.length;i++){
       answer.push(str[index_list[i]])
     }
    return answer.join().replaceAll(',','');
}