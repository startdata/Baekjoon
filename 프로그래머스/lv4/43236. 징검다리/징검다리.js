function solution(distance, rocks, n) {
    var answer = 0;
    let st = 1
    let en = distance
    rocks.sort((a,b) => a-b)
    while(st <= en) {
        const mid = Math.floor((st+en)/2)
        const rmRockCount = count(rocks, mid, distance)
        if(rmRockCount <= n) {
            answer = Math.max(answer, mid)
            st = mid + 1
        } else en = mid - 1
    }
    return answer
}

function count(rocks, mid, distance) {
    let prev = 0
    let cnt = 0
    for(let i=0; i<rocks.length; i++) {
        if(rocks[i] - prev < mid) cnt++
        else prev = rocks[i]
    }
    if(distance - prev < mid) cnt++
    return cnt 
}
