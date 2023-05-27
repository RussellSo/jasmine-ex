
let isVowel = function(char) {
  return "aeiou".indexOf(char) !== -1
}

let vowelInWord = function(word) {
  for (let char of word) {
    if (isVowel(char)) return true; 
  }
    return false;
}

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

update()
  
}

// Get the current values from the UI
// Update the monthly payment
//THOUGHT PROCESS: update monthly is the final dom changer - passed in is the math function - this is all within an update function that just helps seperate and keeps the other functions clean.
function update() {
let vals = getCurrentUIValues()
updateMonthly(calculateMonthlyPayment(vals))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //placeholder math
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
let resultValue = document.querySelector("#monthly-payment")

  resultValue.innerText = monthly
}

function add(a, b) {

  return a + b
}
