/* Usando un botón vamos a mostrar en un área una foto aleatoria*/

var btn_photo = document.getElementById("btn_photo");
var responseUrl = "";
var request = new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/photos");
request.send();
request.onload = () =>{
    if(request.status == 200)
    {
        var photoList = JSON.parse(request.response);
        var randomPhoto = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < photoList.length; i++) {
            if(photoList[i].id == randomPhoto){
                responseUrl = photoList[i].url;
                break;
            }
        }
        btn_photo.addEventListener("click",(e) =>{
            var htmlImage = document.createElement("img"); 
            htmlImage.src = responseUrl;
            document.body.appendChild(htmlImage);
        })
    }
}
