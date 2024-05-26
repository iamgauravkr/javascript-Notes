# __Lesson 1.__
What is JavaScript?<br>
JS is a programming language. We use it to give instructions to the computer.

Console.log is used to log (print) a message to the console.<br>
__code__
```javascript
console.log("Hello Java-script")
```
## Variables in JS
Variables are containers for data.
### Variable Rules
- Variable names are case sensitive;
“a” & “A” is different.
- Only letters, digits, underscore( _ ) and $ is allowed.(not even space)
- Only a letter, underscore(_) or $ should be 1st character.
- Reserved words cannot be variable names.<br>
__Reserved words__<br>
These keywords cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.

- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- false
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- null
- return
- super
- switch
- this
- throw
- true
- try
- typeof
- var
- void
- while
- with
<br>

The following are only reserved when they are found in strict mode code:

- let (also reserved in const, let, and class declarations)
- static
- yield (also reserved in generator function bodies)<br>

The following are only reserved when they are found in module code or async function bodies:

- await

Future reserved words
The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.

These are always reserved:

- enum

The following are only reserved when they are found in strict mode code:

- implements
- interface
- package
- private
- protected
- public
for more in details visit the link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words"<br>
__code__
```javascript
fullname="Tony stark" //
_fullname ="spider-man"
$fullname = "doctor-strange"
full name = "iron-man" //error as space not allowed
console.log(fullname)
console.log(_fullname)
console.log($fullname)
```
```javascript
FullName //pascal case
full-name //kababcase
fullName //camel case
full_name //snakecase
```
### let, const & var
- var : Variable can be re-declared & updated. A global scope variable.
- let : Variable cannot be re-declared but can be updated. A block scope variable.
- const : Variable cannot be re-declared or updated. A block scope variable.

__code__
```javascript
var age =25;
var age =35;
var age =55;  //updated the value
console.log(age) 
```
<details>
<summary>Output</summary>
55
</details>

__code__
```javascript
let age =25;
let age =35;  //cannot redeclare the variable
let age =55;  //cannot redeclare the variable
console.log(age) //error
```
if we want to update the value then follow this<br>
__code__
```javascript
let age =25;
age =35;  // redeclare the variable
age =55;  // redeclare the variable
console.log(age) 
``` 
<details>
<summary>Output</summary>
55
</details>

__code__
```javascript
const pi = 3.14
console.log(pi)
```
<details>
<summary>Output</summary>
3.14
</details>

__code__
```javascript
const age =25;
age =35;  
age =55;  
console.log(age) 
```
<details>
<summary>Output</summary>
TypeError: Assignment to constant variable.
</details>

__Note__ const must be initialized but let need not to be initialize if we don't initialize the let variable then it gives undefined type.<br>
__code__
```javascript
{
    let a=5;
    console.log(a)
}
{
    let a=20;
    console.log(a)
}
```
<details>
<summary>Output</summary>
10
20
</details>

## Data Types in JS
Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
- number => 2 to the power 53
- bigint
- string=> ""
- boolean => true/false
- null => standalone value
- undefined
- symbol =>unique

__code__
```javascript
console.log(typeof "gaurav"); //string
    console.log(typeof 22); //number
    console.log(typeof null); //object
    console.log(typeof undefined); //undefined
```
__code__
```javascript
let x = BigInt("254")
console.log(x)
console.log(typeof x)
```
<details>
<summary>Output</summary>
254n
bigint
</details>

__code__
```javascript
const student={
    fullName:"Gaurav kumar",
    age:22,
    cgpa:8.5,
    isPass:true,

};
console.log(student)
console.log(student.age)
console.log(student["fullName"])
console.log(student["cgpa"])

student["cgpa"] = student["cgpa"] +1 
console.log(student["cgpa"]) //9.5
```
__Note__ We can update let but cannot update const but we can update key of const obj.

## Practice Question
__Quuestion 1.__ Create a const object called “product” to store information shown in the picture.

__code__
```javascript
const product = {
    title  : "Parker ball pen (black)",
    reting : 4,
    offer : 5,
    price : 750,

};
console.log(product);
```
__Question 2.__ Create a const object called “profile” to store information shown in the picture.

__code__
```javascript
const profile ={
username : "@iam_gauravk14",
isFollow : false,
followers : 500,
following : 300,

};
console.log(profile);
```
# __Lesson 2__
## Arithmetic Operators
__code__
```javascript
a = 2, b = 5;
console.log("a=",a,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b); 
```
### Unary Operator
__code__
```javascript
let a = 2;
let b = 5;
console.log("a=",a,"& b=",b);
a = a+1; //3
console.log(a)
```
### Pre-Increment and Post-Increment
__code__
```javascript
a = 5;
console.log("a++",a++); //5
console.log("a",a); //6
console.log("++a",++a); //7
 b = 8;
 console.log("b--",b--); //8
 console.log("b",b); //7
 console.log("--b",--b); //6
```
__Comparison Operator__
__code__
```javascript
console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); //false
console.log(2==1); //false
console.log(2!=1); //false

console.log("2">1); //True
console.log("02">1); //True

console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0);// true : here null is converted in 0

console.log(undefined==0); //false
console.log(undefined>0); //false
console.log(undefined<0); //false
```
//=== The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. 
__code__
```javascript
console.log("2"===2); //false
```

### __Strings__
__code__
```javascript
const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + "value" );  //this is outdated method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //good method
```
__code__
```javascript
const gameName= new String('Gangstar -gs-com')   //const gameName= new String('sonu')
                                     //->undefined
                                     //->gameName
                                     //->String {'sonu'}0: "s"1: "o"2: "n"3: "u"length: 4[[Prototype]]: String[[PrimitiveValue]]: "sonu"

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
//console.log(gameName.charAt(s));    //error 
console.log(gameName.charAt(2));     //to know about character at given position
console.log(gameName.indexOf('s'));  // to know about position of given character

const newString =gameName.substring(0, 4)  //print character upto 3rd position 4th position is not included
                                           // we can't give negative value in substring
console.log(newString);
 const anotherString = gameName.slice(-8, 3) // first count from end to 8 character then print character upto 2nd position from start(i.e. Gan )
 console.log(anotherString);

 const thirdString = gameName.slice(-6, 4) //first count from end to 6 character then print character in between 6th from backend 4th position from start(i.e. ng )
 console.log(thirdString);

const anotherStringOne = "       Gaurav      "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "https://gaurav.com/gaurav%20chaudhary"
 
console.log(url.replace('%20','-'));
console.log(url.includes('gaurav')); // includes will ask question that gaurav is included in the given url or not

console.log(gameName.split('-'));
```

