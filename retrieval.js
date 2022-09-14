let watchlistItems = []
let movieInfo = document.getElementById('movie-placeholder')
let printToWatchlist
let KeyName
let newArrAfterRemove
let i = 0

function renderWatchlist() {
    i = 0
    watchlistItems = []
    printToWatchlist = ""
    if(localStorage.length > 0) {
        for(let i=0; i<localStorage.length; i++) {
            KeyName = window.localStorage.key(i);
            watchlistItems.push(JSON.parse(window.localStorage.getItem(KeyName)))
        }

        for(let items of watchlistItems) {
            
            printToWatchlist += `<div class="wide-screens">
                        <img class="movie-poster" src="${items.Poster}">
                        <div class="movie-container">
                            <div class="line-1">
                                <h3>${items.Title}</h3>
                            </div>
                            <div class="line-2">
                                <p>${items.imdbRating}/10</p>
                                <p>${items.Runtime}</p>
                                <p>${items.Genre}</p>
                                <button id="watchlist" onClick="removeWatchlist(${i})" >Remove</button>
                            </div>
                            <div class="line-3">
                                <p>${items.Plot}</p>
                            </div>
                        </div>
                    </div> 
                    `
                    i++;
        }
         movieInfo.innerHTML = printToWatchlist
    }
    else {
        movieInfo.innerHTML = `
            <div id="movie-placeholder">
                <h3 class="no-grow">Your watchlist is looking a little empty...</h3>
                <a href="index.html" class="adding-movies">Let's add some movies!</a>
            </div>
        `
    }
}

function removeWatchlist(index) {
    keyNameRemove = window.localStorage.key(index);
    window.localStorage.removeItem(`${keyNameRemove}`);
    watchlistItems.splice(index, 1);
    renderWatchlist()
}

renderWatchlist()



