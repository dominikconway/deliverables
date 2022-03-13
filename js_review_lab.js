/*
A. Q + A
How do we assign a value to a variable?: by using const, let or var, 
How do we change the value of a variable?: by using let and equalling it to a new value
How do we assign an existing variable to a new variable?: by just setting the new variable name equal to the old name
Remind me, what are declare, assign, and define?: declare means declare a type of variable, assign means store the value, and define means use it
What is pseudocoding and why should you do it? its a like checklist before you start to program. do it because it will save you from typing code you do not need
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? half



B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable: const firstVariable
Assign it the value of the string "Hello World": 

firstVariable = "Hello World"

Change the value of this variable to some number:

 firstVariable = 5 

Store the value of firstVariable in a new variable called secondVariable:

 let secondVariable = firstVariable

Change the value of secondVariableto any string.: 

String(secondVariable)

What is the value of firstVariable?:

 firstVariable = '5'

Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean

let yourName = 'Alex Conway' console.log(`Hello, my name is ${yourName}`)


C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' e 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false & false & false & false & false || true);
  console.log(false === false)
  console.log(e !== 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');



D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit

const animal = 'cow'
if (animal = 'cow){
  console.log('moo')
} else {
  console.log('hey! you are not a cow.')
}


E. Driver's Ed
Make a variable that holds a person's age; be semantic
let yourAge;

Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (yourAge >= 16){
  console.log('Here are the keys!)
} else [
  console.log('Sorry, you're too young.')
]


II. Loops
Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)




A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i <= 10; i++ ){
  console.log(i)
}

Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++ ){
  console.log(i)
}

Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i+=3 ){
  console.log(i)
}



B. Get even
Print out the numbers that are within the range of 1 - 100

for(let i = 0; i <= 100; i++ ){console.log(i)}
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for(let i = 0; i <= 100; i++ ){

  if(i % 2 === 0){
  console.log(`${i}<-- is an even number`)
} else{
    console.log(i)
}
  }




C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:

I found a 5. High five!
I found a 10. High five!

for(let i = 1; i <= 100; i++ ){

  if(i % 5 === 0){
  console.log(`I found a ${i}. High five!`)
}else{
    console.log(i)
}
  }



Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:

I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

for(let i = 1; i <= 100; i++ ){

  for(let i = 1; i <= 100; i++ ){

  if(i % 5 === 0){
  console.log(`I found a ${i}. High five!`)
} if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`)
}
  else{
    console.log(i)
}
  }

For numbers divisible by both three and five, be sure your code prints both messages



D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

let bankAccount = 0
for(let i = 1; i <= 10; i++ ){
 bankAccount = bankAccount += i
  console.log(bankAccount)

  }

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.

let bankAccount = 0
for(let i = 1; i <= 100; i++ ){
 bankAccount += i * 2
  console.log(bankAccount)

  }


III. Arrays & Control flow



A. Talk about it:
What are the things in an array called?

elements

Do Arrays guarantee those things will be in order?

no

What real-life thing could you model with an array?

po boxes


B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes

let quotes = ['live and let life', 'get rich or die trying, 'im the greatest']

C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array? ramdomThings[0]

Change the value of "Hello"to "World"

randomThings[2] = 'world'

Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

console.log(randomThings[0])
console.log(randomThings[2])


D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?

ourClass[2]

Change the value of "Github" to "Octocat"
ourClass[4] = 'Octocat'

Add a new element, "Cloud City" to the array

ourClass.push('Cloud city')


E. Mix It Up
Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Egon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push('Egon', 'Gordo')

Remove the 5 from the beginning of the array.

myArray.shift

Add the string "Bob Marley"to the beginning of the array.

myArray.unshift('Bob Marley')

Remove the string of your choice from the end of the array.

myArray.pop()

Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

yes, means to change the array iteself not returning it with new changes. it returned the array backwards



F. Biggie Smalls
Create a variable that contains an integer.

let num = 4

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100

console.log()s big numberif the number is greater than or equal to 100.

if(num >= 100) {
  console.log('big number')
} else{
  console.log('little number')
}


G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.

If the number entered is more than 10, log big number.

Otherwise, log "monkey".

if(num > 10) {
  console.log('big number')
} else if(num < 5){
  console.log('little number)
} else{
  console.log('monkey')
}



H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

kristynsCloset.splice(6, 0, 'raybans')

Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[5] = 'stained knit hat'

Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

thomsCloset[0][0]

In the same way, access one item from Thom's pants array.

thomsCloset[1][0]

Access one item from Thom's accessories array.

thomsCloset[2][0]

Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, ${thomsCloset[2][0]}`)


Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'Footie Pajamas'


IV. Functions


A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.




B. printCool
Write a function printCool that accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";

function printCool(name)  {
  console.log(`${name} is cool`)
}
printCool('alex')


C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125

function calculateCube(number) {
  number = Math.pow(number, 3)
  console.log(`${number}`)
}
calculateCube(5)


D. isVowel 
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

console.log(isVowel("a"));
=> true

function isVowel(letter) {
  
  letter = letter.toLowerCase()
  
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
  return true
} else {
  return false
}
  
}
console.log(isVowel('u'))


E. getTwoLengths
Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]

function getTwoLengths(str1, str2) {
let arr = []
  arr.push(str1.length, str2.length)
  console.log(arr)
}
getTwoLengths('word', 'hippopatumus')



F. getMultipleLengths 
Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]

let arr = []
function getMultipleLengths(arr) {
  let subArray = []
    arr.forEach(function(str){
       subArray.push(str.length)
    });
  console.log(subArray)
}
getMultipleLengths(['foot', 'white','stick'])



G. maxOfThree 
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9

Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(a, b, c) {
  if(a === b && a === c) {
    console.log(a)
  } else if(b <= a && a >= c ) {
    console.log(a)
  } else if(a <= b && b >= c){
    console.log(b)
  } else if(a <= c && c >= b){
    console.log(c)
  }

}
maxOfThree(6,9,1)



H. printLongestWord 
Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"

const printLongestWord = (arrOfStrings) => {

  const result = arrOfStrings.reduce((currentWinner, nextWord) => {
  if (currentWinner.length >= nextWord.length) {
    return currentWinner
  } else {

    return nextWord
  }
    
  }, '')

  return result
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))


Objects
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.




A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.


let user = {

  name: 'Alex',
  email: 'alexconway@gmail.com',
  age: 28,
  purchased: [],
}

B. Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the age value using the postfix operator. Hint: age++

user.email = 'aconway@yahoo.com'

user.age++

C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.

Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user['location'] = 'Phoenix' //or// user.location = 'Phoenix'

D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.log(user.purchased[2])

E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friendobject added to our user object.

Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend = {
  name: 'Amanda',
  age: 25,
  location: 'Chandler',
  purchased: [],
}

Console.log just the friend's name

  console.log(user.friend.name)

Console.log just the friend's location

  console.log(user.friend.location)

CHANGE the friend's age to 55
The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
Console.log just "A latte" from the friend's purchasedarray.

user.friend.age = 55
user.friend.purchased.push('The One Ring')
user.friend.purchased.push('A latte')
console.log(user.friend.purchased[1])

F. Loops
Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

for(let i = 0; i < user.purchased.length; i++) {
console.log(user.purchased[i])
}

Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.friend.purchased.length; i++) {
console.log(user.friend.purchased[i])
  
}


G. Functions can operate on objects
Write a single function updateUser that takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a returnstatement, it will merely modify the user object.

function updateUser() {

  user.age++
  user.name = user.name.toUpperCase()
}
updateUser()

Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {

  person.age++
  user.name = person.name.toUpperCase()
  console.log(user)
}
oldAndLoud(user)


Requirements Complete! Hungry for More?



Cat Combinator



1. Mama cat
Define an object called cat1 that contains the following properties:

name
breed
age (a number)
console.log the cat's age

console.log the cat's breed




2. Papa cat
Define an object called cat2that also contains the properties:
name
breed
age (a number)



3. Combine Cats!
The cats are multiplying!

Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
Example:

combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }

This is to demonstrate that functions can take objects as arguments

You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

Make it so the combineCatsfunction will return a combination of the two incoming cats
The result should be an object wherein the
name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between
Example:

console.log(combineCats(cat1, cat2));
Result:



This is to demonstrate that a function can return an object





4. Cat brain bender
If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

catCombinatorcan use itself as its own argument.

Take a second to stew on that . . .

What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .

The above console.log is two levels deep of combineCats.

Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:


*/