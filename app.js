const apiKey = "9c86841bf9db19b78988280a2ed3f014";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkwheather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".hawa").innerHTML = data.wind.speed +"km/hr" ;
}

searchBtn.addEventListener("click", ()=> {
    checkwheather(searchBox.value);
})


