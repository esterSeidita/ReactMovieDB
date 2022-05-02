export async function GetData (id="") {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`);
    const data = await response.json();
    return data;
}

export async function DeleteData(id) {
    return await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
    })
}

export async function UpdateData (id, datas) {
    return await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            description: datas.description,
            genres: datas.genres,
            poster: datas.poster,
            title: datas.title,
            year: datas.year
        })
    })
}

export async function NewData (datas) {
    return await fetch(`https://edgemony-backend.herokuapp.com/movies/`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            description: datas.description,
            genres: datas.genres,
            poster: datas.poster,
            title: datas.title,
            year: datas.year
        })
    })
}

export const wordToUpper = (text) => {
    const strToArr = text.trim().toLowerCase().split("")
    return strToArr[0].toUpperCase()+strToArr.slice(1).join("")
  }
