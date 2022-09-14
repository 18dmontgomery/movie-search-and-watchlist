let searchEl = document.getElementById('movie')
let movieInfo = document.getElementById('movie-placeholder')
let nextPage = document.getElementById('next-page')
let watchlistBtn = document.getElementById('watchlist')
let searchResults
let movieData
let i = 0;
let movieArr = []

    // const response = async fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4b448ad1')
    //    const data 

document.getElementById('movie-search').addEventListener("click", fetchMovies)
       
async function fetchMovies() {
    searchResults = ""
  let response = await fetch(`https://www.omdbapi.com/?s=${searchEl.value}&type=movie&apikey=4b448ad1`);
  let data = await response.json()
  for(let movie of data.Search) {
        let movieResponse = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=4b448ad1`);
        movieData = await movieResponse.json()
        movieArr.push(movieData)
        searchResults += `
            <div class="wide-screens">
                <img class="movie-poster" src="${movieData.Poster}">
                <div class="movie-container">
                    <div class="line-1">
                        <h3>${movieData.Title}</h3>
                    </div>
                    <div class="line-2">
                        <p>${movieData.imdbRating}/10</p>
                        <p>${movieData.Runtime}</p>
                        <p>${movieData.Genre}</p>
                        <button id="watchlist" onClick="watchlist(movieArr, ${i})">Watchlist</button>
                    </div>
                    <div class="line-3">
                        <p>${movieData.Plot}</p>
                    </div>
                </div>
            </div>
        `
        i++;
  }
  movieInfo.innerHTML = searchResults
}

function watchlist(data, i) {
    let obj = []
    obj = data[i]
    console.log(obj.Title)
    window.localStorage.setItem(`${obj.Title}`, JSON.stringify(obj));
}

    
