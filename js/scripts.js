//TMDB keys
const API_KEY= '9428cfee3c086f7d944b9630a0a03e9a'
const BASE_URL ='https://api.themoviedb.org/3/movie/upcoming?api_key=';

//TMDB request keys

const image_url ="https://image.tmdb.org/t/p/w500"; 
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=';

const form = document.getElementById("form");
const Puppil = document.querySelector(".Puppil");

const getUpcomingMovie = async () => {
  let data = [];

  const response = await axios.get(`${BASE_URL}${API_KEY}`);
  const responseData = response.data;
  data = responseData;

  movieListTemplate(data.results);
  console.log(data.results);
};

getUpcomingMovie();

const searchFunction = async (event) => {
  event.preventDefault();

  let data = [];
  let query = document.getElementById("search").value;

  const response = await axios.get(`${search_url}${API_KEY}&query=${query}`);
  const responseData = response.data;
  data = responseData;

  movieListTemplate(data.results);
};
form.addEventListener('submit', searchFunction);

const movieListTemplate = (data) => {
  Puppil.innerHTML = data.map(function(movie){
      return `
      <main class="movielist">
             <a href="overview.html?movie=${movie.id}" onclick="return false" ondblclick="location=this.href">
             
           
             <img src="${image_url+ movie.backdrop_path}" alt="image">
          
             <div class="m-info">
             <h3>${movie.title}</h3>
                 <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
             </div>
            <div class="overview">
             <h3> Overview</h3>
            ${movie.overview}
            </div> 
          
         </a>
         </main>
            `;
    })
    function getColor(vote){
      if(vote>=8){
      return'green'
    }else if(vote>=5){
        return'yellow'
    }else{
    return'red'
    }
  }s
    .join("");
};
