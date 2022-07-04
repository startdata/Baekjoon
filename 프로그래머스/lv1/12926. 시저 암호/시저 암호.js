// function solution(s, n) {
//     let answer = '';
//     let aa = s.charCodeAt()
//     let ss = s.fromCharCode()
//     for( let i =0; i < s.length; i++){
//         aa += s.charCodeAt(i)
//         answer += aa.fromCharCode(i)
//     }
//     return answer;
// }

function solution(s, n) {
   const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
            continue
        }
        
        const upperOrLower = upper.includes(s[i]) ? upper : lower;
        let index = upperOrLower.indexOf(s[i]) + n;
        if(index >= upperOrLower.length) index -= upperOrLower.length;
        answer += upperOrLower[index]
    }
    return answer;
}


/* 
1. 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
2. AB 1만큼 밀면 BC 3 DE
3. 문자열s 거리 n 

아스키 코드 69,70 + 1 + 
*/