import './style.css';
import navbar from "./navbar";
import weatherApi from "./weatherApi";
// import gihpyApi from "./giphyApi";
import weatherBG from './weatherImage.jpg'

searchForm.onsubmit = (e) =>{
  e.preventDefault();
  const search = document.getElementById('searchInputField').value;
  const a = weatherApi.weatherJson(search);
  let record = a.then(data => {
    if (data.cod == 200){
      console.log(data);
      console.log(data.weather);
      console.log(data.weather[0].main);
      const temp = document.getElementById("temperature");
      const startPage = document.getElementById("startPage");
      temp.style.display = 'block';
      startPage.style.display = 'none';
      temp.innerHTML = `
      <h2 class="weatherHeading pt-2">Weather Details of ${data.name}</h2>
        <div class="weatherDetails">
            <h3 class="bg-white">Country</h3>
            <h3 class="bg-white">${data.sys.country}</h3>
            <h3 class="bg-white">Description</h3>
            <h3 class="bg-white">${data.weather[0].main}</h3>
            <h3 class="bg-white">Temperature</h3>
            <h3 class="bg-white">${data.main.temp}</h3>
            <h3 class="bg-white">Feels Like</h3>
            <h3 class="bg-white">${data.main.feels_like}</h3>
            <h3 class="bg-white">Minimum Temperature</h3>
            <h3 class="bg-white">${data.main.temp_min}</h3>
            <h3 class="bg-white">Maximum Temperature</h3>
            <h3 class="bg-white">${data.main.temp_max}</h3>
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

// const giphy = gihpyApi.giphyJson('');
// let giphyRecord = giphy.then((data) => {
//   // console.log(data.data.embed_url);
//   document.getElementById('weatherImg').setAttribute('src', data.data.embed_url);
// }).catch(() => {
//   document.getElementById('weatherImg').setAttribute('src', 'https://giphy.com/embed/GwGXoeb0gm7sc');
// })
