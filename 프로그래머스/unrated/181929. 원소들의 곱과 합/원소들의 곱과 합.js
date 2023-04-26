function solution(num_list) {
    let plus = 0;
    let multi = 1;    
    for(let i =0; i<num_list.length; i++){
        multi *= num_list[i]
        plus += num_list[i]
    }
    if(multi > plus*plus){
        return 0
    }else {
        return 1
    }

}