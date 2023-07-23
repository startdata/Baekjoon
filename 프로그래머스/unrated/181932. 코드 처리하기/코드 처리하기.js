function solution(code) {
    const codeArr = [...code]
    const ret = []
    let mode = 0;
    for(let i=0; i<codeArr.length;i++){
        if(mode === 0){
            if(codeArr[i] !== '1' && i % 2=== 0){
                ret.push(codeArr[i])
            }
            if(codeArr[i] ==='1'){
                mode = 1;
            }
        } else {
            if(codeArr[i] !== '1' && i%2 ===1){
                ret.push(codeArr[i])
            }
            if(codeArr[i] === '1'){
                mode = 0;
            }
        }
    }
    return ret.length === 0 ? "EMPTY":ret.join('');
}