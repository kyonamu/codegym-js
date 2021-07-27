const area = document.getElementById("area");
const des = document.getElementById("weather");
const API_KEY = "4b5774e9f3d2a07b84f0f2f88e486224";
const btn = document.getElementById("btn");

const sampleAsyncFunc = async () => {
  const city = area.value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const weather = await res.json();
  const inner = weather.weather[0]['description'];
  des.innerHTML = `現在の天気は${inner}です`;
}

addEventListener("load", sampleAsyncFunc);

btn.addEventListener("click", sampleAsyncFunc);
