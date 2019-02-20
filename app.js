// function statment
function greet() {
    console.log('hi');
}
greet();

// function are first-class
function logGreeting(p) {
    p();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Tony');
}
greetMe(); 

// It's first-class
logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function() {
    console.log('Hello Tony!');
});

