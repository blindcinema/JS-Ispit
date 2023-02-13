const formElement = document.querySelector("#search-form");
const inputElement = document.querySelector("#search-query");
const buttonElement = document.querySelector("#search-button");
const divElement = document.querySelector("#song-list-wrapper");
const listElement = document.querySelector("#song-list");





formElement.addEventListener("submit", (event) => {
    listElement.innerHTML = "";
    let hasSong = false;
    event.preventDefault();
    const query = inputElement.value;
    fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        
        for( let i = 0 ; i < json.results.length; i++) {
            
            const song = json.results[i];     
            if (song.trackName.toLowerCase().includes(query.toLowerCase()) || song.artistName.toLowerCase().includes(query.toLowerCase())) {
                hasSong = true;
                listElement.innerHTML += `<li>${song.trackName} - ${song.artistName}</li>`;
                
            }
            if (listElement.innerHTML === "" && i === json.results.length - 1  ) {
                listElement.innerHTML = "No song found";
                break;
                
            }        
        }
    })
})

