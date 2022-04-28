export async function GetData () {
    const response = await fetch("https://edgemony-backend.herokuapp.com/movies");
    const data = await response.json();
    return data;
}

export async function DeleteData(id) {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
    }).then(() => window.location.reload(false));
}

export async function UpdateData (id, datas) {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            description: datas.description,
            genres: datas.genres,
            poster: datas.poster,
            title: datas.title,
            year: datas.year
        })
    }).then(() => window.location.reload(false));
}

export async function NewData (datas) {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            description: datas.description,
            genres: datas.genres,
            poster: datas.poster,
            title: datas.title,
            year: datas.year
        })
    }).then(() => window.location.reload(false));;
}

