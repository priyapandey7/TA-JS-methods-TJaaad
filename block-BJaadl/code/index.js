let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array) {
  return [...array].sort((a, b) => a.length - b.length).pop();
}
console.log(findLongestWord);

// - Convert the above array "words" into an array of length of word instead of word.

let length = words.map((p) => p.length);

console.log(length);

// - Create a new array that only contains word with atleast one vowel.
function checkVowel(words) {
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("o")
  );
}
let filtered = words.filter((v) => checkVowel(v));

console.log(filtered);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let noVowel = words.filter((v) => !checkVowel(v)[0]);

// - Create a new array that contianse words not ending with vowel
let notEndWithVowel = words.filter((v) => !checkVowel(v)[v.length - 1]);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyBy3 = numbers.map((v) => v * 3);
console.log(multiplyBy3);

// - Create a new array that contains only even numbers
let oddNumber = numbers.filter((v) => v % 2 !== 0);
console.log(evenNumber);

// - Create  a new array that contains only odd numbers.
numbers.sort((a, b) => a - b);

// - Create a new array that should have true for even number and false for odd numbers.
let oddOrEven = numbers.map((v) => v % 2 === 0);

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?

// Yes, sort mutate the original array.

// - Find the sum of the numbers in the array.

numbers.reduce((acc, cv) => acc + cv);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
  let length = array.length;
  let total = array.reduce((acc, cv) => acc + cv);
  return total / length;
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(words) {
  let wordsLength = words
    .map((value) => value.length)
    .reduce((acc, cv) => acc + cv);
  return wordsLength;
}
