// const button = document.querySelector(".play");
// const btn = document.querySelector(".stop");
// let id = 0;

// button.addEventListener("click", function() {
//   id = setInterval(() => {
//     console.log("my name");
//   }, 3000);
// });

// btn.addEventListener("click", function() {
//   clearTimeout(id);
//   id = 0;
// });
// const buttonA = document.getElementById("buttonA");
// const buttonB = document.getElementById("buttonB");

// buttonA.addEventListener("click", function() {
//   buttonA.disabled = true;
//   buttonB.disabled = false;
// });

// buttonB.addEventListener("click", function() {
//   console.log("Button B clicked!");
// });

// const hex=["red","blue","black","pink"]
// const button= document.querySelector(".play")
// const btn= document.querySelector(".stop")
// var id =0

// button.addEventListener("click", function(){
//  id= setInterval(function(){
//     const ran= random()
//   document.body.style.backgroundColor=hex[ran]
//   }, 1000)
// })

// btn.addEventListener("click", function(){
//   clearInterval(id)
// })

// function  random(){
//   return Math.floor(Math.random()*hex.length)
// }
// function displayText() {
//   const inputText = document.getElementById("inputField").value;
//   document.getElementById("displayArea").innerText = inputText;
// }

// var rat=""
// console.log(rat)
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const screen = calculator.querySelector('.calculator-screen');

let firstOperand = null;
let operator = null;
let shouldResetScreen = false;

const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
}