### __Nums and Maths__
__code__
```javascript
const score= 400 
console.log(score);
```
__code__
```javascript
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));
```
__code__
```javascript
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
```
__code__
```javascript
const hundreds =1000000
console.log(hundreds.toLocaleString('en-In'));
```
__+++++++++++++++ Maths  +++++++++++++++++__
__code__
```javascript
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(6.2));
console.log(Math.min(4,6,8,2,9));
console.log(Math.max(65,865,84,947));
```
__code__
```javascript
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
```
__code__
```javascript

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));
```
### Dates
__code__
```javascript
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
```
__code__
```javascript
let myCreateDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 4, 14, 7, 8)
let myCreatedDate = new Date("2023-1-14")  
let myCreatedDate = new Date("01-14-2005")    
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());
```
__code__
```javascript
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); 
```
__code__
```javascript
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(`${newDate.getDay()} and the time is`);


console.log(newDate.toLocaleString('deafult',{
weekday:"long",
month:"long",
year:"numeric"
}));  
```
### Summary of Data Types
- primitive datatypes (call by value)
- 7types : string,boolean,bigInt,symbol,number,undefined,null;
__code__
```javascript
const score=100
const scorevalue=100.3
console.log(score==scorevalue);

const isloggedIn=false   //typeof isloggedIn: Boolean
const outsideTemp=null  //typeof outsideTemp is :Object
let userEmail;

const Id=Symbol('123')   // typeof  Id:Symbol
const anotherId=Symbol('123')  //typeof anotherId: Symbol
// console.log(Id==anotherId);//false


const bigNumber=1236557894235n  //typeof bigNumber: bigint
```
Reference(Non-primitive)
- Array,Objects,Functions
__code__
```javascript
const heros = ['Shaktiman', 'Nagraj', 'Doga']
let myObj={                                       //typeof myObj: object
    name:"Gaurav",
    age :20,

}     
```
__code__
```javascript
let myFunction=function(){                        //typeof  myFunction: function
    console.log("Hello World");
}

console.log(typeof  myFunction);
```
- Stack(Primitive i.e. call by value) , 
- Heap(Non-Primitive i.e reference)
- examples of stack
__code__
```javascript

let myYoutubeName = "Saurav ka safar"
let anotherName = myYoutubeName
 anotherName = "Welcome to cricket world"

 console.log(myYoutubeName);
 console.log(anotherName);
 ```

 __Note__: In stack data copied i.e. in ABOVE EXAMPLE data(saurav ka safar) will be copied in anotherName NOW WE CHANGE THE VALUE OF anotherName by 
 - Welcome  to cricket world here we clearly see that only the value of anotherName changed not myYoutubeName bacause data is copied.
 - but in case of heap , heap used reference type i.e. in this case dublicate and original data both will be changed


 __examples of heap__
 __code__
 ```javascript
let userOne = {
    email : "user@googleg.com",
    upi: "user@ybl"

}
```
 __code__
 ```javascript
let userTwo = userOne

userTwo.email = "gk@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//here both original and dublicate  data changed because heap used reference data type.
```
## Conditional Statement
To implement some condition in the code 

__if Statement__
__code__
```javascript
let age = 25;
if(age>18){
console.log("you can vote");
}
```
__code__
```javascript
let color;
let mode = "dark";

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);//black
```
__if-else statement__
__code__
```javascript
let num = 7;
if(num %2 === 0){
    console.log("num is even",num);
}
else{
    console.log("num is odd",num);
}
```
__Nested if else__
__code__
```javascript
let mode = "gray";
let color;
if(mode === "dark"){
    color="black";
}
else if(mode === "green"){
    color="green";
}
else if(mode === "red"){
    color = "red";
}
else{
    color = "white";
}
console.log(color);
```
__code__
```javascript
let mode = "dark";
if(mode === "dark"){
    console.log(mode); // in companies we write as it
}
```
### Operators in JS
__Ternary Operators__

- condition ? true output : false output
__code__
```javascript
let age = 25;
let result = age>18? "eligible": "not eligible"; //simpler or compact if-else
console.log(result);
```
__code__
```javascript
let age = 25;
age>18?console.log("adult") : console.log("not adult");
```
## __Let‘s Practice__

__Question 1.__ Get user to input a number using prompt(“Enter a number:
”). Check if the number is
a multiple of 5 or not.
- alert is used for one time pop while
- prompt also gives you one time pop but it can takes some input

__code__
```javascript
let num = prompt("Enter a Number:");
if(num%5===0){
console.log("Multiple of 5"); // run in web page console
}
else{
    console.log("Not multiple of 5");
}
```
__Question 2.__ Write a code which can give grades to students according to their scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
__code__
```javascript
let marks = prompt ("enter your marks");
if(marks>=90 && marks<=100){
    console.log("Grade: A");
}
else if(marks>=70 && marks<=89){
    console.log("Grade: B");
}
else if(marks>=60 && marks<=69){
    console.log("Grade: C");
}
else if(marks>=50 && marks<=59){
    console.log("Grade:D");
}
else if(marks>=0 && marks<=49){
    console.log("Grade: F");
}
else{
    console.log("Plaese Enter a valid marks.");
}
```

## Loops in JS
Loops are used to execute a piece of code again & again
__for loop__

