function solution(s) {

    let answer = [0,0]

    while(s !== '1') {
        s = s.split(''); // 배열로 변환
        let temp = s.filter(v => v === '1').length; // s 중 1의 개수
        answer[0] ++; // 변환 횟수 +1
        answer[1] += s.length - temp; // 빼는 0의 개수 저장 
        s = temp.toString(2); // 1의 개수를 이진수로 변환 후, 저장
    }

    return answer;
}