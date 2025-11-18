const currentTemp = 1;
const weatherIcon = 2;
const captionDesc = 3;

const myTown = document.querySelector('#town')
const myDescription = document.querySelector('#myDescription')
const myTempmax = document.querySelector('#myTempMax')
const myTempmin = document.querySelector('#myTempMin')
const myHumedity = document.querySelector('#humidity')
const myTemp = document.querySelector('#temp')
const myIcon = document.querySelector('#iconWeather')
const mySunrise = document.querySelector('#sunrise')
const mySunset = document.querySelector('#sunset')

const today = document.querySelector('#today')
const tomorrow = document.querySelector('#tomorrow')
const afterTomo = document.querySelector('#afterTomo')

const myApi = 'c6cca0395f3973805a693ee6ef3b8667'
const myLat = '-12.077358300300476'
const myLon = '-76.68715437527801'
const urlApi = `http://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${myLat}&lon=${myLon}&appid=${myApi}`

// `http://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${myLat}&lon=${myLon}&id=524901&appid=${myApi}`

async function apiFetch() {
    try {
        const response = await fetch(urlApi)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

// Display the JSON data onto my web page
function displayResults(data) {
    myTown.innerHTML = data.city.name
    myDescription.innerHTML = data.list[0].weather[0].description
    myTempmax.innerHTML = `${data.list[0].main.temp_max}&deg;C`
    myTempmin.innerHTML = `${data.list[0].main.temp_min}&deg;C`
    myHumedity.innerHTML = data.list[0].main.humidity
    myTemp.innerHTML = `${data.list[0].main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

    myIcon.setAttribute('src', iconsrc)
    myIcon.setAttribute('alt', data.list[0].weather[0].description)

    const sunrise = data.city.sunrise
    const sunriseHour = new Date(sunrise * 1000)

    const sunriseFormat = sunriseHour.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
    })

    const sunset = data.city.sunset
    const sunsetHour = new Date(sunset * 1000)

    const sunsetFormat = sunsetHour.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit"
    })

    mySunrise.innerHTML = sunriseFormat
    mySunset.innerHTML = sunsetFormat

    today.innerHTML = `${data.list[0].main.temp}&deg;C`
    tomorrow.innerHTML = `${data.list[5].main.temp}&deg;C`
    afterTomo.innerHTML = `${data.list[13].main.temp}&deg;C`
}

// Start the process
apiFetch();