__syntax__
```javascript
for (let i = 1; i <= 5; i++) {
console.log("apna bihar");
}
```
sum of 5 numbers

__code__
```javascript
let sum =0;
for (let i = 1; i <= 5; i++) {
    sum +=i;
    }
    console.log("sum:",sum);
```
sum of n numbers

__code__
```javascript
let sum =0;
let n=6;
for (let i = 1; i <= n; i++) {
    sum +=i;
    }
    console.log("sum:",sum);
```
__code__
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("i=",i);
    }
     console.log("i=",i); //gives error as we cannot access the let outside the scope
```
__code__
```javascript
for (var i = 1; i <= 5; i++) {
    console.log("i=",i); //1to5
    }
     console.log("i=",i); //no error as we can access the var outside the scope //6
```
while Loop

__code__
```javascript
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
```
do-while Loop
- do hile loop will run atleast 1 times 

__code__
```javascript
let i = 20;
do{
    console.log(i); //20
    i++;
}
while(i<=10)//not print anything
```
__for-of-loop__
syntax
__code__
```javascript
for (let val of strVar) {
    //do some work
}
```
__code__
```javascript
let str="javascript";
for(let i of str){ //iterator character
    console.log("i=",i)//print javascript
    
}
```
__code__
```javascript
let str="javascript";
let size = 0;
for(let i of str){   //iterator character
    console.log("i=",i) // print javascript
    size++;
}
console.log("String size =",size);//gives size
```
__code__
```javascript
let student = {
    name:"Gaurav kumar",
    age:21,
    cgpa:8.5,
    isPass:true,
};
for (let key in student){
    console.log("key",key,"value=",student[key]);//gives key values
}
```
# __Practice Question__
__Question 1.__ Print all even numbers from 0 to 100.
__code__
```javascript
for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
```
__Question 2.__ Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.
__code__
```javascript
let target = 45;
let userchoice = prompt("Guess the target:");
console.log(userchoice);
while(userchoice!=target){
   userchoice = prompt("Wrong Guess! Try Again");
}
console.log("Congratulatio! you have matched the target");
```
## Strings in JS
String is a sequence of characters used to represent text.

`Create String`

let str =“Apna College“;

`String Length`

str.length

`String Indices`

str[0], str[1], str[2]

__code__
```javascript
let str = "javascript";
console.log(str[0]); //access the element
```
### Template Literals in JS

A way to have embedded expressions in strings

 `this is a template literal`

__code__
```javascript
specialstring =  `this is a tempelete literal`;
console.log(typeof specialstring);
```
__code__
```javascript
let obj = {
    item :"pen",
    price : 10,
}
console.log("the cost of",obj.item,"is",obj.price,"rupees" ); //old method
console.log(`the cost of ${obj.item} is ${obj.price} rupees`); //good method using tempelete
```
`String Interpolation`

- To create strings by doing substitution of placeholders.

__syntax__
```javascript
`string text ${expression} string text`
```
__code__
```javascript
specialstring =  `this is a tempelete literal ${1+2+3+8}`;
console.log(specialstring);
```
__code__
```javascript
let str = "javas\tcript";
console.log(str.length); //11 as \t both count as 1 space taking
```
### String Methods in JS
These are built-in functions to manipulate a string
- str.toUpperCase( )
- str.toLowerCase( )
- str.trim( ) // removes whitespaces
__code__
```javascript
let str = "javascript";
console.log(str.toUpperCase());

let str2 = "JAVASCRIPT";
console.log(str2.toLowerCase());
console.log(str2.toLocaleLowerCase());

let str3 = "    javascript  python  react   ";
console.log(str3.trim()); //removes extra space
```
### String Methods in JS
- str.slice(start, end?) // returns part of string
- str1.concat( str2 ) // joins str2 with str1
- str.replace( searchVal, newVal )
- str.charAt( idx )

__code__
```javascript
let str =  "0123456789";
console.log(str.slice(1,3)); //(12), 3 not included

let str1 = "javascript";
console.log(str1.slice(0,4)); // java

let str2 = "java";
let str3 = "script";
console.log(str2.concat(str3)); 

let str4 = "hello";
console.log(str4.replace("h","y")); //yello
console.log(str4); //gives hello because strings are immutable

let str5 = "javascript";
console.log(str5.charAt(4)); //s
```
__Question 1.__ Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.

__code__
```javascript
let username = prompt("Enter your Full Name:");
// console.log(username);
console.log(`user name = @${"+",username}${"+",username.length}`); //by own

let fullname = "@" + username +username.length; // by teacher
console.log(fullname);
```
## Arrays in JS
Collections of items
array elements are mutable
`Create Array`
- let heroes = [ “ironman”,“hulk”,“thor”,“batman” ];
- let marks = [ 96, 75, 48, 83, 66 ];
- let info = [ “rahul”, 86,“Delhi” ];

`Array Indices`
- arr[0], arr[1], arr[2] ....
__code__
```javascript
let marks = [98,85,74,87,68,82];
console.log(marks);//[ 98, 85, 74, 87, 68, 82 ]
console.log(marks[2]);//74
marks[2] = 99; //it make change original because array are mutable while strings are immutable
console.log(marks); //[ 98, 85, 99, 87, 68, 82 ]
```
__code__
```javascript
let sub = ["eng","phys","chem","hindi","maths"]
console.log(sub); //[ 'eng', 'phys', 'chem', 'hindi', 'maths' ]
console.log(sub[4]); //maths
sub[4] = "bio"; //it make change original because array are mutable while strings are immutable
console.log(sub); // [ 'eng', 'phys', 'chem', 'hindi', 'bio' ]
```
- Using `for - loop`

__code__
```javascript
let heroes = ["iron-man","thor","doctor-strange","hulk","captain-america","spider-man","black-widow"];
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);//gives all the name in next line not in a single line
}
 // in single-line
let heroes1 = ["iron-man","thor","doctor-strange","hulk","captain-america","spider-man","black-widow"];
let output = ""; // Initialize an empty string to store the concatenated output

