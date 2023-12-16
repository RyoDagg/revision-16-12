// Sum of nested table

const sumNested = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  var sum = 0;
  if (Array.isArray(arr[0])) {
    return sumNested(arr[0]) + sumNested(arr.slice(1));
  } else {
    return arr[0] + sumNested(arr.slice(1));
  }
};

// Mutual Recursion
function F(n) {
  if (n === 0) {
    return 1;
  }
  return n - M(F(n - 1));
}

function M(n) {
  if (n === 0) {
    return 0;
  }
  return n - F(M(n - 1));
}
