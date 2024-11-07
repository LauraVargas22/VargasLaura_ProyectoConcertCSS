const SearchList = [
    "Trending Events",
    "Events Near You",
    "Music Concert",
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

const displayResults = function (result) {
    const resultHTML = result.map (function (music) {return `<li onclick=selectInput(this)>${music}</li onclick=selectInput>`;});

    resultBox.innerHTML = '<ul>' + resultHTML.join ("") + '</ul>';
}

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

function selectInput(music) {
    inputBox.value = music.innerText;
    resultBox.innerHTML = "";
};




