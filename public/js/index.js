const burger = document.querySelector('.burger');
const drop = document.querySelector('.menu');

const tabs = document.querySelectorAll('.tab-toggle');
const contents = document.querySelectorAll('.step-content');

burger.addEventListener('click', () => {

    drop.classList.toggle('active');
})


tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {
        
        contents.forEach( content => {

            content.classList.remove('is-active');
        });

        tabs.forEach( tab => {

            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');

    })
})

let cityInput = document.querySelector('.city');
let day = document.querySelector('.day');
let date = document.querySelector('.date');
let time = document.querySelector('.time');
let image = document.querySelector('.image');
let weatherStatus = document.querySelector('.weatherstatus');
let temperature = document.querySelector('.temperature');
let mintemp = document.querySelector('.mintemp');
let maxtemp = document.querySelector('.maxtemp');

cityInput.addEventListener('keyup', showWeather);

function showWeather(e){

    if(e.keyCode === 13){
        let city = cityInput.value;
        
        let xml = new XMLHttpRequest();
        xml.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8281dee19e14ff59a0d9f9f785770afe&units=metric`);

        xml.onreadystatechange = function () {
            if(xml.readyState === 4 && xml.status === 200){
                displayResult(JSON.parse(xml.responseText));
            }
        };
        xml.send();

    }
}

function displayResult(data) {

    let currentDate = new Date();
    let localTime = currentDate.getTime();
    let localOfset = currentDate.getTimezoneOffset() * 6000;
    let utc = localTime + localOfset;

    let utcTime = utc + 1000 * data.timezone;
    let newCity = new Date(utcTime);

    let cityHour = newCity.getHours();
    let cityMinute = newCity.getMinutes();

    if(cityHour < 10){
        cityHour = `0${cityHour}`
    }else{
        cityHour;
    }

    cityMinute < 10 ? (cityMinute = `0${cityMinute}`) : cityMinute;

    time.innerHTML = `${cityHour}:${cityMinute} h`;

    temperature.innerHTML = `${Math.round(data.main.temp)} &deg;C`;
    mintemp.innerHTML = `Max: ${Math.round(data.main.temp_max)} &deg;C`;
    maxtemp.innerHTML = `Min: ${Math.round(data.main.temp_min)} &deg;C`;

    weatherStatus.innerHTML = `Weather status: ${data.weather[0].description}`;

    let currentStatus = data.weather[0].description;

    if(currentStatus.includes("clear sky")){
        image.setAttribute('src', './style/img/clearsky.png')
    }else if(currentStatus.includes("clouds")){
        image.setAttribute('src', './style/img/clouds.png')
    }else if(currentStatus.includes("few clouds")){
        image.setAttribute('src', './style/img/fewclouds.png')
    }else if(currentStatus.includes("rain")){
        image.setAttribute('src', './style/img/rain.png')
    }else if(currentStatus.includes("snow")){
        image.setAttribute('src', './style/img/snow.png')
    }else if(currentStatus.includes("mist")){
        image.setAttribute('src', './style/img/mist.png')
    }else if(currentStatus.includes("drizzle")){
        image.setAttribute('src', './style/img/drizzle.png')
    }else if(currentStatus.includes("fog")){
        image.setAttribute('src', './style/img/mist.png')
    }else if(currentStatus.includes("overcast clouds")){
        image.setAttribute('src', './style/img/fewclouds.png')
    }
    
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    day.innerHTML = dayNames[newCity.getDay()];
    date.innerHTML = `${months[newCity.getMonth()]} ${newCity.getUTCDate()}, ${newCity.getFullYear()}`;

}
