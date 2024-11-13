//Posibles resultados de búsqueda
const SearchList = [
    "Trending Events",
    "Events Near You",
    "Music Concert",
    "coldplay",
    "Muse", 
    "One Direction",
];

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto

//Representa resultados de búsqueda
const displayResults = function (result) { 
    const resultHTML = result.map (function (music) {return `<li onclick=selectInput(this)>${music}</li onclick=selectInput>`;});

    resultBox.innerHTML = '<ul>' + resultHTML.join ("") + '</ul>';
}
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function (e) {
    let result = [];

    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
    }

    if (input.length) {
        result = SearchList.filter ((music) => {return music.toLowerCase().includes(input);});

        displayResults(result);
    }
};
//Cuando el usuario hace clic sobre el elemento de música
function selectInput(music) {
    inputBox.value = music.innerText;
    resultBox.innerHTML = "";
};