for (let idx = 0; idx < heroes1.length; idx++) {
    // Concatenate each hero's name with a space
    output += heroes1[idx] + " ";
}

console.log(output); // Print the concatenated output
```
- Using `for - of`

__code__
```javascript
let cities = ["Patna","Delhi","Kolkata","Mumbai","Bengaluru"];
for(let city of cities){
    console.log(city);
}
```
__Let‘s Practice__

__Question 1.__ For a given array with marks of students -> [85, 97, 44, 37, 76, 60].
Find the average marks of the entire class.

`Method 1`

__code__
```javascript
let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let i=0;i<marks.length;i++){
sum+=marks[i];
}
// console.log(sum); //399
avg_marks = sum/marks.length //66.5
console.log(avg_marks);
```
`Method 2`

__code__
```javascript
let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let i of marks){
sum+=i;
}
// console.log(sum);
avg_marks = sum/marks.length
console.log(`average marks of the class is ${avg_marks}`);
```
__Question 2.__ For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.

`Method 1`
- Using `for-of`

__code__
```javascript
let price = [250, 645, 300, 900, 50];
let i=0;
for(let val of price){
    // console.log(`price of items at index ${i} = ${val}`);
    let offer = val/10;
    price[i] = price[i] - offer;
    console.log(`price of items after offer = ${price[i]}`);
    i++;

}
```
`Method 2`
- Using `for-loop`

__code__
```javascript
let price = [250, 645, 300, 900, 50];
for(let i=0; i<price.length;i++){
    // console.log(`price of items at index ${i} = ${price[i]}`);
    let offer = price[i]/10;
    price[i] = price[i] - offer;
    console.log(`price of items after offer = ${price[i]}`);
}
```
 ## `Array Methods`
- Push( ) : add to end
- Pop( ) : delete from end & return
- toString( ) : converts array to string
- Concat( ) : joins multiple arrays & returns result
- Unshift( ) : add to start (works as push)
- shift( ) : delete from start & return (works as pop)
- Slice( ) : returns a piece of the array

  `slice( startIdx, endIdx )`

- Splice( ) : change original array (add, remove, replace)

  `splice( startIdx, delCount, newEl1... )`

__code__
```javascript
let food_items = ["apple","grapes","orange","papaya","banana"];
console.log(food_items);
food_items.push("mango","litchi");
console.log(food_items);

let deleted_items = food_items.pop();//pop the last elements
console.log(food_items); //[ 'apple', 'grapes', 'orange', 'papaya', 'banana', 'mango' ]
console.log(deleted_items); //litchi

console.log(food_items.toString());//apple,grapes,orange,papaya,banana,mango
let marks = [89,56,99,75,84,68];
console.log(marks.toString());//89,56,99,75,84,68
```

__code__
```javascript
let marvel_Heroes = ["iron-man","thor","doctor-strange","hulk","captain-america","spider-man","black-widow"];
let dc_Heroes = ["superman","batman"];
let indian_Heroes = ["krish","Don","Dhoom","shaktiman"]
console.log(marvel_Heroes.concat(dc_Heroes,indian_Heroes)); //concat three arrays
```

__code__
```javascript
let marvel_heroes= ["ironman","thor"];
marvel_heroes.unshift("spiderman"); //add to start
console.log(marvel_heroes);//[ 'spiderman', 'ironman', 'thor' ]

marvel_heroes.shift();//delete from start and return
console.log(marvel_heroes);//[ 'ironman', 'thor' ]
```
__code__
```javascript
let marvel_heroes= ["ironman","thor","spiderman","hulk","doctor strange"];
console.log(marvel_heroes.slice(1,3)); //[ 'thor', 'spiderman' ]

console.log(marvel_heroes);//not chane in original array
```
__code__
```javascript
let num = [1,2,3,4,5,6,7,8,9];
console.log(num.splice(1,4));//[ 2, 3, 4, 5 ]
console.log(num);//[ 1, 6, 7, 8, 9 ] splice change the original array
console.log(num.splice(1,2,10,12)); //[ 6, 7 ]
console.log(num);//[ 1, 10, 12, 8, 9 ]
```

__Question.__ Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
- a. Remove the first company from the array
- b. Remove Uber & Add Ola in its place
- c. Add Amazon at the end

__code__
```javascript
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies.shift());//removed Bloomberg
console.log(companies.splice(1,1,"ola"));//Remove Uber & Add Ola in its place
console.log(companies.push("Amazon"));//add Amazon at the end
console.log(companies);
```
## Functions in JS
Block of code that performs a specific task, can be invoked whenever needed

__syntax__
```javascript
`Function Definition`
function functionName( ) {
//do some work
}

function functionName( param1, param2 ...) {
//do some work
}

`Function Call`
functionName( );
```
- Example
```javascript
function learn(msg){
    console.log(msg); //print javascript
}
learn("javascript")
```
sum of 2 nos.

__code__
```javascript
function sum(a,b){
    console.log(a+b);
}
sum(4,5)

// or by using return function

function sum(a, b){ 
    s=a+b;
     return s; //retun the value of s but will not print as we are not using console.log to print
}
sum(4, 6)
```
- NOTE - function parameters are like local variables of function which are only define within the block scope.

### `Arrow Functions`
Compact way of writing a function.

__Syntax__
```javascript
const functionName = ( param1, param2 ...) => {
//do some work
}
```
__example__
```javascript
const arrowsum = ( a, b ) => {
    return a + b;
}

const arrowmul = ( a, b ) => {
    return a * b;
}

const printhello = () => {
    console.log("hello");
}
```
__Question 1.__ Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
- using `for - of`
__code__
```javascript
function count_vowel(str){
    let count = 0;
    for(const char of str){
        if(char==="a" ||
           char==="e" ||   
           char==="i" ||
           char==="o" ||
           char==="u" 
           ) {
           count++;
          }
   }
   console.log(count);//3
}
count_vowel("javascript")
```
- using `for -loop`

__code__
```javascript
function count_vowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            count++;
        }
    }
    console.log("Number of vowels:", count);
}

