const valueSeach = document.getElementById('valueSearch');
const search = document.querySelector('.search_box button')
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind_speed');
const weather = document.querySelector('.weather');
const container = document.querySelector('.container');

search.addEventListener('click', (event)=>{
  event.preventDefault();
  if (valueSeach.value != ""){
    searchWeather();
  }
})
let id = '61316be9811c7de0a4b8c57bf47cae1e';
let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=`+id;
const searchWeather=()=>{
  fetch(url + '&q=' + valueSeach.value)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    if(data.cod == 200){
      weather.querySelector('img').src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
      temperature.innerText = data.main.temp+'°C';
      description.innerText = data.weather[0].description;
      humidity.innerText = data.main.humidity;
      windSpeed.innerText = data.wind.speed;
    }else{
      container.classList.add('error');
      setTimeout(()=>{
        container.classList.remove('error');
      },1000);
    }
  })
}

const initApp=()=>{
  valueSeach.value="Chennai";
  searchWeather();
}
initApp();