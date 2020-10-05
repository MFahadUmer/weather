/* eslint-disable no-unused-vars, no-undef, no-mixed-operators */
import './style.css';
import navbar from './navbar';
import weatherApi from './weatherApi';
import gihpyApi from './giphyApi';
import weatherBG from './weatherImage.jpg';

function weatherDetails(search) {
  const a = weatherApi.weatherJson(search);
  const record = a.then(data => {
    if (data.cod === 200) {
      const temp = document.getElementById('temperature');
      const temperatureDetailsBG = document.getElementById('temperatureDetailsBG');
      temp.style.display = 'block';
      const giphy = gihpyApi.giphyJson(`${data.weather[0].main} weather`);
      const giphyRecord = giphy.then(data => {
        temp.style.backgroundImage = `url(${data.data.images.downsized.url})`;
      });
      temp.innerHTML = `
      <h2 class="weatherHeading pt-2">Weather Details of ${data.name}</h2>
        <div id="weatherDetails" class="weatherDetails">
            <h3 class="bg-white">Country</h3>
            <h3 class="bg-white">${data.sys.country}</h3>
            <h3 class="bg-white">Description</h3>
            <h3 class="bg-white">${data.weather[0].description}</h3>
            <h3 class="bg-white">Temperature</h3>
            <h3 id="temperatureDetail" class="bg-white">${Math.floor(data.main.temp - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Feels Like</h3>
            <h3 id="feelsLike" class="bg-white">${Math.floor(data.main.feels_like - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Minimum Temperature</h3>
            <h3 id="temp_min" class="bg-white">${Math.floor(data.main.temp_min - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Maximum Temperature</h3>
            <h3 id="temp_max" class="bg-white">${Math.floor(data.main.temp_max - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Pressure</h3>
            <h3 class="bg-white">${data.main.pressure}</h3>
            <h3 class="bg-white">Sea Level</h3>
            <h3 class="bg-white">${data.main.sea_level}</h3>
            <h3 class="bg-white">Humidity</h3>
            <h3 class="bg-white">${data.main.humidity}</h3>
        </div>
            <button id="convertToFarenheit" class="convertToFarenheit">Convert to <sup><b>o</b></sup>F</button>
            <button id="convertToCelcius" class="convertToCelcius">Convert to <sup><b>o</b></sup>C</button>`;
    }
    document.getElementById('convertToFarenheit').addEventListener('click', () => {
      document.getElementById('temperatureDetail').innerHTML = `${Math.floor(((data.main.temp - 273.15) * 9 / 5) + 32, 2)}<sup><b>o</b></sup>F`;
      document.getElementById('feelsLike').innerHTML = `${Math.floor(((data.main.feels_like - 273.15) * 9 / 5) + 32, 2)}<sup><b>o</b></sup>F`;
      document.getElementById('temp_min').innerHTML = `${Math.floor(((data.main.temp_min - 273.15) * 9 / 5) + 32, 2)}<sup><b>o</b></sup>F`;
      document.getElementById('temp_max').innerHTML = `${Math.floor(((data.main.temp_max - 273.15) * 9 / 5) + 32, 2)}<sup><b>o</b></sup>F`;
      document.getElementById('convertToFarenheit').style.display = 'none';
      document.getElementById('convertToCelcius').style.display = 'inline';
    });
    document.getElementById('convertToCelcius').addEventListener('click', () => {
      document.getElementById('temperatureDetail').innerHTML = `${Math.floor(data.main.temp - 273.15, 2)}<sup><b>o</b></sup>C`;
      document.getElementById('feelsLike').innerHTML = `${Math.floor(data.main.feels_like - 273.15, 2)}<sup><b>o</b></sup>C`;
      document.getElementById('temp_min').innerHTML = `${Math.floor(data.main.temp_min - 273.15, 2)}<sup><b>o</b></sup>C`;
      document.getElementById('temp_max').innerHTML = `${Math.floor(data.main.temp_max - 273.15, 2)}<sup><b>o</b></sup>C`;
      document.getElementById('convertToFarenheit').style.display = 'inline';
      document.getElementById('convertToCelcius').style.display = 'none';
    });
  });
}

const body = document.getElementById('body');
body.setAttribute('onload', weatherDetails('mailsi'));

searchForm.onsubmit = e => {
  e.preventDefault();
  const search = document.getElementById('searchInputField').value;
  weatherDetails(search);
};
document.getElementById('weatherImg').setAttribute('src', weatherBG);
/* eslint-enable no-unused-vars, no-undef, no-mixed-operators */
