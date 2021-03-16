Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

````js
1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
````

```js

2. `join`

The join() method returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,).

- Parameters: This method accept single parameter as mentioned above and described below:

- separator: It is Optional i.e, it can be either used as parameter or not.Its default value is comma(, ).
- Return Value: It returns the String which contain the collection of array’s elements.
```

```js
-Example-1: In this example the function join() joins together the elements of the array into a string using ‘|’.
var a = [1, 2, 3, 4, 5, 6];
print(a.join('|'));

Output:
// 1|2|3|4|5|6

Example 2: In this example the function join() joins together the elements of the array into a string using ‘, ‘ since it is the default value.
var a = [1, 2, 3, 4, 5, 6];
print(a.join());

Output:
// 1, 2, 3, 4, 5, 6

Example 3: In this example the function join() joins together the elements of the array into a string using ‘ ‘ (empty string).
var a = [1, 2, 3, 4, 5, 6];
print(a.join(''));

Output:
//123456

-`Join` The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

  - No it does not mutate the original array
-
```

````js
3. `flat`

-parameter : flat accept one, a single parameter  that defines what depth they will making it flat.
depth: It specifies, how deep the nested array should be flattened. The default value is 1 if no depth value is passed as you guess it is an optional parameter.
Syntax:
arr.flat([depth])
-return-A new array with the sub-array elements concatenated into it.

```
Example 2: We can also remove empty slots or empty values in an array by using flat() method.

    let arr = [1, 2, 3, , 4];
    let newArr = arr.flat();
    console.log(newArr);
Output:
[1, 2, 3, 4]

// Creating multilevel array
    const numbers = [['1', '2'], ['3', '4',
                     ['5',['6'], '7']]];

    const flatNumbers= numbers.flat(Infinity);
    document.write(flatNumbers);
// Ourtput: 1,2,3,4,5,6,7
- `flat` - flate is used for creating a flat structure of array.
- No flat does not mutate the array.

````

```js
4`push`;

The arr.push() method is used to push one or more values into the end of array. This method changes the length of the array by the number of elements added to the array.

Syntax:

arr.push(element1, elements2 ....., elementN]])
Parameters This method contains as many numbers of parameters as the number of elements to be inserted into the array.

Return value: This method returns the new length of the array after inserting the arguments into the array.

Example-1
function func() {
        var arr = ['p', 'ri', 'ya'];

        // Pushing the element into the array
        arr.push('Pandey');
          console.log(arr);

    }
    func();
Output:
["p", "ri", "ya", "Pandey"]

Example-2

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

Example-3

var arr = [34, 234, 567, 4];
console.log(arr.push('jacob',true,23.45));
console.log(arr);
 7
// Output(7) [34, 234, 567, 4, "jacob", true, 23.45]


```

```js
5`indexOf`
The arr.indexOf() method is used to find the index of the  element .
Syntax:
array.indexOf(element, start)
Paramaters: This method accepts two parameters as mentioned above and described below:

element: This parameter holds the element which index will be return.
start: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.

Return value: This method returns the index of the first occurrence of the element. If the element cannot be found in the array, then this method returns -1.

Example 1: In this example the method will searched for the element 2 in that array return that element indesx.
Input : [1, 2, 3, 4, 5].indexOf(2);
Output: 1
Example 2: In this example the method will searched for the element 9 in that array if not found then return -1.
Input : [1, 2, 3, 4, 5].indexOf(9);
Output: -1
Example-3
 var name = [ 'gfg', 'cse', 'geeks', 'portal' ];

    a = name.indexOf('gfg')

    // Printing result of method
    document.write(a);
// output-0

Example-4
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('giraffe'));
// expected output: -1

```

```js
6`lastIndexOf`;
The arr.lastIndexOf() method is used to find the index of the last occurrence of the search element provided as the argument to the function.

Syntax:
array.lastIndexOf(element, start)

Paramaters: This method accepts two parameters as mentioned above and described below:

element: This parameter holds the element which index will be return.

start: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.
Return value: This method returns the index of the first occurrence of the element. If the element cannot be found in the array, then this method returns -1.

