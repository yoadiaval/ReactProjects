const songs = [
  "mañana será bomito",
  "donde quiero estar",
  "el otro dia",
  " la culpa es tuya",
  "otro dia será",
];

const movies = [
  "mañana será bomito",
  "donde quiero estar",
  "el otro dia",
  " la culpa es tuya",
  "otro dia será",
];


const createRandomMovie =()=>{
return movies[Math.floor((movies.length-1)*Math.random())]
}

const createRandomSong = () => {
return songs[Math.floor((movies.length - 1) * Math.random())];


};

export { createRandomMovie };
export { createRandomSong };
