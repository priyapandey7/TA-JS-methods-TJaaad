let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array

let peopelName = persons.map((person) => person.name);
console.log(peopelName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopelSex = persons.map((person) => person.sex);
console.log(peopelSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = peopelName.filter((name) =>
  name.startsWith("J") || name.startsWith("P") ? true : false
);
console.log(filterName);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

// Log all the filtered male ('M') in persons array
console.log(persons.filter((person) => person.sex === "M"));

// Log all the filtered female ('F') in persons array
console.log(persons.filter((person) => person.sex === "F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array

let evenNumbers = peopleGrade.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Find the first name that starts with 'J' in persons array and log the object
let startWithJ = persons.find((letter) => letter.name.startsWith("J"));
console.log(startWithJ);

// Find the first name that starts with 'P' in persons array and log the object

let startWithp = persons.find((letter) => letter.name.startsWith("P"));
console.log(startWithp);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let firstNameStartJ = persons.find(
  (element) =>
    element.name.startsWith("J") && element.grade > 10 && element === "F"
);
console.log(firstNameStartJ);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);

// Sort the peopleGrade in descending order

peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);
console.log(peopleGrade);

// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
console.log(peopelName);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();
console.log(peopelName);
