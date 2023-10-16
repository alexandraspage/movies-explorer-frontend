const API_MOVIES = 'https://api.nomoreparties.co';
const API_MAIN = "https://api.movies-explorer-yp.nomoreparties.co";

function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return res.json().then((err) => Promise.reject(`${err.message}`))
    };
}

export function register({ name, email, password }) {

    return fetch(`${API_MAIN}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then((res) => checkResponse(res));
};

export function login({ email, password }) {
    return fetch(`${API_MAIN}/signin`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => checkResponse(res));
}

export function getUser(jwt) {
    return fetch(`${API_MAIN}/users/me`, {
        method: `GET`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        },
    })
        .then((res) => checkResponse(res));
}

export function changeUserInfo({ name, email }) {
    console.log('ok');
    return fetch(`${API_MAIN}/users/me`, {
        method: `PATCH`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            name, email
        })
    })
        .then((res) => checkResponse(res))
}

export function saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
}) {
    return fetch(`${API_MAIN}/movies`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: `${API_MOVIES}/${image.url}`,
            trailerLink: trailerLink,
            thumbnail: `${API_MOVIES}${image.url}`,
            movieId: id,
            nameRu: nameRU,
            nameEn: nameEN,
        }),
    })
        .then((res) => checkResponse(res))
}

export function deleteMovie(movieId) {
    console.log(movieId)
    return fetch(`${API_MAIN}/movies/${movieId}`,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then((res) => checkResponse(res))
}

 export function getSavedMovies() {
    return fetch(`${API_MAIN}/movies`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    })
        .then((res) => checkResponse(res))
}