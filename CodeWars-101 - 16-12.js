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
