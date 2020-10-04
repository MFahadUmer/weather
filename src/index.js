import './style.css';
import navbar from "./navbar";
import weatherApi from "./weatherApi";
import gihpyApi from "./giphyApi";
import weatherBG from './weatherImage.jpg'

searchForm.onsubmit = (e) =>{
  e.preventDefault();
  const search = document.getElementById('searchInputField').value;
  const a = weatherApi.weatherJson(search);
  let record = a.then(data => {
    if (data.cod == 200){
      const temp = document.getElementById("temperature");
      const temperatureDetailsBG = document.getElementById("temperatureDetailsBG");
      temp.style.display = 'block';
      const giphy = gihpyApi.giphyJson(`${data.weather[0].main} weather`);
      let giphyRecord = giphy.then((data) => {
        temp.style.backgroundImage = `url(${data.data.images.downsized.url})`;
      });
      temp.innerHTML = `
      <h2 class="weatherHeading pt-2">Weather Details of ${data.name}</h2>
        <div class="weatherDetails">
            <h3 class="bg-white">Country</h3>
            <h3 class="bg-white">${data.sys.country}</h3>
            <h3 class="bg-white">Description</h3>
            <h3 class="bg-white">${data.weather[0].description}</h3>
            <h3 class="bg-white">Temperature</h3>
            <h3 class="bg-white">${Math.floor(data.main.temp - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Feels Like</h3>
            <h3 class="bg-white">${Math.floor(data.main.feels_like - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Minimum Temperature</h3>
            <h3 class="bg-white">${Math.floor(data.main.temp_min - 273.15, 2)}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Maximum Temperature</h3>
            <h3 class="bg-white">${Math.floor(data.main.temp_max - 273.15,2 )}<sup><b>o</b></sup>C</h3>
            <h3 class="bg-white">Pressure</h3>
            <h3 class="bg-white">${data.main.pressure}</h3>
            <h3 class="bg-white">Sea Level</h3>
            <h3 class="bg-white">${data.main.sea_level}</h3>
            <h3 class="bg-white">Humidity</h3>
            <h3 class="bg-white">${data.main.humidity}</h3>
        </div>
            <button>Convert to <sup><b>o</b></sup>C</button>`;
    }
    else {
      alert(data.message);
    }
  })
};
document.getElementById('weatherImg').setAttribute('src', weatherBG);