/*crear un form en donde obtengamos nombre, apellido y fecha de nacimiento de una persona y tengamos dos botones un login y un register, 
el register almacena esos datos en un local storage el login valida si esos datos ya estan almacenados, si lo estan saluda a la persona, 
si no estan pide que registre en la pagina
utilicemos funciones para validar los campos*/

function saveData() {
    var nameHTML = document.getElementById("name");
    if(esLetra(nameHTML.value)){
        var lastNameHTML = document.getElementById("lastName");
        if(esLetra(lastNameHTML.value)){
            var birthdayHTML = document.getElementById("birthday");
            if(esNumero(birthdayHTML.value)){
                var person = { 
                    "name": nameHTML.value, 
                    "lastName": lastNameHTML.value,
                    "birthday": birthdayHTML.value,
                };
                localStorage.setItem(nameHTML.value + birthdayHTML.value, JSON.stringify(person));
            }else{alert("La fecha de nacimiento ingresada es incorrecta, contiene letras");}  
        }else{alert("El apellido ingresado es incorrecto, contiene números");}
    }else{ alert("El nombre ingresado es incorrecto, contiene números");}
}

function esLetra(palabra) {
    var soloLetras = true;
    palabra.split('').forEach(caracter => {
        var ascii = caracter.toUpperCase().charCodeAt(0);
        if(ascii < 64 || ascii > 91){
            soloLetras = false;
        }
    });
    return soloLetras; 
};

function esNumero(palabra) {
    var soloLetras = true;
    palabra.split('').forEach(caracter => {
        var ascii = caracter.toUpperCase().charCodeAt(0);
        if(ascii > 64 && ascii < 91){
            soloLetras = false;
        }
    });
    return soloLetras; 
};

function validateData() {
    var nameHTML = document.getElementById("name");
    var lastNameHTML = document.getElementById("lastName");
    var birthdayHTML = document.getElementById("birthday");
    var savedData = JSON.parse(localStorage.getItem(nameHTML.value + birthdayHTML.value));
    if(nameHTML.value == savedData["name"] && lastNameHTML.value == savedData["lastName"] && birthdayHTML.value == savedData["birthday"]){
        alert("Se ha registrado correctamente");
    }else{alert("Los datos ingresados no son correctos");}
}