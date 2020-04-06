let request = new XMLHttpRequest();
request.open('GET', 'https://api.le-systeme-solaire.net/rest/bodies/', true);
console.log(true);




request.onload = function() {
    let data = JSON.parse(this.response);
    data.forEach(planet => {
        let planetCard = document.createElement('div');
        planetCard.setAttribute('class','col-xl-3')

        let planetName = document.createElement('h5');
        planetName.innerText = planet.englishName;
        planetName.setAttribute("class", "planet-name")
        planetCard.appendChild(planetName);
        console.log(planetName);
    });
};



        request.send();


