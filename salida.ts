const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const formVotacion = document.querySelector('.formVotacion');
const votForm1 = document.getElementById('votForm1');
const votForm2 = document.getElementById('votForm2');
const votForm3 = document.getElementById('votForm3');
let joke;

const callApi = () => {
    votForm1.checked = false;
    votForm2.checked = false;
    votForm3.checked = false;
    
   fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
      },
   })
   .then(res => res.json())
   .then(data => {
    joke = data;
    apiData.innerText = data.joke;
    formVotacion.style.display = "block";
   })
   .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener("click", callApi);


let reportJokes = [];

function llamadaForm1 () {

    let dateJoke = new Date().toISOString();

    const getJoke = reportJokes.filter(item => item.joke.id === joke.id);

    if(getJoke.length > 0) {
        reportJokes = reportJokes.map(element => {
            if(element.joke.id === joke.id) {
                element.score = 1;
            } 
            return element;
        })
    }else {
        reportJokes.push({
            joke: joke,
            score: 1,
            date: dateJoke
        });
    }
    console.log('voto1', reportJokes);
}
votForm1.addEventListener("click", llamadaForm1);


function llamadaForm2 () {

    let dateJoke = new Date().toISOString();

    const getJoke = reportJokes.filter(item => item.joke.id === joke.id);

    if(getJoke.length > 0) {
        reportJokes = reportJokes.map(element => {
            if(element.joke.id === joke.id) {
                element.score = 2;
            } 
            return element;
        })
    }else {
        reportJokes.push({
            joke: joke,
            score: 2,
            date: dateJoke
        });
    }
    console.log('voto2', reportJokes);
}
votForm2.addEventListener("click", llamadaForm2);


function llamadaForm3 () {

    let dateJoke = new Date().toISOString();

    const getJoke = reportJokes.filter(item => item.joke.id === joke.id);

    if(getJoke.length > 0) {
        reportJokes = reportJokes.map(element => {
            if(element.joke.id === joke.id) {
                element.score = 3;
            } 
            return element;
        })
    }else {
        reportJokes.push({
            joke: joke,
            score: 3,
            date: dateJoke
        });
    }
    console.log('voto3', reportJokes);
}
votForm3.addEventListener("click", llamadaForm3);
