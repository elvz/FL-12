function countNumbers(string) {
  let tmpStr = string.replace(/[^+\d]/g, '');
  let tmpArr = [];

  for (let s of tmpStr) {
    tmpArr.push(s);
  }

  tmpArr.sort((a, b) => {
    return a - b;
  });

  let count = {};
  tmpArr.forEach(function(i) {
    count[i] = (count[i] || 0) + 1;
  });

  return count;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));
