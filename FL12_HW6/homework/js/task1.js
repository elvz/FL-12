// Your code goes here
let a = +prompt('Enter coefficient A');
let b = +prompt('Enter coefficient B');
let c = +prompt('Enter coefficient C');
let arr = quadraticEquation(a, b, c);
let d = arr[0];
console.log(`Discriminator: ${d}`);
console.log(result());

function result() {
  let two = 2;
  if (d < 0) {
    return 'false';
  } else if (isNaN(d)) {
    return 'false';
  } else if (a === 0) {
    return 'false';
  }
  if (d === 0) {
    if (isNaN(arr[1])) {
      return 'false';
    }
    return `x = ${arr[1]}`;
  } else if (d > 0) {
    return `x1 = ${arr[1]}, x2 = ${arr[two]}`;
  }
}

function quadraticEquation(a, b, c) {
  let two = 2;
  let four = 4;
  let discr = (a, b, c) => b * b - four * a * c;
  let d = discr(a, b, c);
  if (d < 0) {
    return [d];
  }

  let x1 = (-b + Math.sqrt(d)) / (two * a),
    x2 = (-b - Math.sqrt(d)) / (two * a);

  return [d, x1, x2];
}

