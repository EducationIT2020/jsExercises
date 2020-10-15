var gifs = ["https://media.giphy.com/media/BIuuwHRNKs15C/giphy.gif",
            "https://media.giphy.com/media/AhwuGl0MPNzyg/giphy.gif",
            "https://media.giphy.com/media/SyzIHPW8oMdnW/giphy.gif",
            "https://media.giphy.com/media/13fR00PIYwb7Gg/giphy.gif",
            "https://media.giphy.com/media/UvdC8pXudeEak/giphy.gif",
            "https://media.giphy.com/media/3o6Mbm6G6X9Xl8Wp5m/giphy.gif"];


    var imgHTML = document.getElementsByTagName("img");
    for (let i = 0; i < imgHTML.length; i++) {
        imgHTML[i].src = getSrc();
    }


function getSrc()
{
    var random = Math.floor(Math.random() * gifs.length);
    return gifs[random];
}