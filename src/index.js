const BASE_URL = 'http://localhost:3000/'

function getMovieById(movieId){
    return fetch(`${BASE_URL}movies/${movieId}`)
    .then(response => response.json())
}

const newMovie = {
    title: "Flesh",
    director: "hz",
    genres: ["fantasy"],
    rating: 9
}

function addMovie(newMovie){

    
    const options = {
        method: 'POST',
        Headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    }
    return fetch(`${BASE_URL}movies`, options).then(response=>response.json())
}

function deletELementById(elementId){
    const options = {
        method: 'DELETE',
    }

    return fetch(`${BASE_URL}movies/${elementId}`, options).then(response=>response.json())
}

const updates={
    title: "Start",
}

function patchElement(elementId, update){
    const options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(update)
    }

    return fetch(`${BASE_URL}movies/${elementId}`, options).then(response=>response.json())
}