const apiKey = "9c86841bf9db19b78988280a2ed3f014";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkwheather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    
    //making the not data found type of thing when user eneters the wrong data 
    if(data.cod == "404" || searchBox.value.trim() == ""){
    document.querySelector(".error").style.display="block";
    document.querySelector(".wheather").style.display ="none";
    }else{
        document.querySelector(".wheather").style.display ="block";
    }

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".hawa").innerHTML = data.wind.speed +"km/hr" ;
    const wheather_status = document.querySelector(".wheather_kasto_xw_icon")
// For the image change thing 
if(data.weather[0].main == "Clouds"){
    wheather_status.src="images/clouds.png"
}
else if(data.weather[0].main == "Rain"){
    wheather_status.src="images/rain.png"
}
else if(data.weather[0].main == "Clear"){
    wheather_status.src="images/clear.png"
}
else if(data.weather[0].main == "Drizzle"){
    wheather_status.src="images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    wheather_status.src="images/mist.png"
}

document.querySelector(".wheather").style.display ="block";
document.querySelector(".error").style.display="none";
}





searchBtn.addEventListener("click", ()=> {
    checkwheather(searchBox.value);
})


