// age calculator (kinda)

// variables to store data 
var age = prompt("What is your age?");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

// the math
var agePlus10 = parseInt(age) + 10;
var ageMinus10 = parseInt(age) - 10;
var ageTimes10 = parseInt(age) * 10;
var ageDivide10 = parseInt(age) / 10;

// testing (the math)
// console.log(agePlus10); 
// console.log(ageMinus10);
// console.log(ageTimes10);
// console.log(ageDivide10);

// update DOM
plus.innerText = `Your age plus 10 equals: ${agePlus10}.`; 
minus.innerText = `Your age minus 10 equals: ${ageMinus10}.`; 
multiply.innerText = `Your age times 10 equals: ${ageTimes10}.`; 
divide.innerText = `Your age divided by 10 equals: ${ageDivide10}.`; 
