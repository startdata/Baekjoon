const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const splitedStr = [...str]
    const result = splitedStr.map(a => {
        const curCodeAt = a.charCodeAt()
        if(curCodeAt >= 97) return a.toUpperCase()
        return a.toLowerCase()
    })
    
    console.log(result.join(""))
});