count_vowel("javascript");
```
__Question .__ Create an arrow function to perform the same task.
__code__
```javascript
const count_vowel = (str) =>{
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            count++;
        }
    }
    console.log("Number of vowels:", count);
}

count_vowel("javascript");
```
### `forEach Loop in Arrays`
- arr.forEach( callBackFunction )
- CallbackFunction : Here, it is a function to execute for each element in the array
- *A callback is a function passed as an argument to another function.

__Syntax__
```javascript
arr.forEach( ( val ) => {
console.log(val);
})
```
__Example__
```javascript
let arr = [1,2,3,4,5];
arr.forEach(function printval(val){ //value at each index
    console.log(val); //1,2,3,4,5
})
```
__Example__
```javascript
let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val); //1,2,3,4,5
})
```
__Example__
```javascript
let arr = ["Patna","Delhi","Mumbai"];
arr.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr); 
})
```
<details>
<summary>output</summary>
PATNA 0 [ 'Patna', 'Delhi', 'Mumbai' ]

DELHI 1 [ 'Patna', 'Delhi', 'Mumbai' ]

MUMBAI 2 [ 'Patna', 'Delhi', 'Mumbai' ]
</details>

__`Note`__=> A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

__Question .__ For a given array of numbers, print the square of each value using the forEach loop.

__code__
```javascript
let arr_num = [1,2,3,4,5,6];
arr_num.forEach((val) =>{ //value at each inx
    console.log(val*val); //1 4 9 16 25 36
   
})
```
method 2

__code__
```javascript
let arr_num = [1,2,3,4,5,6];
let cal_sq = (val) =>{ //value at each inx
    console.log(val*val); //1 4 9 16 25 36
};

arr_num.forEach(cal_sq)
```
### `Some More Array Methods`
`Map`

- Creates a new array with the results of some operation. The value its callback returns are
used to form new array

- arr.map( callbackFnx( value, index, array ) )

__Syntax__
```javascript
let newArr = arr.map( ( val ) => {
return val * 2;
})
```

__Example__
```javascript
let arr_num = [56,14,9,12,15,3];
let new_arr = arr_num.map((val) =>{  //store the return value in new array
    return  val; // return the value of array
});
console.log(new_arr); // print value of new array i.e same as old array
```
`Filter`
- Creates a new array of elements that give true for a condition/filter.

Eg: all even elements

__Syntax__
```javascript
let newArr = arr.filter ( ( val ) => {
return val % 2 === 0;
})
```
__Example__
```javascript
let arr_num = [56,14,9,12,15,3,12,23,24,45,7,18,63];
let new_arr = arr_num.filter((val) =>{  //store the return value in new array
    return  val%2===0; // return the value 
});
console.log(new_arr); // [ 56, 14, 12, 12, 24, 18 ]

`insted of filter if we write map then gives output true and false for every value it cannot filter it`
```
`Reduce`

- Performs some operations & reduces the array to a single value. It returns
that single value.

__Example__
```javascript
let arr = [1,2,3,4];

const output = arr.reduce((prev, curr) =>{
    return prev+curr;
});

console.log(output); //10 (((1+2=3),3+3=6),6+4=10) 
//firstly it prev is 1 and curr is 2 so add it store then 
//prev is stored value (3) and current is at 3 so add it and store it (6)
// now prev is at stored(6) and curr is at 4 soadd it it becomes 10.
```
To find the largest Number among the given number

__code__
```javascript
let arr = [1,8,2,4];

const output = arr.reduce((prev, curr) =>{
    return prev>curr? prev : curr;
});

console.log(output); //8
```
__Question 1.__ We are given array of marks of students. Filter our of the marks of students that scored 90+.

__code__
```javascript
let marks = [90,87,89,85,99,98,93,80];

let output = marks.filter((val) =>{
    return val>=90;
});

