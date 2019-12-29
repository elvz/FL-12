function makeNumber(string) {
  let result = Number.parseInt(string.replace(/[^+\d]/g, ''));

  return isNaN(result) ? '' : result;
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));
