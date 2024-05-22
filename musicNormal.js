
const conejo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const  alanWalker = "https://www.youtube.com/embed/p1rUuxCJfIU?si=wkDM26__NTnlHVHB";
const lacrimosa = "https://www.youtube.com/embed/H4Ji9tsbW7g?si=J5tP3cpZxisRhKUM";
const gus = "https://www.youtube.com/embed/3MAArO-D89Y?si=DUVqvuhMznFqutUK";
const gus2 = "https://www.youtube.com/embed/sWOYtgBoBiE?si=NGDTOLpL0OgOmhDF";
const atlantis = "https://www.youtube.com/embed/n03IDJcsy5g?si=d-f2HqQdDNU5pJI9";
const alejandra = "https://www.youtube.com/embed/Udoj4YJFR_c?si=5tmmKhFdxcU-qw2D";

const music = new Audio('audio/2.mp3');
//lista del id y las caratulas y titulos 
const songs = [{
    id:1,
    songname:`Cafe Tacuba<br>
    <div class="subtitle">Futuro</div>`,
    poster: "covers/1.jpg"
},
  {
    id:2,
    songname:`Evanences<br>
    <div class="subtitle">My Inmortal</div>`,
    poster: "covers/2.jpg"
},
  {
    id:3,
    songname:`Therion<br>
    <div class="subtitle">Via Nocturna</div>`,
    poster: "covers/3.jpg"
},
  {
    id:4,
    songname:`Bruno Mars<br>
    <div class="subtitle">Mirors</div>`,
    poster: "covers/4.jpg"
},
  {
    id:5,
    songname:`Dread Mar I<br>
    <div class="subtitle">Tu sin mi</div>`,
    poster: "covers/5.jpg"
},
  {
    id:6,
    songname:`Younglu<br>
    <div class="subtitle">Despreciable</div>`,
    poster: "covers/6.jpg"
},
  {
    id:7,
    songname:`LP<br>
    <div class="subtitle">Todo lo que pudimos ser</div>`,
    poster: "covers/7.jpg"
},
  {
    id:8,
    songname:`Alan Walker<br>
    <div class="subtitle">tlantis</div>`,
    poster: "covers/8.jpg"
},
  {
    id:9,
    songname:`Lacrimosa<br>
    <div class="subtitle">En concierto Luna Festival 2016</div>`,
    poster: "covers/9.jpg"
},
  {
    id:10,
    songname:`Big Bunny<br>
    <div class="subtitle">Cortometraje</div>`,
    poster: "covers/10.jpg"
},
  {
    id:11,
    songname:`Gustavo<br>
    <div class="subtitle">Examen para cinta roja</div>`,
    poster: "covers/11.jpg"
},
  {
    id:12,
    songname:`Chayane Video<br>
    <div class="subtitle">Torero</div>`,
    poster: "covers/12.jpg"
},
  {
    id:13,
    songname:`Alejandra Guzman<br>
    <div class="subtitle">En concierto</div>`,
    poster: "covers/13.jpg"
}
]


function aparecer (vid){
  document.getElementById('videoyoutube').src = vid;
  
} 


//mi logo-------------------***************************************************************************************
let logo = document.getElementById('logo');
let logo2 = document.getElementById('logo2');
let corazon = document.getElementById('corazon');
let monedas = 0;
let iconos = document.getElementById('iconos');
let iframe = document.getElementById('videoyoutube');


corazon.addEventListener('click', ()=> {
  let m = document.querySelector("#numeros");
	m.innerHTML = 0;
    for(let k = 0;k < 10;k++){
	/* m.insertAdjacentHTML("beforeend", ); */
}
m.innerHTML = monedas;
monedas++;  
});

logo.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '0%';
document.querySelector('.song_side').style.width = '100%';
logo.style.display = 'none';
logo2.style.display = 'flex';
})
logo2.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '25%';
document.querySelector('.song_side').style.width = '75%';
logo.style.display = 'flex';
logo2.style.display = 'none';
})
/*----------------------------------------------------------------------------------------- */
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=> {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;

});

//para el boton de play, que arranque la musica y cambie el boton a pause y arranque el wave
let masterPlay = document.getElementById('masterPlay');