Example 1: In this example the method will searched for the element 2 in that array return that element index.
Input : [1, 2, 3, 4, 5].lastIndexOf(2);
// Output: 1

Example 2: In this example the method will searched for the element 9 in that array if not found then return -1.
Input : [1, 2, 3, 4, 5].lastIndexOf(9);
//Output: -1

Example-3
 var name = [ 'gfg', 'cse', 'geeks', 'portal' ];
    a = name.lastIndexOf('cat')
    document.write(a);
// Output:-1
```

```js
7. `includes`
The array.includes() method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

Syntax:

array.includes(searchElement, start)
Parameter: This method accepts two parameters as mentioned above and described below:

searchElement: This parameter holds the element which will be searched.
start: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.
Return Value: It returns a Boolean value i.e, either True or False.

Example 1: In this example the method will searched for the element 2 in that array.
Input : [1, 2, 3, 4, 5].includes(2);
//Output: true

Example 2: In this example the method will searched for the element 9 in that array.
Input : [1, 2, 3, 4, 5].includes(9);
//Output: false

Example-3
var A = [ 1, 2, 3, 4, 5 ];
    a = A.includes(2)
    // Printing result of includes().
    console.log(a);
//Output:true
```

```js
8`reverse`;
The arr.reverse() method is used for in-place reversal of the array. The first element of the array becomes the last element and vice versa.

Syntax:

arr.reverse()
Parameters: This method does not accept any parameter

Return value: This method returns the reference of the reversed original array.

Example 1: In this example the reverse() method reverses the sequence of the array elements of arr.
var arr = [34, 234, 567, 4];
print(arr);
var new_arr = arr.reverse();
print(new_arr);

//Output:
34, 234, 567, 4
4, 567, 234, 34
- yes its mutate the array.

```

```js

9. `every`
The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument.

Syntax:

arr.every(callback(element[, index[, array]])[, thisArg])

Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

Return value: This method returns Boolean value true if all the elements of the array follow the condition implemented by the argument method. If one of the elements of the array does not satisfy the argument method, then this method returns false.

Example 1: In this example the method every() checks if a number is positive for every element of the array. Since the array does not contain negative elements therefore this method returns true as the answer.
function ispositive(element, index, array) {
  return element > 0;
}
print([11, 89, 23, 7, 98].every(ispositive));
//Output: true
Example-2

function isodd(element, index, array) {
  return (element % 2 == 1);
}
print([56, 91, 18, 88, 12].every(isodd));
//Output: false
```

```js
10`shift`;
shift() method removes the first element of the array thus reducing the size of the original array by 1.
Parameters: This method does not accept any parameter.
Return value: This function returns the removed first element of the array. If the array is empty then this function returns undefined.
Example-
function func() {

    // Original array
    var array = ["p", "pp", "iii", "s"];

    // Checking for condition in array
    var value = array.shift();

    document.write(value);
    document.write("<br />");
    document.write(array);
}

func();
//output :"pp", "iii", "s"
Example-2
function func() {

    // Original array
    var array = [34,234,567,4];

    // Checking for condition in array
    var value = array.shift();

    document.write(value);

    document.write(array);
}

func();
output-234,567,4
```

```js

11. `splice`

    The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.

Syntax:
Array.splice( index, remove_count, item_list )
Parameter: This method accepts many parameters some of them are described below:

index: It is a required parameter. This parameter is the index which start modifying the array (with origin at 0). This can be negative also, which begin after that many elements counting from the end.

remove_count: The number of elements to be removed from the starting index.

items_list: The list of new items separated by comma operator that is to be inserted from the starting index.

Return Value: While it mutates the original array in-place, still it returns the list of removed items. In case there is no removed array it returns an empty array.
Example-1
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
Reset
> Array ["Jan", "Feb", "March", "April", "June"]
> Array ["Jan", "Feb", "March", "April", "May"]
```

```js
12`find`;
The arr.find() method is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever the first element satisfies the condition is going to print.

Syntax:

