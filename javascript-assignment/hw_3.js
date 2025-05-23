// 1. Reverse a number
function reverseNum(num) {
  let str = num.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return parseInt(rev);
}
console.log(reverseNum(12345)); // 54321

// 2. Check palindrome
function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return str === rev;
}
console.log(isPalindrome("madam")); // true

// 3. All combinations of a string
function stringCombos(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log(stringCombos("dog"));

// 4. Alphabetical order
function sortLetters(str) {
  return str.split('').sort().join('');
}
console.log(sortLetters("webmaster")); // abeemrstw

// 5. Capitalize first letter of each word
function capitalizeWords(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // Hello World

// 6. Longest word
function longestWord(str) {
  let words = str.split(' ');
  let long = "";
  for (let word of words) {
    if (word.length > long.length) long = word;
  }
  return long;
}
console.log(longestWord("Web Development Tutorial"));

// 7. Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("The quick brown fox")); // 5

// 8. Check prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true

// 9. Return type
function checkType(val) {
  return typeof val;
}
console.log(checkType(42)); // number

// 10. Identity matrix
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
console.log(identityMatrix(3));

// 11. Second lowest and greatest
function secondLowHigh(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}
console.log(secondLowHigh([1, 2, 3, 4, 5])); // [2, 4]

// 12. Perfect number
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
console.log(isPerfect(28)); // true

// 13. Factors
function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}
console.log(getFactors(12)); // [1, 2, 3, 4, 6, 12]

// 14. Convert to coins
function toCoins(amount, coins) {
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log(toCoins(46, [25, 10, 5, 2, 1]));

// 15. Power
function power(b, n) {
  return b ** n;
}
console.log(power(2, 3)); // 8

// 16. Unique characters
function uniqueChars(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) result += char;
  }
  return result;
}
console.log(uniqueChars("abcabc")); // abc

// 17. Letter count
function letterCount(str) {
  let count = {};
  for (let char of str) {
    if (char.match(/[a-z]/i)) {
      char = char.toLowerCase();
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}
console.log(letterCount("Hello World"));

// 18. Binary search
function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

// 19. Larger than number
function largerThan(arr, num) {
  return arr.filter(n => n > num);
}
console.log(largerThan([10, 20, 30, 40], 25)); // [30, 40]

// 20. Random string
function randomId(len) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < len; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log(randomId(8));

// 21. Subsets of length 2
function subsets(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}
console.log(subsets([1, 2, 3]));

// 22. Count letter
function countLetter(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) count++;
  }
  return count;
}
console.log(countLetter("banana", "a")); // 3

// 23. First non-repeated
function firstUnique(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}
console.log(firstUnique("aabbcdd")); // c

// 24. Bubble sort (descending)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([4, 2, 8, 1])); // [8, 4, 2, 1]

// 25. Longest country name
function longestCountry(list) {
  let long = "";
  for (let name of list) {
    if (name.length > long.length) long = name;
  }
  return long;
}
console.log(longestCountry(["India", "United States of America", "Australia"]));

// 26. Longest substring without repeating
function longestUniqueSub(str) {
  let seen = {}, start = 0, maxLen = 0, result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char] >= start) start = seen[char] + 1;
    seen[char] = i;
    if (i - start + 1 > maxLen) {
      maxLen = i - start + 1;
      result = str.slice(start, i + 1);
    }
  }
  return result;
}
console.log(longestUniqueSub("abcabcbb")); // abc

// 27. Longest palindrome
function longestPalindrome(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (substr === substr.split('').reverse().join('') && substr.length > max.length) {
        max = substr;
      }
    }
  }
  return max;
}
console.log(longestPalindrome("babad")); // bab or aba

// 28. Function as argument
function runFunc(fn) {
  return fn();
}
console.log(runFunc(() => "Hello from function"));

// 29. Get function name
function showName() {
  return showName.name;
}
console.log(showName()); // showName
