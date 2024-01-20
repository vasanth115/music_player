let x=document.getElementById("x");
let y=document.getElementById("y");
let image=document.getElementById("image");
let trackmovie=document.getElementById("trackartist");
let trackname=document.getElementById("audiotrack");
let endtime=document.getElementById("endtime");
let currenttiming=document.getElementById("currenttiming");
let range=document.getElementById("range");
let playbtn=document.getElementById("playbtn");
let issuffle=false;

let isrepeaton=false;
let isPlaying = false;
const music_list=[
    {
        img :"photo.jpeg",
        names : "vinmeen vidhaiyil",
        artist :"Thegadi",
        music :"Vinmeen-Vithaiyil.mp3"
    },
    {
        img :"download.jpg",
        names : "Oh-Penne",
        artist :"Vanakam Chennai",
        music :"Oh-Penne.mp3"
    },
    {
        img :"images.jpg",
        names :"aradhya song",
        artist :"Kushi",
        music :"Aradhya-MassTamilan.dev.mp3"
    },
    {
        img :"hukum.jpg",
        names : "Thalaivar alapara",
        artist :"Jailer",
        music :"Hukum Jailer_64-(DJPunjab).mp3"
    }
    ,
    {
        img :"leo.jpg",
        names : "badass leo das is a badass",
        artist :"Leo",
        music :"Badass.mp3"
    }
    ,
    {
        img :"leo.jpg",
        names : "Naa ready",
        artist :"Leo",
        music :"Naa Ready.mp3"
    },
    {
        img :"leo.jpg",
        names : "Anbenum",
        artist :"Leo",
        music :"Anbenum.mp3"
    },
    {
        img :"leo.jpg",
        names : "Im Scared",
        artist :"Leo",
        music :"Im Scared.mp3"
    },
    {
        img :"leo.jpg",
        names : "Lokiverse 2.0",
        artist :"Leo",
        music :"Lokiverse 2.0.mp3"
    },
    {
        img :"leo.jpg",
        names : "Ordinary Person",
        artist :"Leo",
        music :"Ordinary Person.mp3"
    },
    {
        img :"leo.jpg",
        names : "Villain Yaaru",
        artist :"Leo",
        music :"Villain Yaaru.mp3"
    },
    {
        img :"leo.jpg",
        names : "Thamarai Poovukkum Leo",
        artist :"Leo",
        music :"Thamarai Poovukkum Leo_64-(DJPunjab).mp3"
    }
    ,
    {
        img :"leo.jpg",
        names : "Karu-Karu-Karupayi",
        artist :"Leo",
        music :"Karu-Karu-Karupayi.mp3"
    },
    {
        img :"master.jpg",
        names : "Kutti Story Master ",
        artist :"Master",
        music :"Kutti Story Master 128 Kbps.mp3"
    },
    {
        img :"rdx.jpg",
        names : "Neela Nilave Song",
        artist :"RDX",
        music :"Neela Nilave Song.mp3"
    },



    {
        img :"joe.jpg",
        names : "Urugi Urugi",
        artist :"Joe",
        music :"Urugi Urugi Joe 128 Kbps.mp3"
    },
    {
        img :"adiye.jpg",
        names : "Vaa Senthaazhini",
        artist :"adiye",
        music :"Vaa Senthaazhini Adiye 128 Kbps.mp3"
    },
    {
        img :"Marudhani-Marudhani.jpg",
        names : "Marudhani-Marudhani",
        artist :"sakarakatti",
        music :"Marudhani-Marudhani.mp3"
    },
    {
        img :"milumathi.jpg",
        names : "Mulumathy-Avalathu-Mugamagum",
        artist :"jodha akbar",
        music :"Mulumathy-Avalathu-Mugamagum.mp3"
    },
    {
        img :"vadachennai.jpg",
        names : "Kaarkuzhal-Kadavaiye-MassTamilan.com",
        artist :"vadachennai",
        music :"Kaarkuzhal-Kadavaiye-MassTamilan.com.mp3"
    }
];

let updateTimer;
let curr_track =document.createElement("audio");
var k=0;
on();
function on()
{
   curr_track.src=music_list[k].music;
   curr_track.load();
   image.src=music_list[k].img;
   trackmovie.innerHTML=music_list[k].artist;
   trackname.innerHTML=music_list[k].names;
   y.innerHTML=music_list.length;
   x.innerHTML=k+1;
   curr_track.addEventListener('ended', nextTrack);
   updateTimer = setInterval(setUpdate, 1000);
}

function toseek()
{
    let current_time=curr_track.duration*(range.value/100);
    curr_track.currentTime=current_time;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        range.value = seekPosition;
        
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currenttiming.textContent= currentMinutes + ":" + currentSeconds;
        endtime.textContent= durationMinutes + ":" + durationSeconds;
    }
}

function playsong()
{
    isPlaying=true;
    curr_track.play();
    playbtn.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>';
}


function pausesong()
{
    isPlaying=false;
    curr_track.pause();
    playbtn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
}

document.addEventListener('keyup',(event)=>{
    switch(event.code)
    {
        case "Space":
            playpause();
            break;
        case "ArrowRight":
            nextsong();
            break;
        case "ArrowLeft":
            forward();
            break;
        case "KeyQ":
            mute();
            break;
        case "KeyW":
            max();
            break;
        case "KeyR":
            repeat();
            break;
    }
})

function playpause()
{
   if(isPlaying==false)
   {
    playsong();
    playbtn.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>';
   }
   else
   {
    pausesong();
    playbtn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
   }
}

function forward()
{
    if(k!=0)
    {
        isPlaying=true;
        k--;
        on();
        nextplay();
    }
}

function nextsong()
{
    if(k+1!=music_list.length)
    {
        isPlaying=true
      k++;
      on();
      nextplay();
    }
}

function nextTrack()
{
   if(isrepeaton!=true)
   {
    k++;
    on();
    nextplay();
   }
   else
   {
    on();
    nextplay();
   }
}

function nextplay()
{
    playbtn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
    curr_track.play();
}

let repeatsong=document.getElementById("r");
let s=0;
function repeat()
{
   if(s%2==0)
   {
    isrepeaton=true;
    repeatsong.style.color="gold";
    s++;
    let current_index=k;

   }
   else
   {
    isrepeaton=false;
    repeatsong.style.color="aqua";
    s++;
   }
}

function playbutton()
{
    if(isPlaying==true)
    {
        playbtn.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>';
    }
    else{
        playbtn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
    }
}
let inb=setInterval(playbutton,1000);

let sound=document.getElementById("sound");
function vol()
{
    sound.addEventListener("input",()=>{
        curr_track.volume=sound.value/100;
    })
}

function mute()
{
   curr_track.volume=0;
   sound.value=0;
}

function max()
{
    sound.value=100;
    curr_track.volume=1;
}

function share()
{
    let input1=prompt("Enter the whatsapp id ");
    let string="https://wa.me/91";
    string=string+input1;
    window.location.href=string;
}