array.find(function(currentValue, index, arr),thisValue);
Parameters: This method accepts five parameters as mentioned above and described below
function: It acept a callback function.it is an array method.
currentValue: This parameter holds the current element.
index: It is an optional parameter that holds the index of current element.
arr: It is an optional parameter that holds the array object the current element belongs to.
thisValue: This parameter is optional, if a value to be passed to the function to be used as its “this” value else the value “undefined” will be passed as its “this” value.
Return value: It returns the array element value, if any of the elements in the array which satisfy the condition, otherwise it returns undefined.
Example:

// input array contain some elements.
    var array = [10, 20, 30, 40, 50];

    // method (return element > 10).
    var found = array.find(function (element) {
        return element > 20;
    });

    // Printing desired values.
    document.write(found);
   // Output- 30

```

```js
13. `unshift`
    The arr.unshift() method is used to add one or more elements to the beginning of the given array. This function increases the length of the existing array by the number of elements added to the array.
    Unshft add in 0th index.
    Syntax:
    array.unshift(element1, element2, ..., elementX)
    unshft mutate the original array.
    Example-
    let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]
Example 1: In this example the function unshift() adds 28 and 65 to the front of the array.
var arr = [23,76,19,94];
document.write(arr.unshift(28,65));
document.write(arr);
Output:

6
28,65,23,76,19,94
Example 2: In this example the shift() method tries to remove the first element of the array, but the array is empty, therefore it returns undefined.
var arr = [23,76,19,94];
document.write(arr.unshift());
document.write(arr);
Output:

4
23,76,19,94
```

```js
14`findIndex`;
The arr.findIndex() method used to return the index of the first element in a given array that satisfies the provided testing function. Otherwise, -1 is returned.

It does not execute the method once it finds an element satisfying the testing method.
It does not change the original array.
Syntax:

array.findIndex(function(currentValue, index, arr), thisValue);
Parameters: This method accepts five parameters as mentioned above and described below:
function: It is the function of the array that works on each element.

currentValue: This parameter holds the current element.

index: It is an optional parameter that holds the index of the current element.

arr: It is an optional parameter that holds the array object the current element belongs to.

thisValue: This parameter is optional, if a value to be passed to the function to be used as its “this” value else the value “undefined” will be passed as its “this” value.

Return value:It returns the array element index if any of the elements in the array pass the test, otherwise it returns -1.

Example 1: In this example the method findIndex() finds all the indices that contain odd numbers. Since no odd numbers are present therefore it returns -1.
function isOdd(element, index, array) {
  return (element%2 == 1);
}

print([4, 6, 8, 12].findIndex(isOdd));

Output:

-1
Example 2: In this example the method findIndex() finds all the indices that contain odd numbers. Since 7 is odd number therefore it returns its index .
function isOdd(element, index, array) {
  return (element%2 == 1);
}

print([4, 6, 7, 12].findIndex(isOdd));
//Output:2
```

```js
15. `filter`
The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.
Syntax:


array.filter(callback(element, index, arr), thisValue);

Parameters: This method accepts five parameter as mentioned above and described below
callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

arr: This parameter is optional, it holds the complete array on which Array.every is called.

thisValue: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function,otherwise undefined is used as default.
Return value: This method returns a new array consisting of only those elements that satisfied the condition of the arg_function.


```

```js
17`forEach`;
The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

Syntax:

array.forEach(callback(element, index, arr), thisValue);
Parameters: This method accepts five parameters as mentioned above and described below:

callback: This parameter holds the function to be called for each element of the array.

element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the current value element in the array starting from 0.

array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function otherwise undefined is used as default.

Return value: The return value of this method is always undefined. This method may or may not change the original array provided as it depends upon the functionality of the argument function.
Example: In this example the method forEach() calculates the square of every element of the array.
function func() {

        // Original array
        const items = [1, 29, 47];
        const copy = [];

        items.forEach(function (item) {
            copy.push(item * item);
        });

        document.write(copy);
    }
Output:

1,841,2209


```

```js
18. `map`
The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array.
Syntax:

array.map(function(currentValue, index, arr), thisValue)
Parameters: This method accepts two parameters as mentioned above and described below:

