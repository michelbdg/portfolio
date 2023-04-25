/* partie menu */

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open')
})

/* Lecteur audio personnalisé */
const audio = document.querySelector("audio");
const track = document.querySelector("#track");
const elapsed = document.querySelector("#elapsed");
const trackTime = document.querySelector("#play-btn");
const playButton = document.querySelector("#pause-btn");
const pauseButton = document.querySelector("#stop-btn");
const volume = document.querySelector("#volume");
const volumeValue = document.querySelector("#volume-value");

//On récupère la duréé du mp3

let duration = audio.duration;

console.log(duration)