function solution(n)
{
    let sum =0;
    let a = n.toString();
    let b = a.split('');
    for(let i = 0; i<b.length; i++){
        sum += parseInt(b[i])
    }
    return sum
}