function(currentValue, index, arr): It is required parameter and it runs on each element of array. It contains three parameters

currentValue: It is required parameter and it holds the value of current element.
index: It is optional parameter and it holds the index of current element.
arr: It is optional parameter and it holds the array.
thisValue: It is optional parameter and used to hold the value of passed to the function.

Return Value: It returns a new array and elements of arrays are result of callback function.
 Example-
 var el = document.getElementById('root');
        var arr = [2, 5, 6, 3, 8, 9];

        var newArr = arr.map(function(val, index){
            return {key:index, value:val*val};
        })

        console.log(newArr)
        // output-(6)
[{…}, {…}, {…}, {…}, {…}, {…}]
0: {key: 0, value: 4}
1: {key: 1, value: 25}
2: {key: 2, value: 36}
3: {key: 3, value: 9}
4: {key: 4, value: 64}
5: {key: 5, value: 81}
length: 6

Example-2 -This example use array map() method to concatenate character ‘A’ with every character of name.

var el = document.getElementById('root');
        var name = "Pankaj";

        // New array of character and names
        // concatenated with 'A'
        var newName = Array.prototype.map.call(name, function(item) {
            return item + 'A';
        })

        console.log(newName)
 (6) ["PA", "aA", "nA", "kA", "aA", "jA"]
```

```js
19`pop`;
pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array by 1.
Parameters: This method does not accept any parameter.
Return : Return value This method returns the removed element array.

Example 1: In this example the pop() method removes the last element from the array, which is 4 and returns it.
var arr = [34, 234, 567, 4];
var popped = arr.pop();
print(popped);
print(arr);
Output:

4
34,234,567
Example 2: In this example the function pop() tries to extract the last element of the array but since the array is empty therefore it returns undefined as the answer.
var arr = [];
var popped = arr.pop();
print(popped);
Output:

undefined
```

```js
20`reduce`;
The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

Syntax:

array.reduce( function(total, currentValue, currentIndex, arr),
initialValue )
Parameter: This method accepts five parameters.

function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array. It contains four parameter

total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.

currentValue: It is required parameter and used to specify the value of the current element.
currentIndex: It is optional parameter and used to specify the array index of the current element.
arr: It is optional parameter and used to specify the array object the current element belongs to.
initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value.

Example-1
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

```js
21`slice`
The arr.slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

Syntax:

arr.slice(begin, end)
Parameters: This method accepts two parameters as mentioned above and described below:

begin: This parameter defines the starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.
end: This parameter is the index up to which the portion is to be extracted (excluding the end index). If this argument is not defined then the array till the end is extracted as it is the default end value If the end value is greater than the length of the array, then the end value changes to length of the array.
Return value: This method returns a new array containing some portion of the original array.
Example 2: In this example the slice() method extracts the array starting from index 2 till the end of the array and returns it as the answer.
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2);
document.write(arr);
document.write(new_arr);
Output:

[23,56,87,32,75,13]
[87,32,75,13]

```

```js
22`some`;
The arr.some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.

Syntax:

arr.every(callback(element[, index[, array]])[, thisArg])
Parameters: This method accepts five parameters as mentioned above and described below:
callback: This parameter holds the function to be called for each element of the array.
element: The parameter holds the value of the elements being processed currently.

index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

array: This parameter is optional, it holds the complete array on which Array.every is called.

thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

Return value: This method returns true even if one of the elements of the array satisfies the condition(and does not check the remaining values) implemented by the argument method. If no element of the array satisfies the condition then it returns false.


Example 1: In this example the method some() checks for any number that is greater than 5. Since there exists element that satisfy this condition, thus the method returns true.

function isGreaterThan5(element, index, array)
{
  return element > 5;
}

print([2, 5, 8, 1, 4].some(isGreaterThan5));
//Output:true

Example 2: In this example the method some() checks for any number that is greater than 5. Since there exists no elements that satisfy this condition, thus the method returns false.
function isGreaterThan5(element, index, array)
{
  return element > 5;
}

print([-2, 5, 3, 1, 4].some(isGreaterThan5));
//Output:false
```

```

```

```

```

```

```

```

```

```

```
