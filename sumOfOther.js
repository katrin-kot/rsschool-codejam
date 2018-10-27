function sumOfOther(arr) {
  const sum = arr.reduce((acc, num) => acc + num);
  return arr.map(num => {
    return sum - num;
  });
}
