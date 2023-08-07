function solution(arr) {
  var answer = [];
  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i += 1) {
      const newArr = [...arr[i]];
      for (let j = arr[0].length; j < arr.length; j += 1) {
        newArr.push(0);
      }
      answer.push(newArr);
    }
  } else if (arr.length < arr[0].length) {
    for (let i = 0; i < arr[0].length; i += 1) {
      if (arr[i]) {
        answer.push(arr[i]);
      } else {
        const newArr = Array(arr[0].length).fill(0);
        answer.push(newArr);
      }
    }
  } else if (arr.length === arr[0].length) {
    for (let i = 0; i < arr.length; i += 1) {
      answer.push(arr[i]);
    }
  }
  return answer;
}