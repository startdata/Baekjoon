function solution(s) {
    let b = s
    const string = [
        'zero','one','two','three','four','five','six','seven','eight','nine'
    ]
    for(let i = 0; i<string.length; i++){
            b = b.replaceAll(string[i],i)    
    }
    return parseInt(b);
}