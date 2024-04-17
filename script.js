document.addEventListener(`DOMContentLoaded`, function(){

const searchbar = document.querySelector(`.search-bar`);
const searchbtn = document.querySelector(`.search-btn`);

searchbtn.addEventListener(`click`, function(event){
    event.preventDefault();
    const city = searchbar.value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=f767b142d9b54e01b9b200154241604&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        document.querySelector(`.Location`).textContent = data.location.name;
        document.querySelector(`.Temperature`).textContent = data.current.temp_f;
})

});



});