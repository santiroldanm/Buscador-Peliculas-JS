document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'ad6fc86a4b924fc1ea398d763bff47d8'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'



function searchMovies(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response=> response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if(movies.length===0){
        resultContainer.innerHTML = '<h4> No encontramos tu película 😓</h4>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent= movie.title


        let releaseDate = document.createElement ('p')
        releaseDate.textContent = 'Lanzada el '+ movie.release_date

        let description = document.createElement ('p')
        description.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(description)

        resultContainer.appendChild(movieDiv)
        

    })
}
