
export const API_MOVIES = 'https://api.nomoreparties.co';

function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return res.json().then((err) => Promise.reject(`${err.message}`))
    };
}

export function getMovies() {
    return fetch(`${API_MOVIES}/beatfilm-movies`, {
        method: `GET`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    })
        .then((res) => checkResponse(res));
}
