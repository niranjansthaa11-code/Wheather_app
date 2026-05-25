const apiKey = "9c86841bf9db19b78988280a2ed3f014";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const card = document.querySelector(".card"); 

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
    card.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)"
}
else if(data.weather[0].main == "Rain"){
    wheather_status.src="images/rain.png"
    card.style.background = "linear-gradient(135deg, #1a1a2e, #16213e)";
}
else if(data.weather[0].main == "Clear"){
    wheather_status.src="images/clear.png"
    card.style.background = "linear-gradient(135deg, #f7b733, #fc4a1a)";
}
else if(data.weather[0].main == "Drizzle"){
    wheather_status.src="images/drizzle.png"
    card.style.background = "linear-gradient(135deg, #3a7bd5, #3a6073)";
}
else if(data.weather[0].main == "Mist"){
    wheather_status.src="images/mist.png"
    card.style.background = "linear-gradient(135deg, #606c88, #3f4c6b)";
}

document.querySelector(".wheather").style.display ="block";
document.querySelector(".error").style.display="none";
}





searchBtn.addEventListener("click", ()=> {
    checkwheather(searchBox.value);
})
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkwheather(searchBox.value);
});

