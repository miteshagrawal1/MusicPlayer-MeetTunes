let songs = ['pal_pal_dil_ke_pass.mp3', 'chookarmeremanko.mp3', 'yeshammastani.mp3', 'dekhaekkhwab.mp3', 'dilbarmere.mp3', 'pyardewanahotahain.mp3', 'osathire.mp3', 'omeredilkechain.mp3', 'intehahogayi.mp3', 'meetnamilare.mp3', 'rimjhimgiresawan.mp3', 'salameishq.mp3']

let imgs = ['ppdlp.jpg', 'cmmk.jpg', 'ysm.jpg', 'dekhaek.jpg', 'kmktm.jpg', 'pdhh.jpg', 'osr.jpg', 'omdkc.jpg', 'ihg.jpg', 'mnmr.jpg','rjgs.jpg', 'sei.jpg']

let index = 0;

let play = document.getElementById("play")
let pause = document.getElementById("pause")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")
let song = document.getElementById("song")
let range = document.getElementById("range");
let currentsong;
play.addEventListener("click", () => {
    play.style.display = "none"
    pause.style.display = "block";
    currentsong = songs[index];
    song.src = currentsong;
    document.getElementById("name").innerHTML = currentsong;
    document.getElementById("img").src = imgs[index];
    song.play();
})
pause.addEventListener("click", () => {
    pause.style.display = "none"
    play.style.display = "block";
    song.pause();
})
backward.addEventListener("click", () => {
    if (index == 0) {
        alert("choose next song");
        index = 0;
    }
    else {
        index = index - 1;
    }
    pause.style.display = "none"
    play.style.display = "block";
    song.pause();
    currentsong = songs[index];
    document.getElementById("name").innerHTML = currentsong;
    document.getElementById("img").src = imgs[index];
})
forward.addEventListener("click", () => {
    if (index == (songs.length - 1)) {
        alert("choose previous song");
    }
    else {
        index = index + 1;
    }
    pause.style.display = "none"
    play.style.display = "block"
    song.pause();
    currentsong = songs[index];
    document.getElementById("name").innerHTML = currentsong;
    document.getElementById("img").src = imgs[index];
})
song.addEventListener("timeupdate", ()=>{
    const value = (song.currentTime / song.duration) * 100;
    range.value = value;
})
range.addEventListener("input",()=>{
    const inputfromme = (range.value / 100) * song.duration;
    song.currentTime = inputfromme;
})