console.log(output);//[ 90, 99, 98, 93 ]
```
__Question 2.__ Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.

__code__
```javascript
let n = prompt("Enter a number:");
let arr = [];
for(let i=0;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum =arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log("sum=",sum);

let mul =arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("mul=",mul);
```
## The 3 Musketeers of Web Dev
- 

### Window Object
The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
& is automatically created by browser.
- It is a global object with lots of properties & methods.

What is DOM?
- When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

DOM Manipulation

`Selecting with id`

document.getElementById(“myId”)

`Selecting with class`

document.getElementsByClassName(“myClass”)

`Selecting with tag`

document.getElementsByTagName(“p”)

`Query Selector`

document.querySelector(“#myId / .myClass / tag”)

//returns first element

Query Selector

document.querySelectorAll(“#myId / .myClass / tag”)

//returns a NodeList

`Properties`

- tagName : returns tag for element nodes
- innerText : returns the text content of the element and all its children
- innerHTML : returns the plain text or HTML contents in the element
- textContent : returns textual content even for hidden elements

__Let‘s Practice__

__Question 1.__ Create a H2 heading element with text - “Hello JavaScript”
. Append “from Apna College
students” to this text using JS.

__code__
```html
// HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
    
</head>
<body>

<h2>Hello JavaScript!</h2>

<script src="index.js"></script>
</body>
</html>
```
```javascript
// js
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText+" from Apna college"
```
__Question 2.__ Create 3 divs with common class name - “box”. Access them & add some unique text to each
of them.
__code__
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
    
</head>
<body>
  <div class="box">first</div>
  <div class="box">second</div>
  <div class="box">third</div>
  
  <script src="index.js"></script>
</body>
</html>
```
```javascript
//js
let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// divs[0].innerText = "new unique text"
// divs[1].innerText = "new unique text2"
// divs[2].innerText = "new unique text3"

let idx =1;
for(div of divs){
    div.innerText= `new unique value ${idx}`;
    idx++;
}
```
`Attributes`
- getAttribute( attr ) //to get the attribute value
- setAttribute( attr, value ) //to set the attribute value

__Example of etattribute__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="box">tthis is div 1</div>
  <p class="para">this is a simple line</p>
  <script src="index.js"></script>
</body>
</html>
```
```javascript
//js
let para = document.querySelector("p")
console.log(para.getAttribute("class"));// to get the value of class
```
__example of set attribute__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="box">tthis is div 1</div>
  <p class="para">this is a simple line</p>
  <script src="index.js"></script>
</body>
</html>
```
```javascript
//js
let para = document.querySelector("p")
console.log(para.setAttribute("class","new class")); //set the name of class to new class
```

`Style`
- node.style

__Excample__
```html
//html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="box">this is div 1</div>
  <p class="para">this is a simple line</p>
  <script src="index.js"></script>
</body>
</html>
```
```css
//css
#box{
    height: 100px;
    width: 100px;
    background-color: chartreuse;
    border: 1px solid black;
    margin: 5px;
    text-align: center;
    padding-top: 60px;
}
```
```javascript
//js
let div = document.querySelector("div");
div.style.backgroundColor = "purple"

div.style.fontSize = "28px"
div.innerText ="Hello Boss!"
```
`Insert Elements`

let el = document.createElement(“div“)

- node.append( el ) //adds at the end of node (inside)
- node.prepend( el ) //adds at the start of node (inside)
- node.before( el ) //adds before the node (outside)
- node.after( el ) //adds after the node (outside)

__Example__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="box">this is div 1
    <ul>
      list
       <li>item1</li>
       <li>item2</li>
    </ul>
  </div>
  <p class="para">this is a simple line</p>
  <script src="index.js"></script>
</body>
</html>
```
```css
//css
#box{
    height: 400px;
    width: 100px;
    background-color: chartreuse;
    border: 1px solid black;
    margin: 5px;
    text-align: center;

}
```
```javascript
//js
let newBtn = document.createElement("Button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn); //adds  at the end of node
```
```javascript
let newBtn = document.createElement("Button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn); // button will be added at the top inside the box
```
```javascript
let newBtn = document.createElement("Button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.before(newBtn); //button will be added just before the div box
```
```javascript
let newBtn = document.createElement("Button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn); // button will be added just after the div box
```
```javascript
let newBtn = document.createElement("Button");
newBtn.innerText = "click me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn); //button will be added after the p text
```
`Delete Element`

- node.remove( ) //removes the node
```javascript
let newHeading = document.createElement("H1");
newHeading.innerText = "<i>Hi! i am New Here</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove(); // it will remove the newheding
```
__Let‘s Practice__

__Question 1.__ Create a new button element. Give it a text “click me”
, background color of red & text color
of white.
Insert the button as the first element inside the body tag.

__code__
```javascript
let newBtn = document.createElement("Button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);
```
__Question 2.__ Create a p tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the p element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.

__code__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <p class="content">this is a new text</p>

  <script src="index.js"></script>
</body>
</html>
```
```css
//css
.content{
    color: red;
}

.newclass{
    background-color: blue;
}
```
```javascript
let para = document.querySelector("p");
// para.setAttribute("class","newclass");

para.classList.add("newclass"); // by using classlist.add we can only add the features that was added in newclass but in setAttributes we overwrite the things like what was given in class is overwrite by newclass features.
```

## Events in JS
Events are fired to notify code of "interesting changes" that may affect code execution.
The change in the state of an object is known as an Event
- Mouse events (click, double click etc.)
- Keyboard events (keypress, keyup, keydown)
- Form events (submit etc.)
- Print event & many more

```javascript
//inline handling,here we write js code in html but this is not a good method.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <button onclick="console.log('button was clicked'); alert('hello')">
  click me!
 </button>

 <button ondblclick="console.log('button was clicked 2x'); alert('hello')">
  click me 2 times!
 </button>
 <div onmouseover="console.log('you are inside')">this is a box</div>

  <script src="index.js"></script>
</body>
</html>
```
`Event Handling in JS`

node.event = ( ) => {
//handle here
}

example

btn.onclick = ( ) => {
console.log(“btn was clicked”);
}
__code__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <button class="btn1">click me!</button>

 <div class="box1">this is a box</div>

  <script src="index.js"></script>
</body>
</html>
```
```css
//css
div{
    height: 100px;
    width: 100px;
    background-color: maroon;
}
```
```javascript
//js
let btn1 = document.querySelector(".btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked");
    let a=35;
    a++;
    console.log(a);
};

let box1 =document.querySelector(".box1");

box1.onmouseover =()=>{
    console.log("you are inside");
};

```
`Event Object`

It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
//handle here
}

e.target, e.type, e.clientX, e.clientY

__code__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <button class="btn1">click me!</button>

 <div class="box1">this is a box</div>

  <script src="index.js"></script>
</body>
</html>
```
```css
div{
    height: 100px;
    width: 100px;
    background-color: maroon;
}
```
```javascript
//js
let btn1 = document.querySelector(".btn1");

btn1.onclick = (evt) =>{
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let box1 =document.querySelector(".box1");

box1.onmouseover =(evt)=>{
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
```
`Event Listeners`
- node.addEventListener( event, callback )
- node.removeEventListener( event, callback )

*Note : the callback reference should be same to remove

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <button id="btn1">click me!</button>

 <div class="box1">this is a box</div>

  <script src="index.js"></script>
</body>
</html>
```
```javascript
let btn1 = document.querySelector("#btn1");

btn1.addEventListener ("click", (evt)=>{
    console.log("button  was clicked- hander1");
});

btn1.addEventListener ("click", ()=>{
    console.log("button  was clicked- handler2");

});

btn1.addEventListener ("click", (evt)=>{
    console.log("button  was clicked- handler3");

});

btn1.addEventListener ("click", (evt)=>{
    console.log("button  was clicked- handler4");

});

btn1.addEventListener ("click", (evt)=>{
    console.log("button  was clicked- handler5");

});
```

__Let‘s Practice__

__Question 1.__ Create a toggle button that changes the screen to dark-mode when clicked & light-mode
when clicked again.

__code__
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
 <button class="btn1">Dark MODE</button>
 <p>Welcome to my Website!</p>
  <script src="index.js"></script>
</body>
</html>
```
```css
.btn1{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid black;
    font-size: 4px;
    padding: 1px 3px;
}
.dark{
    color: white;
    background-color: black;
}
.light{
    color: black;
    background-color: white;
}
```
```javascript
let btn1 = document.querySelector(".btn1");
let body = document.querySelector("body");
let curr_mode = "light";

btn1.addEventListener("click", () =>{
    if(curr_mode==="light"){
        curr_mode="dark";
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else{
        curr_mode="light";
       body.classList.add("light");
       body.classList.remove("dark");
    }
    console.log(curr_mode);
});
```
## Classes & Objects
### Prototypes in JS
JS objects have a special property called prototype.

A javaScript object is an entity having state and behavior (properties and method).

We can set prototype using _ _ proto _ _

__Note__*If object & prototype have same method,
object’s method will be used.

__Example__
```javascript
const employee ={
    caltax () {
        console.log("tax rate is 10%");
    },
};
   
const karanarjun = {
    salary : "5000000",
    caltax(){
      console.log("tax rate is 20%");
    },
};

karanarjun.__proto__ =employee;
```

### Classes in JS
Class is a program-code template for creating objects.

Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}

let myObj = new MyClass( ) ;

__Example__
```javascript
class toyotacar {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = "brand";
        this.mileage = mileage;
    }
    start(){
        console.log("Started..");
    }

   stop(){
    console.log("Stoped..");
   }

}

let fortuner = new toyotacar("fortuner",10);//constructor
console.log(fortuner);
let lexus = new toyotacar("lexus",15); //constructor
console.log(lexus);

// fortuner.setbrand("fortuner");
// lexus.setbrand("lexus");
```
Classes in JS
Constructor( ) method is :
- automatically invoked by new
- initializes object

class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}

### Inheritance in JS
inheritance is passing down properties & methods from parent class to child class.

class Parent {
}
class Child extends Parent {
}

__Note__*If Child & Parent have same method, child’s
method will be used. [Method Overriding]

__Examples__
```javascript
class parent {
    sports(){
        console.log("cricket");
    }
    hello(){
        console.log("hello");
    }
}

class child extends parent{

}

let obj= new child();
```
```javascript
class person {
    constructor(){
        this.species="homo species"
    }
    eat(){
        console.log("Eating...");
    }
    sleep(){
        console.log("sleeping...");
    }
    work(){
        console.log("do nothing...");
    }
}
 class  engineer extends person{
    work(){
        console.log("working as coder...,building application..");

    }
 }

 class doctor extends person{
    work(){
        console.log("treating a patient...");
        
    }

 }

 let student= new engineer();
```
__output checking__
```javascript
> student.work(); //it shows the properties of child insted of work of parent.this method overriding.
index.js:17 working as coder...,building application..

<. undefined

> let p1 = new person();

<. undefined

> p1

<. person {species: 'homo species'}species: "homo species"[[Prototype]]: Object

> let e1 = new engineer();

<. undefined

> e1
engineer {species: 'homo species'}species: "homo species"[[Prototype]]: personconstructor: class engineerwork: ƒ work()[[Prototype]]: Object

```
### super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's
properties and methods.

- super( args ) // calls Parent‘s constructor
- super.parentMethod( args )

```javascript
class person {
    constructor(){
        console.log("enter parent constructor");
        this.species="homo species"
    }
    eat(){
        console.log("Eating...");
    }
    
}
 class  engineer extends person{

    constructor(branch){
        console.log("enter child constructor");
         super(); //to invoke parent class constructor as we not used then an error will occur which say :  Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new engineer
     
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("working as coder...,building application..");

    }
 }

 
 let engobj = new engineer("chemical engineer");
```
```output
enter child constructor
enter parent constructor
exit child constructor
```

```javascript
class person {
    constructor(name){
        this.species="homo species";
        this.name = name;
    }
    eat(){
        console.log("Eating...");
    }
    
}
 class  engineer extends person{

    constructor(name){
         super(name); //to invoke parent class constructor 
    }
    work(){
        super.eat() //here we must use super keyword with eat 
        console.log("working as coder...,building application..");

    }
 }

 
 

 let engobj = new engineer("Gaurav");
```
__Let‘s Practice__
__Question 1.__ You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.

__code__
```javascript
let data = "Secret information"
class user{
    constructor(name,email){
    this.name = name;
    this.email = email;
    }
    
    viewdata(){
        console.log("data",data);
    }
}

let student1 = new user("Gaurav","gk@gmail.com");
let student2 = new user("aman","am@gmail.com");

let teacher1 = new user("abhishek","ab@gmail.com");
let teacher2 = new user("Madan","md@gmail.com");
```
__Question 2.__ Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.

__code__
```javascript
let Data = "Secret information"
class user{
    constructor(name,email){
    this.name = name;
    this.email = email;
    }
    
    viewdata(){
        console.log("Data",Data);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData() {
        Data = "some new value";
    }
}

let student1 = new user("Gaurav","gk@gmail.com");
let student2 = new user("aman","am@gmail.com");

let teacher1 = new user("abhishek","ab@gmail.com");
let teacher2 = new user("Madan","md@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com");
```
__output check__
```javascript
> admin1
<. Admin {name: 'admin', email: 'admin@gmail.com'}email: "admin@gmail.com"name: "admin"[[Prototype]]: user
> Data
<. 'Secret information'
> admin1.editData();
<. undefined
> Data
<. 'some new value'
```
### Error Handling
try-catch

try {
... normal code
} catch ( err ) { //err is error object
...handling error
}

```javascript
let a=5;
let b=6;

console.log("a:",a);
console.log("b:",b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c); //err
}   
 catch(err){
        console.log(err);
    }


console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
```
### Sync in JS
`Synchronous`

Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
__Example of synchronous__
```javascript
console.log("one");
console.log("two");
console.log("three");
console.log("four");
//code will execute in sequence order
```
`Asynchronous`
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.

__Example of Asynchronous__
```javascript
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},4000);//timeout
console.log("three");
console.log("four");
//here one,two,three,four,will be printrd first then after the timeout hello will print.
```
`Callbacks`

A callback is a function passed as an argument to another function.
__Example__
```javascript
function sum(a,b){
    console.log(a + b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(2,3,sum);
```
__or__ by passing complete function
```javascript
function sum(a,b){
    console.log(a + b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(2,3,(a,b)=>{
    console.log(a + b);
});
```
call back by using settimeout
```javascript
const hello = () => {
    console.log("hello");
}
setTimeout(hello,5000)
```

`Callback Hell`

Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.

```javascript
//nesting
let age = 40;
if (age>20){
 if(age>60){
    console.log("legend");
 }
 else{
    console.log("middle");
 }
}
else{
    console.log("junior");
  }
```
```javascript
function getdata(dataid){
    console.log("Data",dataid);
}
```
```javascript
function getdata(dataid){ 
    setTimeout(()=>{
        console.log("data",dataid);
    },2000)
}

getdata(1);
getdata(2);
getdata(3);
//all data print at same time after given timeout
```
__Example of callback  hell__
```javascript
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
        getnextdata();
        }
    },2000)
}

//callback hell
getdata(1,()=>{
    console.log("getting data 2 ...");
    getdata(2,()=>{
        console.log("getting data 3 ...");
        getdata(3,()=>{
            console.log("getting data 4 ...");
            getdata(4);
        }); 
    });
})
```
### Promises
Promise is for “eventual” completion of task. It is an object in JS.
It is a solution to callback hell.

let promise = new Promise( (resolve, reject) => { .... } )
__Exampe__
```javascript
let promise = new Promise((resolve,reject)=>{
    console.log("i am promise");
    // resolve("success");
    reject("some error occured")
});
```

__Note:__ resolve & reject are callbacks provided by JS.

`Promises`

A JavaScript Promise object can be:
- Pending : the result is undefined
- Resolved : the result is a value (fulfilled)     resolve( result )
- Rejected : the result is an error object   reject( error )

__Note:__ Promise has state (pending, fulfilled) & some
result (result for resolve & error for reject).

__Example__
```javascript
function getData(dataid,getnextdata) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Data",dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
        },6000)
        
    });
}
```
__outputchecking__
```javascript
>let promise = getData(455);
<. undefined
 Data 455
> promise
Promise {<fulfilled>: 'success'}
> let promise = getData(35432);
<. undefined
> promise
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"
index.js:10 Data 35432
> promise
Promise {<fulfilled>: 'success'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"
```
`Promises`

.then( ) & .catch( )

- promise.then( ( res ) => { .... } )
- promise.catch( ( err )  => { .... } )

__Example__
```javascript
const getpromise = () =>{
    return new Promise((resolve,reject) => {
        console.log("i am promise");
        // resolve("sucess");
        reject("error")
    });
    
};

let promise = getpromise();

promise.then((res)=>{
    console.log("promise get full-filled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});
```
```javascript
function asynfunc1 (){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asynfunc2 (){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}
console.log("Fetching data 1...");
let p1 = asynfunc1();
p1.then((res)=>{
    console.log("Fetching data 2...");
    let p2=asynfunc2();
    p2.then((res)=>{});    
});
```

```javascript
function getData(dataid) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Data",dataid);
            resolve("success");
        },3000)
        
    });
}

//promise chain
console.log("getting data1...");
getData(1)
.then((res)=>{
    console.log("getting data2...");
    return getData(2)})
   .then((res)=>{
        console.log("getting data3...");
        return getData(3)
    })
    .then((res)=>{
        console.log(res);
    });

```
`Async-Await`

async function always returns a promise.

async function myFunc( ) { .... }

await pauses the execution of its surrounding async function until the promise is settled.

__Example__
```javascript
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },2000);
    });
}

//async await
async function getalldata(){
    console.log("getting data1...");
    await getdata(1);
    console.log("getting data2...");
    await getdata(2);
    console.log("getting data3...");
    await getdata(3);
    console.log("getting data4...");
    await getdata(4);
    console.log("getting data5...");
    await getdata(5);
    console.log("getting data6...");
    await getdata(6);
};
```
__Comparision between async ,callback hell and Promise chain__
```javascript
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },2000);
    });
}

//async await
async function getalldata(){
    console.log("getting data1...");
    await getdata(1);
    console.log("getting data2...");
    await getdata(2);
    console.log("getting data3...");
    await getdata(3);
    console.log("getting data4...");
    await getdata(4);
    console.log("getting data5...");
    await getdata(5);
    console.log("getting data6...");
    await getdata(6);
};

//promise chain
console.log("getting data1...");
getData(1)
.then((res)=>{
    console.log("getting data2...");
    return getData(2)})
   .then((res)=>{
        console.log("getting data3...");
        return getData(3)
    })
    .then((res)=>{
        console.log(res);
    });


//callback hell
getdata(1,()=>{
    console.log("getting data 2 ...");
    getdata(2,()=>{
        console.log("getting data 3 ...");
        getdata(3,()=>{
            console.log("getting data 4 ...");
            getdata(4);
        }); 
    });
})

```
__Note:__ async await is best  

### IIFE : Immediately Invoked Function Expression

IIFE is a function that is called immediately as soon as it is defined.

__Syntax__
```javascript
(function (){
    // ...
})();
```
__Example__
```javascript
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },2000);
    });
}

//async await
(async function getalldata(){
    console.log("getting data1...");
    await getdata(1);
    console.log("getting data2...");
    await getdata(2);
    console.log("getting data3...");
    await getdata(3);
    console.log("getting data4...");
    await getdata(4);
    console.log("getting data5...");
    await getdata(5);
    console.log("getting data6...");
    await getdata(6);
})();
```
