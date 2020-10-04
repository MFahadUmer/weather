const weatherApi = (() => {
  async function weatherJson(cityName) {
    const weatherDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e21f8d5a0d3a5849a2608b37a047aa57`, {mode: "cors"});
    const data = await weatherDetails.json();
    return data;
  }
  return {
    weatherJson
  }
})();

export default weatherApi;