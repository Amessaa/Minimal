console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let id0 = document.getElementById('0');
let id1 = document.getElementById('1');
let id2 = document.getElementById('2');
let id3 = document.getElementById('3');
let id4 = document.getElementById('4');
let id5 = document.getElementById('5');
let id6 = document.getElementById('6');
let id7 = document.getElementById('7');
let id8 = document.getElementById('8');
let id9 = document.getElementById('9');

let id= [
    id0,id1,id2,id3,id4,id5,id6,id7,id8,id9
]

let currid = id[songIndex];
let nextid = id[songIndex + 1];
let preid = id[songIndex - 1];

let songs = [
    {songName: "Lofi Study", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Empty Mind", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Just Relax", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Calm soul", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "The Weekend", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Owlets", filePath: "songs/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "Pillow fort", filePath: "songs/7.mp3", coverPath: "covers/2.jpg"},
    {songName: "Steadfast Boots", filePath: "songs/8.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ghostrifter", filePath: "songs/9.mp3", coverPath: "covers/4.jpg"},
    {songName: "Calm Mind", filePath: "songs/10.mp3", coverPath: "covers/5.jpg"},
   
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
// Handle play/pause click

masterPlay.addEventListener('click', (e)=>{
    if(audioElement.paused ||  audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        currid.classList.remove('fa-play-circle');
        currid.classList.add('fa-pause-circle');
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        currid.classList.remove('fa-pause-circle');
        currid.classList.add('fa-play-circle');
   }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if(audioElement.paused ||  audioElement.currentTime<=0){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');}

        else if(audioElement.play)
        {   songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.pause();
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            gif.style.opacity = 0;
           
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
        currid = id[songIndex+9];
        nextid = id[songIndex];
    }
    else{
        songIndex += 1;
        currid = id[songIndex-1];
        nextid = id[songIndex];
    }
    
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    currid.classList.remove('fa-pause-circle');
    currid.classList.add('fa-play-circle');
    nextid.classList.remove('fa-play-circle');
    nextid.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    currid = id[songIndex];
  
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9
        currid = id[0];
        preid = id[songIndex];
    }
    else{
        songIndex -= 1;
        preid = id[songIndex];
        currid = id[songIndex+1];
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    preid.classList.remove('fa-play-circle');
    preid.classList.add('fa-pause-circle');
    currid.classList.remove('fa-pause-circle');
    currid.classList.add('fa-play-circle');
    gif.style.opacity = 1;
    currid = id[songIndex];
})