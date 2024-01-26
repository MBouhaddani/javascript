function getWeather() {
    var city = document.getElementById('stad').value;
    var apiKey = '93aa7c323411f2e17bcf3001ab5f72d0';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp + '°C';
        document.getElementById('description').textContent = data.weather[0].description;
    })
    .catch(err => console.error(err));
}