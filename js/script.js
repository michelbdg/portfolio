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
const trackTime = document.querySelector("#track-time");
const playButton = document.querySelector("#play-btn");
const pauseButton = document.querySelector("#pause-btn");
const stopButton = document.querySelector("#stop-btn");
const volume = document.querySelector("#volume");
const volumeValue = document.querySelector("#volume-value");

//On récupère la durée du mp3
let duration = audio.duration;



//le bouton play
playButton.addEventListener("click", function(){
    audio.play();
    audio.volume = volume.value,
    pauseButton.style.display = "initial";
    stopButton.style.display = "initial";
    this.style.display = "none";
})


//button pause 
pauseButton.addEventListener("click",function(){
    audio.pause();
    playButton.style.display = "initial";
    this.style.display = "none";
})


//button stop
stopButton.addEventListener("click", function(){
    audio.pause();
    audio.currentTime = 0;
    playButton.style.display = "initial";
    pauseButton.style.display = "none";
    this.style.display = "none";
});

// le timer 
audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
    elapsed.textContent = buildDuration(this.currentTime);
});

track.addEventListener("input", function(){
    elapsed.textContent = buildDuration(this.value);
    audio.currentTime = this.value;
});

/* changer le volume */
volume.addEventListener("input", function(){
    audio.volume = this.value;
    volumeValue.textContent = this.value * 100 + "%";
});


// Affiche la durée de la musique 
buildDuration(duration);
trackTime.textContent = buildDuration(duration);
function buildDuration(duration){
    let minutes = Math.floor(duration / 60);
    let reste = duration % 60;
    let secondes = Math.floor(reste);
    secondes = String(secondes).padStart(2, "0");
    return minutes + ":" + secondes;
};