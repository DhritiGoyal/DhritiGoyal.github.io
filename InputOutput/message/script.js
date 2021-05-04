
// let clickDiv = document.querySelector("#clickDiv");

// //click Event 
// clickDiv.addEventListener("click", function(event){
//     console.log("Click")
//     console.log(event);
// });

// //Mousedown Event

// clickDiv.addEventListener("mousedown", function(e){
//     console.log("Mouse down!")
//     console.log(e);
// });

// //Mouseup Event

// clickDiv.addEventListener("mouseup", function(event){
//     console.log("Mouse up!")
//     console.log(event);
// });

// //Scroll message fill

// let scrollDiv = document.querySelector("#scrollDiv");

// //Wheel (scroll) event 
// scrollDiv.addEventListener("wheel", function(event){
//     console.log("Wheel!");
//     console.log(event);
// })






// //adding a cursor 
// let myCursor = document.querySelector("#customCursor");

// window.addEventListener("mousemove", function(event){
//     console.log(event);
//     console.log("X: ");
//     console.log(event.pageX);
//     console.log("Y: ");
//     console.log(event.pageY);
//     myCursor.style.top = (event.pageY - 20) + "px";
//     myCursor.style.left = (event.pageX  - 20) + "px";
// });






//painter 
// let container = document.querySelector(".grid-container");

// let clearDrawing = document.querySelector("#clearDrawing");
// let isPainting = false;

// for (let i = 0;  i < 30 * 30; i ++){
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("pixel");

//     // newDiv.addEventListener("click", function(){
//     //     newDiv.style.backgroundColor = "black";
//     // })

//      newDiv.addEventListener("mousedown", function(){
//         isPainting = true;
//         newDiv.style.backgroundColor = "black";
//     });

//     newDiv.addEventListener("mouseenter", function(){
//         newDiv.style.backgroundColor = "black";
//     });

//     newDiv.addEventListener("mouseup", function(){
//         isPainting = false;
//     });
    
//     clearDrawing.addEventListener("click", function(){
//         newDiv.style.background = "white";
//     })

//     container.appendChild(newDiv);
// }






//key pressing down

// let result = document.querySelector("#result");

// document.addEventListener("keydown", function(event){
//     console.log(event);
//     console.log("what did we just press:")
//     console.log(event.key)
//     if (event.key == "Enter"){
//         document.body.classList.toggle("blue");
//     }

//     result.innerText = "You just pressed: " + event.key;
// })






//input text USE THIS FOR YOUR DDDDDDDDDD

// let inputElement = document.querySelector("#input");

// let result = document.querySelector("#result");

// inputElement.addEventListener("keydown", function(event){
//     if (event.key == "Enter"){
//         //show the text on the page
//         console.log(inputElement.value);
//         result.innerText = "Your message: " + inputElement.value;
        
//         inputElement.value = "";
//     }
// });


//adding songs 

let chords = {
    'Aa': {
        'audio': 'audio/amaj/amaj1.mp3',
        'chord': 'amaj1'
    },
    'Bb': {
        'audio': 'audio/amaj/amaj2.mp3',
        'chord': 'amaj2'
    },

    'Cc': 'amaj3.mp3',
    'Dd': 'amaj4.mp3',
    'Ee': 'amaj5.mp3',
    'Ff': 'amin1.mp3',
    'Gg': 'amin2.mp3',
    'Hh': 'amin3.mp3',
    'Ii': 'amin4.mp3',
    'Jj': 'amin5.mp3',
    'Kk': 'amin6.mp3',
    'Ll': 'amin7.mp3',
    'Mm': 'cmaj1.mp3',
    'Nn': 'cmaj2.mp3',
    'Oo': 'cmaj3.mp3',
    'Pp': 'cmaj4.mp3',
    'Qq': 'cmaj5.mp3',
    'Rr': 'cmaj6.mp3',
    'Ss': 'cmaj7.mp3',
    'Tt': 'dmaj1.mp3',
    'Uu': 'dmaj2.mp3',
    'Vv': 'dmaj3.mp3',
    'Ww': 'dmaj4.mp3',
    'Xx': 'dmaj5.mp3',
    'Yy': 'emaj1.mp3',
    'Zz': 'emaj2.mp3',

    '148': 'emaj3.mp3',
    '259': 'emaj4.mp3',
    '360': 'emaj5.mp3',


    ',./': 'fmaj1.mp3',
    ';:"': 'fmaj2.mp3',
    '-()+': 'fmaj3.mp3',
    '*&^#!': 'fmaj4.mp3',
    '~–|': 'fmaj5.mp3',
    '=@': 'fmaj6.mp3',

};

let output = document.querySelector('#result');

let input = document.querySelector('#input');
let audioChords = [];

function playChord(event) {

    if (event.key == 'Enter') {
       
        let ourText = input.value;
        
        Array.from(ourText).forEach((key) => {
            let chord = Object.keys(chords).find(k => k.includes(key));
            if (chord) {
                let audio = document.createElement('audio');
                audio.src = chords[chord].audio; 
                audio.play();
                audioChords.push(audio);

                let img = document.createElement('img');
                img.scr = `images/${chords[chord].chord}.png`; // Aa.img
                console.log(`images/${chords[chord].chord}.png`);
                result.append(img);
            }
        });
    }
}

input.addEventListener('keyup', playChord);

