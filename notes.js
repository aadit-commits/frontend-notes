Variable = A container that stores value. Behaves as if it were the value it contains.
Declaration let x;
Assignment x = 100; 

Data types in Javascript : Number, string, boolean, null, undefined

Arithematic operators = ( +, -, *, /, **, %)
Assignment operators = ( +=, -=, *=, /=, **=, %=)
Increment operator = ++
Decrement operator = --

Operator Precedence : 
1.) Paranthesis ()
2.) Exponents
3.) Multiplication, Division, Modulo
4.) Addition, Subtraction

Accept User Prompt :
1.) Easy way = window prompt
let username = window.prompt("Whats your username ?");
console.log(username);
2.) Professional way = HTML Textbox
HTML Code :
<body>
  <h1 id="myH1">Welcome</h1>
  <input id="myText">
  <label>Username :</label>
  <button id="mySubmit">Submit</button>
</body>
JS Code :
let username;
document.getElementById("mySubmit").onclick = function(){
  username = doument.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username};`
}

Type Conversion : Change the datatype of a value to another
let x = "0";
x=Number(x);
x=String(x);
x=Boolean(x);

console.log(typeof x);
typeof is used to print the data type of a variable.

const = a variable that can't be changed

Math = built-in object that provides a collection of properties and methods

console.log(Math.PI)
console.log(Math.E)

let x = 1
let y = 2
let z = 3

Math.round(x)
Math.floor(x)
Math.ceil(x)
Math.trunc(x)
Math.pow(x,y)
Math.sqrt(x)
Math.log(x)
Math.sin(x)
Math.cos(x)
Math.tan(x)
Math.abs(x)
Math.sign(x)
Math.max(x,y,z)
Math.min(x,y,z)
