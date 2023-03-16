"use strict";
const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const callApi = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
        apiData.innerText = JSON.stringify(data.joke);
    })
        .catch(e => console.error(new Error(e)));
    //    new Promise((resolve, reject) => {
    //     // success then resolve()
    //     // else reject()
    //    })
    // try {
    //     const response = await fetch('https://icanhazdadjoke.com/', {
    //         headers: {
    //             'Accept': 'application/json'
    //         },
    //     })
    //     const data = await response.json();
    //     console.log(data)
    //    } catch (error: any) {
    //     console.error(new Error(error))
    //    }
};
apiButton.addEventListener("click", callApi);
// const reportJokes = [{
//     joke: "...",
//     score: 1,
//     date: date.toISOString() new Date()
//   }];
