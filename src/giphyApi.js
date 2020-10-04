const gihpyApi = (() => {
  async function giphyJson(giphy) {
    const giphyDetails = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UqTYenfZyjKroR1l4SNdXppZNIw31xcX&s=${giphy}`, {mode: "cors"});
    const data = await giphyDetails.json();
    return data;
  }
  return {
    giphyJson
  }
})();

export default gihpyApi;