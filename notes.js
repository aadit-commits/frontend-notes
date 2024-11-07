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
1.) East way = window prompt
let username = window.prompt("Whats your username ?");
console.log(username)
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
  document.getElementById("myH1").textContent = `Hello ${username}`
}

Type Conversion : Change the datatype of a value to another
