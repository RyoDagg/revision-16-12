// While & For loops, Recursion || Material

/*****************************  1  ***********************/
//  Using a for loop THEN a while loop
//  Write a JavaScript function that will iterate from 0 to n. For each iteration,
//  it will check if the current number is odd or even, and display a message on the screen.
//  iterateAndLog(3); =>
//  Sample Output :
//  "0 is even"
//  "1 is odd"
//  "2 is even"
//  "3 is odd"

function iterateAndLogWithFor(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

function iterateAndLogWithWhile(n) {
  var i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
    i++;
  }
}

/*****************************  2  ***********************/
//  Using a for loop THEN a while loop THEN recursion
//  Write a JavaScript function that will iterate from n to 0. For each iteration,
//  it will check if the current number is odd or even, and display a message to the screen.
//  iterateAndLog(3); =>
//  Sample Output :
//  "2 is even"
//  "1 is odd"
//  "0 is even"

function reverseIterateAndLogWithFor(n) {
  for (var i = n - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

function reverseIterateAndLogWithWhile(n) {
  var i = n - 1;
  while (i >= 0) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
    i--;
  }
}

function reverseIterateAndLogRecursively(n) {
  if (n <= 1) {
    console.log("0 is even");
  } else {
    if ((n - 1) % 2 === 0) {
      console.log(n - 1 + " is even");
    } else {
      console.log(n - 1 + " is odd");
    }
    reverseIterateAndLogRecursively(n - 1);
  }
}

/*****************************  3  ***********************/
//  Using a for loop THEN a while loop
//  Write a function that:
//  Loop through the numbers 1 to n
//  If the number is divisible by 3, print "Julia"
//  If the number is divisible by 5, print "James"
//  If the number is divisible by 3 and 5, print "JuliaJames"
//  If the number is not divisible by 3 or 5, print the number

function weirdDivisionWithFor(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("JuliaJames");
      } else {
        console.log("Julia");
      }
    } else if (i % 5 === 0) {
      console.log("James");
    } else {
      console.log(i);
    }
  }
}

function weirdDivisionWithWhile(n) {
  var i = 0;
  while (i <= n) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("JuliaJames");
      } else {
        console.log("Julia");
      }
    } else if (i % 5 === 0) {
      console.log("James");
    } else {
      console.log(i);
    }
    i++;
  }
}

//  now recursively do the same function but looping from n to 1 instead of 1 to n

function inverseWeirdDivisionRecursively(n) {
  if (n === 0) {
    console.log("JuliaJames");
  } else {
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        console.log("JuliaJames");
      } else {
        console.log("Julia");
      }
    } else if (n % 5 === 0) {
      console.log("James");
    } else {
      console.log(n);
    }
    inverseWeirdDivisionRecursively(n - 1);
  }
}

/*****************************  4  ***********************/
//  Using a for loop THEN a while loop THEN Recursively
//  Write a function called laugh() that takes one parameter,
//  num that represents the number of "ha"s to return.
//  laugh(6); => "hahahahahaha"

function laughWithFor(number) {
  var haha = "";
  for (var i = 0; i < number; i++) {
    haha += "ha";
  }
  return haha;
}

function laughWithWhile(number) {
  var haha = "";
  var i = 0;
  while (i < number) {
    haha += "ha";
    i++;
  }
  return haha;
}

function laughRecursively(number) {
  if (number === 0) {
    return "";
  }
  return "ha" + laughRecursively(number - 1);
}

/*****************************  5  ***********************/
//  Using a for loop THEN a while loop
//  Create a function that calculates the sum of a number as follows:
//  factorial(3); => 3+2+1 = 6
//  factorial(5); => 5+4+3+2+1 = 15
function sumWithWhile(number) {
  var sum = 0;
  var i = 0;
  while (i <= number) {
    sum = sum + i;
    i++;
  }
  return sum;
}

