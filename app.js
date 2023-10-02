let api='https://www.omdbapi.com/?apikey=ebf455d3&t='

let title = document.getElementById('title');
let p_img = document.getElementById('p-img');
let year = document.getElementById('Year');
let director = document.getElementById('Director');
let actors = document.getElementById('Actors');
let boxOffice = document.getElementById('BoxOffice');
let genre = document.getElementById('Genre');
let language = document.getElementById('Language');
let released = document.getElementById('Released');
let type = document.getElementById('Type');
let writer = document.getElementById('Writer');
let movieName = document.getElementById('movieName');
let rating = document.getElementById('rating');
let movieContainer = document.getElementById('movie-container');
let loader = document.getElementById('loader');



movieContainer.classList.add('d-none')
loader.classList.add('d-none')

function serachMovie(){
    
    let response = api+movieName.value;
    loader.classList.remove('d-none')
    fetch(response).then((data)=>{
        return data.json()
        

    }).then((data)=>{
    
            movieContainer.classList.remove('d-none')
            loader.classList.add('d-none')
            title.innerText=data.Title;
            p_img.src=data.Poster
            year.textContent = data.Year;
            director.textContent = data.Director;
            actors.textContent = data.Actors;
            boxOffice.textContent = data.BoxOffice;
            genre.textContent = data.Genre;
            language.textContent = data.Language;
            released.textContent = data.Released;
            type.textContent = data.Type;
            writer.textContent = data.Writer;
            rating.textContent = data.imdbRating;

    })
}