function solution(arr1, arr2) {
    const sumArr1 = arr1.reduce((ac,cu) => ac+cu)
    const sumArr2 = arr2.reduce((ac,cu) => ac+cu)
    if(arr1.length < arr2.length){
        return -1
    }
    if(arr1.length > arr2.length){
        return 1
    }
    if(arr1.length === arr2.length){
        if(sumArr1 > sumArr2){
            return 1
        } else if(sumArr1 === sumArr2) {
            return 0
        } else {
            return -1
        }
    }
}