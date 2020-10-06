/* var request = new XMLHttpRequest();
        request.open("GET", "https://api.chucknorris.io/jokes/random");
        request.send();
        request.onload = () =>{
            console.log(request);
        } */
        var randomSearch = document.getElementById('randomSearch');

            randomSearch.addEventListener('click', function(e){
                fetch('https://api.chucknorris.io/jokes/random')
                .then((resp) => resp.json()) // Transform the data into json
                .then(function(data) {
                    var textArea = document.getElementById('textArea');
                    var textRandom = document.createElement('h1');
                    textArea.appendChild(textRandom);

                    textRandom.textContent = data.value;
                    

                    



                console.table(data);        
            });
        
        });
