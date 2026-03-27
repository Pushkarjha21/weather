let btn = document.querySelector("button");
let input = document.querySelector("#cities");
const weatherData = async (city) => {
  window.addEventListener("load", function () {
    const defaultCity = document.querySelector("#cities").value;
    weatherData(defaultCity);
  });
  let input = document.querySelector("#cities").value.trim();
  if (!input) {
    alert("enter your city name");
    return;
  } else {
    let data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4f751e331776410dba191507262302&q=${input}`,
    );
    let response = await data.json();
    console.log(response.current);

    let humidity = document.querySelector("#humid");
    humidity.innerText = `${response.current.humidity}`;
    let temp = document.querySelector("#temp");
    temp.innerText = `${response.current.temp_c}`;
    let location = document.querySelector("#locate");
    location.innerText = `${response.location.name}`;
    let windSpeed = document.querySelector("#speed");
    windSpeed.innerText = `${response.current.wind_kph}`;
    let pressure = document.querySelector("#pressure");
    pressure.innerText = `${response.current.pressure_mb}`;
    let rainChances = document.querySelector("#rainchances");
    rainChances.innerText = `${response.current.precip_mm}`;
  }
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    weatherData();
  }
});
