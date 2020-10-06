var htmlBtnSearch = document.getElementById("search")
var htmlTextarea = document.getElementById("chuckquotes")
var htmlImage = document.getElementById("angrychuck")

htmlBtnSearch.onclick = () => {

    var valueInput = document.getElementById("textfield").value;

    if (valueInput != "") {
        url = `https://api.chucknorris.io/jokes/search?query=${valueInput}`
        fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                data.total != 0 ?
                    showChuckQuotes(data) : showAngryChuck();
            });
    } else {
        showAngryChuck();
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showChuckQuotes(data) {
    var frase = "";

    for (var i = 0; i < 3; i++) {
        frase += data.result[getRandomIndex(data.result)].value + '\n\n';
    }
    htmlTextarea.innerHTML = frase
    htmlImage.hidden = true;
    htmlTextarea.hidden = false
}

function showAngryChuck() {
    htmlImage.hidden = false;
    htmlTextarea.hidden = true;
}