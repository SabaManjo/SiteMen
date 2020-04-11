let mainDiv = document.getElementById('planets-div')
let planet = document.getElementsByClassName('planet-name');
let request = new XMLHttpRequest();
request.open('GET', 'https://api.le-systeme-solaire.net/rest/bodies/', true);
request.onload = function() {
    let dataParse = JSON.parse(this.response);
    let data =  Object.values(dataParse);

    for (let i = 0; i < 285; i++) {
        let container = document.createElement('div');
        container.className = "names"

        let planetPic = document.createElement('img');
        if (data[0][i]['id'] == "terre") {
            planetPic.src = '../assets/images/earth.png'
            planetPic.classList = "earth"
        }
        if (data[0][i]['id'] == "venus") {
            planetPic.src = '../assets/images/venus.png'
            planetPic.classList = "venus"
        }
        if (data[0][i]['id'] == "saturne") {
            planetPic.src = '../assets/images/saturn.png'
            planetPic.classList = "saturn"
        }
        if (data[0][i]['id'] == "mercure") {
            planetPic.src = '../assets/images/mercury.png'
            planetPic.classList = "mercury"
        }
        let planetName = document.createElement('h5');
        planetName.innerText = data[0][i]['englishName'];
        if (data[0][i]['isPlanet'] == false) {
            planetName.style.display = "none";
        }else{
            planetName.style.display ="block";
        }
        console.log(data[0][i]['isPlanet']);
        container.appendChild(planetName);
        container.appendChild(planetPic);
        mainDiv.appendChild(container);
      
                   
    }

   
};

 request.send();


