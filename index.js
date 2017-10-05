//Level 0
//Store different numbers into some variables
//Create some `if else` statement blocks that tell if each number is bigger or smaller than our determined value
//Log that results to the console

if (5 > 1) {
    result = 'true';
}
--------------------------------------------------------------------------------

//Level 1

//Try to compare those numbers with each other
//Expand the `if else` statements into multiple chains


if (5 > 1) {
    result = 'true';
} else if(1 > 5){
    result = 'false';
} else result = 'true'

// Level 2

//Use ternary operator `? :` rather than `if else` statement

var absenMasuk = false,
    access = absenMasuk ? 'Access denied' : 'Access granted';

console.log(access);



// Level 3

//Try to compare a variable with value range, with more than 2 conditions, bigger and smaller than some different value at the same time
//Experiment with various kind of operations

//min >= condition >= max conditionA && conditionB

function tidur (waktuTidur) {
  if (waktuTidur >=  0 && waktuTidur <= 7 ) {
    return console.log("Kamu kurang tidur");
  } else {
    return console.log("Kamu kelebihan tidur");
  }
}
tidur(5);

--------------------------------------------------------------------------------

//Level 4

- Wrap those logics into some functions that can be called later
- Use parameters to enable us assign different kind of inputs to compare
- You need at least two parameters for these functions

```js
function process(parameterA, parameterB) {
  // code
}

process()
```
function tidur (waktuTidur, jamTidur) {
  if (waktuTidur >=  5 && jamTidur >= 12 ) {
    return console.log("Kamu kurang tidur");
  } else {
    return console.log("Kamu kelebihan tidur");
  }
}
process();

--------------------------------------------------------------------------------

## Level 5

- Create a random number generator
