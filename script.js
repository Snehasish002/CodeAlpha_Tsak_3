const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        //wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    
    
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Bhubaneswar")


const cities = ['Chennai', 'Bangalore', 'Hyderabad', 'Mumbai']; // List of cities

// Function to get weather data for a city and update the table row
const getWeatherForCity = (city, row) => {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      // Update the table row with weather data
      row.cells[1].textContent = response.cloud_pct;
      row.cells[2].textContent = response.feels_like;
      row.cells[3].textContent = response.humidity;
      row.cells[4].textContent = response.max_temp;
      row.cells[5].textContent = response.min_temp;
      row.cells[6].textContent = response.sunrise;
      row.cells[7].textContent = response.sunset;
      row.cells[8].textContent = response.temp;
      row.cells[9].textContent = response.wind_degrees;
      row.cells[10].textContent = response.wind_speed;
    })
    .catch(err => console.error(err));
}

// Function to populate weather data for all cities
const populateWeatherData = () => {
  const table = document.querySelector('table');
  const rows = table.tBodies[0].rows;

  for (let i = 0; i < cities.length; i++) {
    getWeatherForCity(cities[i], rows[i]);
  }
}

populateWeatherData();
