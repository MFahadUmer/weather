const navbar = (() => {
  const navbarSection = document.createElement('div');
  navbarSection.setAttribute('class', 'height-75 px-4 d-flex');
  navbarSection.innerHTML = `
  <div class=" d-flex justify-content-between align-items-center w-100">
        <div class=" h4 text-white d-flex align-items-center"><a href="#"><h4 class="text-white">Today's Weather</h4></a></div>
        <div class=" h4">
        <form id="searchForm" name="searchForm">
            <div class="input-group d-flex align-items-center">
                <div><input id="searchInputField" class="searchInput" required type="text"></div>
                <div class="input-group-prepend">
                    <input type="submit" class="input-group-text bg-danger text-white font-weight-bold" for="inputGroupSelect01">
                </div>
            </div>
        </form>
        </div>
      </div>`;
  document.getElementById('navbar').appendChild(navbarSection);
})();

export default navbar;