const axios = require("axios");
const city = process.argv[2];
const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cd9c4fbf21778922ae58f60ffca4002&units=metric&lang=de`;

axios
  .get(url)
  .then(response => {
    
    const temp         = response.data.main.temp;
    const cityName     = response.data.name;
    const countryName  = response.data.sys.country;

    const currentweather = `Die Temperatur beträgt ${temp}ºC in
    ${cityName}, ${countryName} Wetterverhältnisse:
    ${response.data.weather[0].description}. `.replace(/\s{2,}/g,' ').trim();

    console.log(currentweather)
  })
  .catch(error => console.log("Error", error));