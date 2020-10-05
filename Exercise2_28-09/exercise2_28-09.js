var listSuperHTML = document.getElementById("listSuper");
var elemento = "";
while (elemento.toUpperCase() != "FIN")
{
    elemento = prompt("Escriba el nombre de lo que desee agregar a la lista, en caso de no querer agregar más elementos escriba fin");
    var item = document.createElement("li");
    item.textContent = elemento;
    listSuperHTML.appendChild(item);
}