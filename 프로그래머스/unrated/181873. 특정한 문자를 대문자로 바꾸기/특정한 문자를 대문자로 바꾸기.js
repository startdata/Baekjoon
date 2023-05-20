function solution(my_string, alp) {
    let a = my_string.split("");
    let arr = [];
    for(let i =0; i<a.length;i++){
        if(a[i] === alp){
            let str = a[i].toUpperCase();
            arr.push(str);
        } else {
            arr.push(a[i]);
        }
    }
    return arr.join("").replaceAll(',','');
}