// Your code goes here
function convert() {
  let args = Array.from(arguments);
  const result = args.map(x => {
    if (typeof x === 'number') {
      x = x + '';
    } else if (typeof x === 'string') {
      x = parseInt(x, 10);
    }
    return x;
  });
  return result;
}

// -------------------------------------------------------------------------

function executeforEach(arr, callback) {
  arr.forEach(el => callback(el));
}

// -------------------------------------------------------------------------

function mapArray(arr, callback) {
  let result = arr.map(el => callback(parseInt(el)));
  executeforEach(arr, el => el);
  return result;
}

// -------------------------------------------------------------------------

function filterArray(arr, callback) {
  let result = arr.filter(callback);
  executeforEach(arr, el => el);
  return result;
}

// -------------------------------------------------------------------------

function flipOver(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// -------------------------------------------------------------------------

function makeListFromRange(arr) {
  let result = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result;
}

// -------------------------------------------------------------------------

function getArrayOfKeys(arr, key) {
  let result = [];
  executeforEach(arr, actor => {
    key = actor.name;
    result.push(key);
  });
  return result;
}
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

// -------------------------------------------------------------------------

function substitute(arr) {
  let result = [];
  executeforEach(arr, item => result.push(item < minNumber ? '*' : item));
  return result;
}

// -------------------------------------------------------------------------

function getPastDay(date, days) {
  let result = new Date(date);
  result.setDate(date.getDate() - days);
  return result;
}

// -------------------------------------------------------------------------

function formatDate(date) {
  const minValue = 10;
  let hours = date.getHours() < minValue ? '0' + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < minValue ? '0' + date.getMinutes() : date.getMinutes();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
}

/* eslint-disable no-magic-numbers */
/* eslint-disable brace-style */

console.log(convert('1', 2, 3, '4'));

executeforEach([1, 4, 5], el => console.log(el * 2));

console.log(
  mapArray([2, '5', 8], function(el) {
    return el + 3;
  })
);

console.log(
  filterArray([2, 5, 8], function(el) {
    return el % 2 === 0;
  })
);

console.log(flipOver('Hey There'));

console.log(makeListFromRange([2, 7]));

console.log(getArrayOfKeys(actors, 'name'));

const minNumber = 30;
console.log(substitute([58, 14, 48, 2, 31, 29]));

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));
