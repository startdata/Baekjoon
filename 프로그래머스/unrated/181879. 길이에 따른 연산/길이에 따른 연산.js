function solution(num_list) {
    let multi = 1;
    let sum = 0;
    if(num_list.length < 11){
        for(let i =0; i<num_list.length; i++){
            multi *= num_list[i]            
        }
        return multi
    } else {
        for(let i =0; i<num_list.length; i++){
            sum += num_list[i]
        }
        return sum
    }

}