function addOne(x = 0) {
  return x + 1;
}

function pipe(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(pipe(1, addOne(), addOne(), addOne(), addOne()));
