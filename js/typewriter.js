window.onload = function() {

  // Input an array of sentences for the program to write
  // Ensure you create a span with id="word-count-#" for each
  // starting with id="word-count-0"
  var textArray = [
    'Before we write for you... ',
    'We think with you',
    "And then, we revise until it's right. "
  ]

  // Blink cursor twice and leave it displayed
  blinkingCursor(2500);

  // generate random typing speed
  var min = 40;
  var max = 50;
  var typeSpeed = Math.floor(Math.random() * (max - min + 1)) + min;

  // Prepare for looping
  var t = 0;
  //
  // for (t=0;t<textArray.length;t++) {
  //   document.getElementById("word-count-"+t).innerHTML += 'test!';
  //
  // }

  var i = 0;

  var txt = 'Before we write for you...';
  var txt1 = 'We think with you. ';
  var txt2 = "And then we revise until it's right. ";

  setTimeout(function() { typeWriter(); },2400);

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("word-count-"+t).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, typeSpeed);
    }
  }

  // blink cursor one more time, then hide it
  setTimeout(function() { blinkingCursor(2400); },2400);
  setTimeout(function() { hideCursor(); },5400);

}

function blinkingCursor(timeout) {
  var cursor = true;
  var speed = 600;

  var blink = setInterval(() => {
     if(cursor) {
       document.getElementById('cursor').style.opacity = 0;
       cursor = false;
     }else {
       document.getElementById('cursor').style.opacity = 1;
       cursor = true;
     }
  }, speed);

  // stop the blinking
  setTimeout(function() { clearInterval(blink); },timeout);

}

function displayWords(x) {
  document.getElementById("word-count-"+t).innerHTML = x;
}

function hideCursor() {
  document.getElementById('cursor').style.opacity = 0;
}



// new code

document.addEventListener('DOMContentLoaded', function() {
  // alert("Ready!");
  typewriteIt();
}, false);

// Input an array of sentences for the program to write
// Ensure you create a span with id="word-count-#" for each
// starting with id="word-count-0"
const textArray = [
  'Before we write for you... ',
  'We think with you. ',
  "And then, we revise until it's right. "
]

function typewriteIt() {

// generate random typing speed
var min = 40;
var max = 50;
var typeSpeed = function() {Math.floor(Math.random() * (max - min + 1)) + min};

// Blink cursor twice and leave it displayed
blinkingCursor(2500);

// Loop through the array
var t = 0;
for (t=0;t<textArray.length;t++) {

  // delete this stuff later !!!
  document.getElementById("test").innerHTML += textArray[t];
  var txt = "test."
  console.log(t);
  console.log(txt);

  // Clicking and clacking
  var i = 0;
  console.log("typing #"+t+": "+textArray[t]);
  setTimeout(function() { typeWriter(textArray[t], t); },2400);

}

// blink cursor one more time, then hide it
setTimeout(function() { blinkingCursor(2400); },2400);
setTimeout(function() { hideCursor(); },5400);


function typeWriter(txt,t) {
  console.log(txt);
  if (i < txt.length) {
    document.getElementById("word-count-"+0).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, typeSpeed);
  }
}

function blinkingCursor(timeout) {
  var cursor = true;
  var speed = 600;

  var blink = setInterval(() => {
     if(cursor) {
       document.getElementById('cursor').style.opacity = 0;
       cursor = false;
     }else {
       document.getElementById('cursor').style.opacity = 1;
       cursor = true;
     }
  }, speed);

  // stop the blinking
  setTimeout(function() { clearInterval(blink); },timeout);

}

function hideCursor() {
  document.getElementById('cursor').style.opacity = 0;
}

}
