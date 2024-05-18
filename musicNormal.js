const music = new Audio('audio/2.mp3');
//lista del id y las caratulas y titulos 
const songs = [{
    id:1,
    songname:`Alan Walker<br>
    <div class="subtitle">Atlantis</div>`,
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
    songname:`Dread Mar I<br>
    <div class="subtitle">Vivi En Do</div>`,
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
    songname:`Lacrimosa<br>
    <div class="subtitle">Der Morgen Danach</div>`,
    poster: "covers/7.jpg"
},
  {
    id:8,
    songname:`Alan Walker<br>
    <div class="subtitle">Darkside</div>`,
    poster: "covers/8.jpg"
},
  {
    id:9,
    songname:`Cafe Tacuba<br>
    <div class="subtitle">Futuro</div>`,
    poster: "covers/9.jpg"
},
  {
    id:10,
    songname:`LP<br>
    <div class="subtitle">Todo lo que pudimos ser</div>`,
    poster: "covers/10.jpg"
},
  {
    id:11,
    songname:`Se acabo la lista<br>
    <div class="subtitle">Agrega mas canciones</div>`,
    poster: "covers/11.jpg"
}
]

//mi logo-------------------***************************************************************************************
let logo = document.getElementById('logo');
let logo2 = document.getElementById('logo2');
let corazon = document.getElementById('corazon');
let monedas = 0;

corazon.addEventListener('click', ()=> {
  let m = document.querySelector("#numeros");
	m.innerHTML = 0;
    for(let k = 1;k < 10;k++){
	/* m.insertAdjacentHTML("beforeend", ); */
}
m.innerHTML = monedas;
monedas++;  
});

logo.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '1%';
document.querySelector('.song_side').style.width = '99%';
logo.style.display = 'none';
logo2.style.display = 'flex';
})
logo2.addEventListener('click',()=>{
document.querySelector('.menu_side').style.width = '23%';
document.querySelector('.song_side').style.width = '77%';
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
let pausa = document.getElementById('pauseAudio');
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
pausa.addEventListener('click', ()=>{
 music.pause();
 wave.classList.remove('active1');
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


