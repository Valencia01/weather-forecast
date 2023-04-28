var btn = document.querySelector('.search-btn')
var userInput = document.querySelector('.city-input')

var cityName = document.querySelector('result-text')

var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');

btn.addEventListener('click',function(){

//This fetches the geo location of the user input giving the long and lat aswell as the name
fetch('http://api.openweathermap.org/geo/1.0/direct?q='+userInput.value+'&limit=5&appid=736fdd6c798518de531d91856a4b6127')
    .then(response => response.json())
    .then(data => console.log(data))


})