function sumWithFor(number) {
  var sum = 0;
  for (var i = 0; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

/*****************************  6  ***********************/
//  Using recursion
//  Create a function that calculates the factorial of a number
//  factorial(3); => 3*2*1 = 6
//  factorial(5); => 5*4*3*2*1 = 120
function factorialRecursively(number) {
  if (number === 0) {
    return 1;
  }
  return factorialRecursively(number - 1) * number;
}

/*****************************  7  ***********************/
//  Using a for loop THEN a while loop
//  Write a JavaScript program to get the integers in range (x, y)
//  and store then in an array
//  Example:
//  range(3,9); => [3, 4, 5, 6, 7, 8]

function rangeFor(min, max) {
  var range = [];
  for (var i = min; i < max; i++) {
    range.push(i);
  }
  return range;
}

function rangeWhile(min, max) {
  var range = [];
  var i = min;
  while (i < max) {
    range.push(i);
    i++;
  }
  return range;
}

/*****************************  8  ***********************/
//  Using a for loop THEN a while loop THEN recursion
//  Write a function that takes a string and returns the same string reversed
//  reverse('abc'); => 'cba'
//  reverse('erf4') => '4fre'

function reverseWithWhile(str) {
  var reverse = "";
  var i = 0;
  while (i < str.length) {
    reverse = str.charAt(i) + reverse;
    i++;
  }
  return reverse;
}

function reverseWithFor(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    reverse = str.charAt(i) + reverse;
  }
  return reverse;
}

function reverseRecursively(str) {
  if (str === "") {
    return "";
  }
  return reverseRecursively(str.slice(1)) + string[0];
}

/*****************************  9  ***********************/
//  Using a for loop OR a while loop
//  You are given an integer. Return the sum of its digits.
//  Example:
//  addDigits(29); => 11
//  addDigits(90); => 9
//  addDigits(1231635132132); => 33

function addDigits(num) {
  var n = num;
  var sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

/*****************************  10  ***********************/
//  RECURSIVELY
//  Write a JavaScript program to get the first n Fibonacci numbers
//  That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
//   Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
//   with the exception of the first two: fib(0) and fib(1). More succinctly,
//   fib(0) is 1
//   fib(1) is 1
//   fib(n) is fib(n - 1) + fib(n - 2)
//   Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.

function fibRecursive(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return fibRecursive(number - 1) + fibRecursive(number - 2);
  }
}

/*****************************  11  ***********************/
//  Write a function that returns the first digit in a string using a for/while loop
//  (digits may be anywhere in the string)
//  firstDigit('sdsa3dsad020a2'); => 3
//  firstDigit('tdhs020a2'); => 0

function firstDigit(str) {
  var digit = "";
  var i = 0;
  while (digit === "" && i < str.length) {
    if (str[i] <= "9" && str[i] >= "0") {
      digit = str[i];
    }
    i++;
  }
  return digit;
}

/*****************************  12  ***********************/
//  Write a function remove that accepts an array and an element, and returns an
//  array with all ocurrences of element removed.
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]

function remove(array, element) {
  while (array.indexOf(element) !== -1) {
    array.splice(array.indexOf(element), 1);
  }
  return array;
}

/*****************************  13  ***********************/
//  Write a function called average that takes an array of numbers as
//  a parameter and returns the average of those numbers.

function average(arrOfNumbers) {
  var result = 0;
  var l = arrOfNumbers.length;
  for (var i = 0; i < l; i++) {
    result = result + arrOfNumbers[i];
  }
  return result / l;
}

/*****************************  14  ***********************/
//  Write a function that returns the maximum number in an array of numbers
//  findMax([1, 6, 8, 20, 6, -1, 9]); => 20
//  findMax([1, 6, 9, 0]); => 9

function findMax(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

/*****************************  15  ***********************/
//  Check if all digits of the given integer are even
//  the function should return only true if all the digits are even
//  evenDigitsOnly("1253"); => false
//  evenDigitsOnly("62680"); => true
//  evenDigitsOnly("62680"); => true
//  NOTE: YOUR FUNCTION TAKES A STRING REPRESENTATION OF A NUMBER AND NOT THE NUMBER ITSELF
//  note that in the example, we called evenDigitsOnly("62680"), not evenDigitsOnly(62680)

function evenDigitsOnly(input) {
  n = input;
  var digit;
  while (n > 0) {
    digit = n % 10;
    if (digit % 2 !== 0) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
}

/*****************************  16  ***********************/
// Create a function that checks if a string is a palindrome (google it)
// palindrome('aaba'); => false
// palindrome('kayak'); => true
// palindrome('2002'); => true

function palindrome(string) {
  var l = string.length;
  var i = 0;
  while (i < Math.floor(l / 2)) {
    if (string.charAt(i) !== string.charAt(l - i - 1)) {
      return false;
    }
    i += 1;
  }
  return true;
}

/*****************************  17  ***********************/
// Write a function that return the first duplicate element in a given array of numbers
// Example:
// firstDuplicate([2, 1, 6, 5, 1, 3, 0]); => 1
// firstDuplicate([2, 1, 2, 5, 1, 3, 0]); => 2
// firstDuplicate([2, 1, 6, 5, 8, 3, 0]); => "No duplicates"

function firstDuplicate(array) {
  for (var i = 0; i < array.length; i++) {
    const element = array[i];
    const subArray = array.slice(i + 1);
    if (subArray.indexOf(element) !== -1) {
      return element;
    }
  }
  return "No duplicates ☺ ☻ ☺";
}

/*****************************  18  ***********************/
// Theater seats often display a row and seat number to help theatergoers find their seats.
// If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for
// loop to print out all of the different seat combinations in the theater.

function findCombinations() {
  var row;
  for (var i = 0; i < 26; i++) {
    row = "";
    for (var j = 0; j < 100; j++) {
      row += "(" + i + ", " + j + ") ";
    }
    console.log(row);
  }
}
