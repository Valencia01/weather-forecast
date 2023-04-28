var btn = document.querySelector('.search-btn')
var userInput = document.querySelector('.city-input')

var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');

btn.addEventListener('click',function(){

fetch('http://api.openweathermap.org/geo/1.0/direct?q='+userInput.value+'&limit=5&appid=736fdd6c798518de531d91856a4b6127')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("try again"))

})