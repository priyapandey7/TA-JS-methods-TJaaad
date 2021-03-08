Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

1-parameter: it's don't take any parameter.
2--Return: Make the string uppercase .

Example:

```js

1-let name = "priya pandey";
name.toUpperCase(); //"PRIYA PANDEY"

2-let sports = "cricket";
sports.toUpperCase(); //  "CRICKET"

3- let novel = "who will cry when you die?"
nevel.toUpperCase() //WHO WILL CRY WHEN YOU DIE?.

-toUpperCase its convert the lowercase value into uppercase.

```

3. `toLowerCase`
   1-parameter: it's don't take any parameter.
   2--Return: Make the string uppercase .

Example:

```js
1-let name = " PRIYA PANDEY";
name.toLowerCase(); //"priya pandey"

2-let sports = "CRICKET";
sports.toLowerCase(); //  "cricket"

3- let novel = " WHO WILL CRY WHEN YOU DIE?"
nevel.toLowerCase() //who will cry when you die?.

-toUpperCase its convert the LowerCase value into UpperCase

```

4. `trim`

```js

   1-parameter :-
   2-Return: the new value of the string by removing the whitespaces from both the ends.
1-let bike = "  Hero Honda "
bike.trim() //"Hero Honda"

2- let lapTop = "  lenovo  "
lapTop.trim();// "lenovo"
3- let cellPhone = " Samsung  "
cellPhone.trim(); //"Samsung"

trim -The trim() method returns the string stripped of whitespace from both ends.

```

5. `trimEnd`

```js
   1-parameter :-
   2-Return: so trimEnd remove all the white space from the ends.
   1-let bike = " Hero Honda "
   bike.trimEnd() //" Hero Honda"

2- let lapTop = " lenovo "
lapTop.trimEnd(); // " lenovo"
3- let cellPhone = " Samsung "
cellPhone.trimEnd(); // " Samsung"

trim -The trimEnd() method returns the string stripped of whitespace from the ends.

```

6. `trimStart`

```js
1-parameter :-
2-Return: so triStart remove all the white space from the Start.
1-let bike = "  Hero Honda  "
bike.triStart() //"Hero Honda  "

2- let lapTop = "  lenovo   "
lapTop.trimStart();// "lenovo  "
3- let cellPhone = " Samsung  "
cellPhone.trimStart(); //"Samsung  "

trim -The trimStart method returns the string stripped of whitespace from the start.

```

7. `concat`

```js
Parameter: (string) another string that will be concated (string data type)

Return : return a new value by concating both the strings

Example:

let str1 = "priya";

let str2 = "Pandey";

str1.concat(" cute ", str2);


2-const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
concate - it is used for concatinating multiple string values.
```

8. `endsWith`

```js
searchString
parameter- The characters to be searched for at the end of str.

length Optional
If provided, it is used as the length of str. Defaults to str.length.


return - It will return true or false.
1-let name = priya ;
name.endsWith("pandey"); //  false

2- let school = AltCampus ;
school.endWith(Altcampus);// True;

3- school.endWidth('Al') // true


```

9. `includes`

```js
Parameter: a string we are looking for in different string.

Return : returns a boolean value( i.e.) true if the string we looking for includes or false if it does not.

let str1 = "Once in a blue moon";

let str2 = "moon";

str1.includes(str2); //true
```

10. `indexOf`

```js
Parameter: accepts search value (string data type)
Return : index of the first occurence of the word we are looking for.
Example:
let str = "Be a early bird or a  nightangle.";
str.indexOf("a"); // 3

let str2 = "Go india go"
str2.indexof("india")// 1
```

11. `lastIndexOf`

```js
 Parameter: accepts search value (string data type)

Return : index looks for the last index of that specific value.

Example:

let str = "I am the Student of altcampus.";

str.lastIndexOf("of"); // 17

```

12. `padEnd`

```js
Parameter:
The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.


Return : A string with the total lenght , with padStr applied at the end.

Example:

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200  "

```

13. `padStart`

```js
Parameter: total length, total length of the string which it will return after padding has been applied

padStr: The str to pad with current str.

Return : A string with the total lenght , with padStr applied at the start.

Example:

let name = 'Arya Stark';
 name.padStart("21", "o");  // "oooooooooooArya Stark"
```

14. `repeat`

```js
Parameter: accepts a parameter which indicates the number of times to repeat the string which is a number
Return: the repeated string
Example:
let name = 'Arya Stark';
 name.repeat(2);  // "Arya StarkArya Stark"
```

15. `replace`

```js
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement

Return value
A new string, with some or all matches of a pattern replaced by a replacement.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

```

16. `slice`
17. `split`
18. `substring`

```
The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
let tagline = "All you need to become a software developer";
tagline.substring(21,8); // "need to becom"
```

```


```
