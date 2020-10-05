// welcome message
var user = 'Presa';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest reviews for Atom !';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 19.99,
    studentDiscount = .15,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);