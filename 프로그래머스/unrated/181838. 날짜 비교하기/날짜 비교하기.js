function solution(date1, date2) {
    let date_A = new Date(date1.join().replaceAll(',','-'))
    let date_B = new Date(date2.join().replaceAll(',','-'))
    if(date_A < date_B){
        return 1
    } else {
        return 0
    }
}