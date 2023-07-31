const URL = "https://api.openweathermap.org/data/2.5/"
const API_KEY = "f21b4c899cccd9e952907f3ed4257ac0"


const setApp = (e) => {
    if(e.code == "Enter")

    getResult(search.value);
}

const getResult = (city) => {
    // console.log(city);
    let api = `${URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    fetch(api)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
    const city = document.querySelector(".city")
    city.innerText = `${result.name} ${result.sys.country}`;

    const temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)} °C`;

    const desc = document.querySelector(".desc");
    desc.innerText = `${result.weather[0].description}`;

    const minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)} °C / ${Math.round(result.main.temp_max)} °C`

}

const search = document.getElementById("search")
search.addEventListener("keypress", setApp)