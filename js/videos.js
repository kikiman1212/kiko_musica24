
const conejo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const  alanWalker = "https://www.youtube.com/embed/p1rUuxCJfIU?si=wkDM26__NTnlHVHB";
const lacrimosa = "https://www.youtube.com/embed/H4Ji9tsbW7g?si=J5tP3cpZxisRhKUM";
const regue = "https://www.youtube.com/embed/UOIpqGDI0yE?si=uUj_fF5RKlMMKpSn";
const gus2 = "https://www.youtube.com/embed/sWOYtgBoBiE?si=NGDTOLpL0OgOmhDF";
const atlantis = "https://www.youtube.com/embed/n03IDJcsy5g?si=d-f2HqQdDNU5pJI9";
const nostra = "https://www.youtube.com/embed/jX3XhPcBk8w?si=-K3SeC9FxyjcIPD5";
const remix = "https://www.youtube.com/embed/p1rUuxCJfIU?si=S7wHy7_-Q9Md2q24";
const olimpico = "https://www.youtube.com/embed/dkPS6t84qg4?si=O1p5cS7HrsaRLg2b";
const rococo = "https://www.youtube.com/embed/IJRd9LMfMUY?si=Rxxtvkpz0cc-ntg6";


const music = new Audio('audio/2.mp3');
//lista del id y las caratulas y titulos 
const songs = [{
    id:12,
    songname:`Alan Walker<br>
    <div class="subtitle">Atlantis en vivo</div>`,
    poster: "covers/12.jpg"
},
  {
    id:13,
    songname:`Lacrimosa<br>
    <div class="subtitle">En concierto Luna Festival 2016</div>`,
    poster: "covers/13.jpg"
},
  {
    id:14,
    songname:`Big Bunny<br>
    <div class="subtitle">Cortometraje</div>`,
    poster: "covers/14.jpg"
},
  {
    id:15,
    songname:`Gustavo<br>
    <div class="subtitle">Examen para cinta roja</div>`,
    poster: "covers/15.jpg"
},
  {
    id:16,
    songname:`Nostra Morte<br>
    <div class="subtitle">Nostra Morte</div>`,
    poster: "covers/16.jpg"
},
  {
    id:17,
    songname:`Pure Negga<br>
    <div class="subtitle">Ven a ver</div>`,
    poster: "covers/17.jpg"
},
  {
    id:18,
    songname:`Alan Walker<br>
    <div class="subtitle">Remix</div>`,
    poster: "covers/18.jpg"
},
  {
    id:19,
    songname:`Dimash<br>
    <div class="subtitle">Olimpico</div>`,
    poster: "covers/19.jpg"
},
  {
    id:20,
    songname:`Panteon Rococo<br>
    <div class="subtitle">Arreglame el alma</div>`,
    poster: "covers/20.jpg"
},
  {
    id:21,
    songname:`No mas videos<br>
    <div class="subtitle">Saludos kiko music 24</div>`,
    poster: "covers/21.jpg"
}
]

function aparecer (vid){
  document.getElementById('videoyoutube').src = vid;
} 

//mi logo-------------------***************************************************************************************
let logo = document.getElementById('logo');
let logo2 = document.getElementById('logo2');

let iframe = document.getElementById('videoyoutube');

logo.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '0%';
document.querySelector('.song_side').style.width = '100%';
document.querySelector('#poster').style.width = '100%';
logo.style.display = 'none';
logo2.style.display = 'flex';
})
logo2.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '25%';
document.querySelector('.song_side').style.width = '75%';
document.querySelector('#poster').style.width = '75%';
logo.style.display = 'flex';
logo2.style.display = 'none';
})
/*----------------------------------------------------------------------------------------- */









