const myHeading = document.getElementById("myHeading"); 
const myButton = document.getElementById("myButton");
const myResetButton = document.getElementById("myResetButton");
const myTextInput = document.getElementById("myTextInput");

// Click Headline to make Red
// myHeading.addEventListener('click', () => {
// 	myHeading.style.color = 'red';
// });

// Button = Headline color
// myButton.addEventListener('click', () => {
// 	myHeading.style.color = RGBgenerate();
// });


// Type Color & Click Button to Headline Red
// myButton.addEventListener('click', () => {
// 	myHeading.style.color = myTextInput.value;
// });


// Type Color & Click Button to Updage BG Color
myButton.addEventListener('click', () => {
	myBackground.style.backgroundColor = myTextInput.value;
});

// Random BG Color
myResetButton.addEventListener('click', () => {
	myBackground.style.backgroundColor = RGBgenerate();
});


// myResetButton.addEventListener('click', () => {
// 	myHeading.style.color = "#484848";
// });

// myResetButton.addEventListener('click', () => {
// 	myHeading.style.color = "rgb(255,255,0)";
// });


// BEST Headline Changer
// myResetButton.addEventListener('click', () => {
// 	myHeading.style.color = RGBgenerate();
// });







// SlIDER BORDER WIDTH FAIL

// const para = document.getElementById("para");
// const myRange = document.getElementById("myRange");

// myRange.addEventListener('click', () => {
// 	para.style.borderWidth = myRange.value;
// });





// RANDOM NUMBER FUNCTIONS


// OLD School
// function RandomNumber() { 
// return Math.floor(Math.random() * 255) +1 }

// Add Alpha Randomizer
// function RandomNumberAlpha() { 
// return (Math.random() * 1) }

// NEW School
let RandoNumber = () => Math.floor(Math.random() * 255) +1;


// OLD School
// var RGBgenerate = "rgb(" + RandoNumber() + "," + RandoNumber() + "," + RandoNumber() +")";

// NEW School - rgb(255,255,0)
// let RGBgenerate = `rgb(${RandoNumber()},${RandoNumber()},${RandoNumber()})`;

// Function
let RGBgenerate = () => `rgb(${RandoNumber()},${RandoNumber()},${RandoNumber()})`;

