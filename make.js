module.exports = function make(...args) {
  const arr = [...args];
  function inner(...args2) {
    if (typeof args2[0] !== 'function') {
      arr.push(...args2);
      return inner;
    }
    return arr.reduce(args2[0]);
  }
  return inner;
}
