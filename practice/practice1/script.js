console.log('hiii!');
alert('wtf is life!');

let myVariable = 4;
console.log('myVariable');

let anotherVariable = 'jmd';
console.log(anotherVariable);

let howDoesThisWork = 'hi ' + anotherVariable;
console.log(howDoesThisWork);

let isItNightOut = true;
if (isItNightOut) {
}
let name = 'hi';
if (name == 'ew') {
  console.log('run!!!');
} else if (name != 'ew') {
    console.log('Guess again!!!');
  }


let guess = 1;
// how many eggs do we have?
if (guess < 12) {
  console.log("you're under!");
} else if (guess > 12) {
  console.log("you're over!");
} else if (guess == 12) {
  console.log("bingo!");
}

function hiThere(name){
    console.log('hanji ' + name);
}

hiThere('20');
hiThere("");

let myText = "I'm totally not confused by all this! 😅";
console.log(myText);
myText = myText.toUpperCase();
            // ^ here we're using dot notation to access the
            //   toUpperCase() function that's a part of strings..
console.log("I said...", myText);

//querySelector shows the class on the screen 
let myBlog = document.querySelector('jmd');

//shows it on the screen with Element tag
let dogElement = document.querySelector('jmd-2');
console.log('my blog element:', dogElement);
dogElement.classList.add('red');


//addEventListener takes two arguments, 
//the event you want to listen for and then what 
//function you want to run when that event happens:
function showSurprise() {
    console.log('surprise!');
  }

  let paragraph = document.querySelector('#my-text');
  paragraph.addEventListener('click', showSurprise);
      // note here we don't include the () here  ^
      // that would call the function right away
      // instead we just supply the name alone...


//blur poem- connecting classes, css, and html
let haiku = document.querySelector('.haiku');
haiku.addEventListener('click', function () {
  haiku.classList.add('snowfall');
});