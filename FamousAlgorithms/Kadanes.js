function maxSumSubarray(list) {
  let localMax = list[0];
  let globalMax = list[0];
  for(let i=0; i< list.length; i++) {
    localMax = Math.max(localMax + list[i], list[i]);
    globalMax = Math.max(globalMax + localMax);
  }

  return globalMax;
}

const list = [-2, -1, 3, -2, 4, 3, -3, 5]

const maxSum = maxSumSubarray(list);
console.log(maxSum);