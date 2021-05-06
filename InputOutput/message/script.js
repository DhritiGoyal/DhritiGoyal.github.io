

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

    'Cc': {
        'audio': 'audio/amaj/amaj3.mp3',
        'chord': 'amaj3'
    },

    'Dd': {
        'audio': 'audio/amaj/amaj4.mp3',
        'chord': 'amaj4'
        },

    'Ee': {
        'audio': 'audio/amaj/amaj5.mp3',
        'chord': 'amaj5'
        },

    'Ff':  {
        'audio': 'audio/amin/amin1.mp3',
        'chord': 'amin1'
        },

    'Gg': {
        'audio': 'audio/amin/amin2.mp3',
        'chord': 'amin2'
        },

    'Hh': {
        'audio': 'audio/amin/amin3.mp3',
        'chord': 'amin3'
        },

    'Ii': {
        'audio': 'audio/amin/amin4.mp3',
        'chord': 'amin4'
        },

    'Jj': {
        'audio': 'audio/amin/amin5.mp3',
        'chord': 'amin5'
        },

    'Kk':{
        'audio': 'audio/amin/amin6.mp3',
        'chord': 'amin6'
        },

    'Ll':{
        'audio': 'audio/amin/amin7.mp3',
        'chord': 'amin7'
        },

    'Mm':{
        'audio': 'audio/cmaj/cmaj1.mp3',
        'chord': 'cmaj1'
        },

    'Nn':{
        'audio': 'audio/cmaj/cmaj2.mp3',
        'chord': 'cmaj2'
        },

    'Oo':{
        'audio': 'audio/cmaj/cmaj3.mp3',
        'chord': 'cmaj3'
        },

    'Pp':{
        'audio': 'audio/cmaj/cmaj4.mp3',
        'chord': 'cmaj4'
        },

    'Qq':{
        'audio': 'audio/cmaj/cmaj5.mp3',
        'chord': 'cmaj5'
        },

    'Rr':{
        'audio': 'audio/cmaj/cmaj6.mp3',
        'chord': 'cmaj6'
        },

    'Ss':{
        'audio': 'audio/cmaj/cmaj7.mp3',
        'chord': 'cmaj7'
        },

    'Tt':{
        'audio': 'audio/dmaj/dmaj1.mp3',
        'chord': 'dmaj1'
        },

    'Uu':{
        'audio': 'audio/dmaj/dmaj2.mp3',
        'chord': 'dmaj2'
        },

    'Vv':{
        'audio': 'audio/dmaj/dmaj3.mp3',
        'chord': 'dmaj3'
        },

    'Ww':{
        'audio': 'audio/dmaj/dmaj4.mp3',
        'chord': 'dmaj4'
        },

    'Xx':{
        'audio': 'audio/dmaj/dmaj5.mp3',
        'chord': 'dmaj5'
        },

    'Yy':{
        'audio': 'audio/emaj/emaj1.mp3',
        'chord': 'emaj1'
        },

    'Zz':{
        'audio': 'audio/emaj/emaj2.mp3',
        'chord': 'emaj2'
        },


    '148':{
        'audio': 'audio/emaj/emaj3.mp3',
        'chord': 'emaj3'
        },

    '259':{
        'audio': 'audio/emaj/emaj4.mp3',
        'chord': 'emaj4'
        },

    '360':{
        'audio': 'audio/emaj/emaj5.mp3',
        'chord': 'emaj5'
        },



    ',./':{
        'audio': 'audio/fmaj/fmaj1.mp3',
        'chord': 'fmaj1'
        },

    ';:"':{
        'audio': 'audio/fmaj/fmaj2.mp3',
        'chord': 'fmaj2'
        },

    '-()+':{
        'audio': 'audio/fmaj/fmaj3.mp3',
        'chord': 'fmaj3'
        },

    '*&^#!':{
        'audio': 'audio/fmaj/fmaj4.mp3',
        'chord': 'fmaj4'
        },

    '~–|':{
        'audio': 'audio/fmaj/fmaj5.mp3',
    'chord': 'fmaj5'
    },

    '=@':{
        'audio': 'audio/fmaj/fmaj6.mp3',
    'chord': 'fmaj6'
    },

};

let output = document.querySelector('#result');
let input = document.querySelector('#input');
let audioChords = [];
let audio = document.createElement('audio');
let letters;

function playAudio(src){
    let promise = new Promise((resolve, reject) => {
        audio.src = src;
        audio.play();
        audio.addEventListener('ended', () => {
          resolve();
        }, {once: true});
      });
      return promise;
}

function cueAudio() {
    let letter = letters.shift();
    let chord = Object.keys(chords).find(k => k.includes(letter));
    if (chord) {
      playAudio(chords[chord].audio).then(cueAudio);
    } else if (letters.length){
      cueAudio();
    }
  }


function playChord(event) {

    if (event.key == 'Enter') {
        let ourText = input.value;
        letters = Array.from(ourText);
        
        letters.forEach((key) => {
            let chord = Object.keys(chords).find(k => k.includes(key));
            if (chord) {
                // let audio = document.createElement('audio');
                // audio.src = chords[chord].audio; 
                // audio.play();
                // audioChords.push(audio);

                let img = document.createElement('img');
                img.scr = `images/${chords[chord].chord}.png`; // Aa.img
                console.log(`images/${chords[chord].chord}.png`);
                result.append(img);
            }
        });
        //start playing audio files
        cueAudio();
    }
}

input.addEventListener('keyup', playChord);

function inputremove() {
    input.value = ''
}