let wave = document.getElementById('wave');


masterPlay.addEventListener('click', ()=>{
  if(music.paused || music.currentTime <= 0){
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-fill')

  }else{
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add('bi-play-circle-fill')
    masterPlay.classList.remove('bi-pause-fill')
  }
})



//para saber el numero de id de la musica
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
  e.addEventListener('click',(el)=>{
   index = el.target.id;
/*    console.log(abc); */
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    kikoFoto.src = `poster/${index}.png`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    if(index > 7 ) {
      iconos.style.display = 'none';
      iframe.style.display = 'flex';
      music.pause();
    } else {
      iconos.style.display = 'flex';
      iframe.style.display = 'none';
      music.play();
    }


    let songTitles = songs.filter((els) =>{
      return els.id == index;
  });
    songTitles.forEach(elss =>{
      let {songname} = elss;
      title.innerHTML = songname;
      kikoTitulo.innerHTML = songname;
    })
    
  })
});
 // canciones
 let anterior = document.getElementById('anterior');
 let siguiente = document.getElementById('siguiente');
 let title = document.getElementById('title');
 let kikoFoto = document.getElementById('poster');
 let kikoTitulo = document.getElementById("titulo");

// anterior cancion
  anterior.addEventListener('click',()=>{
    index -= 1;
/*    console.log(abc); */
 
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    kikoFoto.src = `poster/${index}.png`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    if(index > 7 ) {
      iconos.style.display = 'none';
      iframe.style.display = 'flex';
    } else {
      iconos.style.display = 'flex';
      iframe.style.display = 'none';
     
    }
    
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });
      songTitles.forEach(elss =>{
        let {songname }= elss;
        title.innerHTML = songname;
        kikoTitulo.innerHTML = songname;
      })
      console.log('kiko dice le diste click a anterior cancion');
  });

//siguiente cancion
  siguiente.addEventListener('click',() => {
    index ++;
/*    console.log(abc); */
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg` ;
    kikoFoto.src = `poster/${index}.png`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    if(index > 7 ) {
      iconos.style.display = 'none';
      iframe.style.display = 'flex';
    } else {
      iconos.style.display = 'flex';
      iframe.style.display = 'none';
     
    }
    
    let songTitles = songs.filter((els) =>{
      return els.id == index;
      
  });
    songTitles.forEach(elss =>{
      let {songname} = elss;
      title.innerHTML = songname;
      kikoTitulo.innerHTML = songname;
    })
    console.log('kiko dice le diste click a siguiente cancion');
  });

//BARRA DE AUDIO




////para reproducir cuando se acabe la cancion.........................................
music.addEventListener('ended', ()=>{
  index ++;
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `covers/${index}.jpg`;
  kikoFoto.src = `poster/${index}.png`;
  music.play();
  wave.classList.add('active1');
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  
  let songTitles = songs.filter((els) =>{
    return els.id == index;
    
});
  songTitles.forEach(elss =>{
    let {songname} = elss;
    title.innerHTML = songname;
    kikoTitulo.innerHTML = songname;
  })
  console.log('kiko dice siguiente cancion');
});

// para el aleatorio

let suffle = document.getElementById('shuffle'); 
suffle.addEventListener('click', () => {
  music_random();
});

const music_random = ()=>{

  if(index == songs.length) {
    index = 0; 
  }
  index = Math.floor((Math.random() * songs.length) + 1);// aqui esta el random con match

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `covers/${index}.jpg`;
  kikoFoto.src = `poster/${index}.png`;
  music.play();
  wave.classList.add('active1');
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  
  let songTitles = songs.filter((els) =>{
    return els.id == index;
    
});
  songTitles.forEach(elss =>{
    let {songname} = elss;
    title.innerHTML = songname;
    kikoTitulo.innerHTML = songname;
  });
  console.log('kiko dice siguiente cancion');
}

// barra de avance del audio
  
const $progress = document.querySelector('#progressAudio')
music.addEventListener('loadedmetadata', handleLoaded)
music.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = music.duration
  console.log('ha cargado mi audio ', music.duration)
}

function handleTimeUpdate() {
  $progress.value = music.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {

  music.currentTime = $progress.value
  console.log($progress.value)
}
