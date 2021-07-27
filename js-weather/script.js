const area = document.getElementById("area");
const des = document.getElementById("weather");
const API_KEY = "4b5774e9f3d2a07b84f0f2f88e486224";
const btn = document.getElementById("btn");

addEventListener("load", async function getWeatherData() {
  const city = area.value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const weather = await res.json();
  console.log(weather);
  const inner = weather.weather[0]['description'];
  des.innerHTML = `現在の天気は${inner}です`;
});

btn.addEventListener("click", async function getWeatherData() {
  const city = area.value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const weather = await res.json();
  console.log(weather);
  const inner = weather.weather[0]['description'];
  des.innerHTML = `現在の天気は${inner}です`;
});


getWeatherData();
