function getSubsequencie(word) {
  if (word === '') {
    return ''
  }

  const first = word.charAt(0);
  const rest = getSubsequencie(word.substring(1));

  let result = '';

  rest.split(',').forEach(subseq => {
    result += ',' + first + subseq;
    result += ',' + subseq;
  });

  return result.substring(1);
}

const subsequence = getSubsequencie('abc');

console.log(subsequence);