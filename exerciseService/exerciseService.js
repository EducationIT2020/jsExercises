/*- llamada a web service que muestre la lista de las personas con nombre, apellido y telefono*/
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () =>{
    console.log(request);
    if(request.status == 200)
    {
        var people = JSON.parse(request.response); 
        var ulPeopleList = document.getElementById("peopleList");
        for (let i = 0; i < people.length; i++) {
            console.log(people[i])
            var liAdd = document.createElement("li");
            ulPeopleList.appendChild(liAdd);
            var name = people[i].name;
            var phone = people[i].phone;
            liAdd.textContent = "Nombre : " + name + ", teléfono : " + phone;
        }
    }
    else
    {
        document.write("Error : " + request.status);
    }
}