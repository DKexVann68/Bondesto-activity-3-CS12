//TMDB keys
const API_KEY = '9428cfee3c086f7d944b9630a0a03e9a'
const BASE_URL ='https://api.themoviedb.org/3/movie/ '+ titleId +'?api_key=';
const Second_Base_URL = 'https://api.themoviedb.org/3/movie/'+ titleId +'/similar?api_key=';

//TMDB request keys

const image_url ="https://image.tmdb.org/t/p/w500"; 
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=';

const sypnosis = document.querySelector(".sypnosis");
const page     = document.querySelector(".sim-movies")
const getSypnosis = async () =>{

    const dName = window.location.href.split("/")[3];
    const titleId = dName.split("?")[1].split("=")[1];

    let data =[];
    let movie_data =[];

  const response = await axios.get(`${BASE_URL}${API_KEY}&language=en-US`);
  const movie_response = await axios.get(`${BASE_URL}${API_KEY}&language=en-US&page=1`);
  const responseData = movie_response.data;
  data = responseData;

  const movie_responseData = movie_response;
  movie_data = movie_responseData.data.results;
  console.log(movie_data);

    sypnosisTemplate(data);
    pageMovieTemplate(movie_data);
}
const singleMovieTemplate = (data) => { 
    sypnosis.innerHTML = `
    <a href="overview.html" class="back"> Back to Home </a>
    <div class="show filed">
    
    <h2>${data.title}</h2>
    <img class="movie_img" src="${image_url + data.poster_path}" alt=""/>
    <h4>Overview:</h4>
    <h3>${data.overview}</h3>
    <h4>Vote Average: ${data.vote_average}</h4>
    <h4>Release Date: ${data.release_date}</h4>
    </div>
    `;
  };
  
  
  const similarMovieTemplate = (data) => {
      sim.innerHTML = data
      .map((movie) => {return `
     <div>
     <a href="overview.html?movie=${movie.id}" onclick="return false" ondblclick="location=this.href">
     <div class="movie">
     <img  src="${image_url + movie.backdrop_path}" alt="image">
     <div class="movie-info">
     <h3>${movie.title}</h3>
         <span class=>${movie.vote_average}</span>
     </div>
    <div class="overview">
     <h3> Overview</h3>
    ${movie.overview}
    </div> 
  </div>
         
     </a>
     </div>
  `;
      })
      .join("");
  };
  getSingleMovie();