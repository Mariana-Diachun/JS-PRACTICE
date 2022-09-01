import refs from "./references.js";

const API_KEY = "64d6b90eedb4f846285071799db733c3";

axios.defaults.baseURL = "https://api.openweathermap.org";
console.dir(axios);
class Weather {
  constructor() {
    this.endpointGeo = "/geo/1.0/direct";
    this.endpointData = "/data/2.5/weather";
    this._cityName = "Kyiv";
    // this.geoLocation = {
    //   lon: 30.5241361,
    //   lat: 50.4500336,
    // };
    this._geoLocation = null;
    this._weatherData = null;
  }

  get cityName() {
    return this._cityName;
  }

  set cityName(value) {
    return (this._cityName = value);
  }

  get geoLocation() {
    return this._geoLocation;
  }

  set geoLocation(value) {
    return (this._geoLocation = value);
  }

  get weatherData() {
    return this._weatherData;
  }

  set weatherData(value) {
    return (this._weatherData = value);
  }

  getGeoByCityName() {
    const queryParams = `?q=${this.cityName}&appid=${API_KEY}`;
    const url = this.endpointGeo + queryParams;
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => data[0])
      .then((city) => {
        this.geoLocation = { lat: city.lat, lon: city.lon };
        this.getDataByGeo();
      })
      .catch((error) => alert(error));
  }

  getDataByGeo() {
    const queryParams = `?lat=${this.geoLocation.lat}&lon=${this.geoLocation.lon}&appid=${API_KEY}`;
    const url = this.endpointData + queryParams;
    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.data;
      })
      .then((data) => {
        this.weatherData = data;
        const widgetMarkup = createWidgetPreview(data);
        refs.weather.insertAdjacentHTML("afterbegin", widgetMarkup);
        refs.weather.addEventListener(
          "click",
          this.openFullWidget.bind(this, this.weatherData)
        );
      });
  }

  openFullWidget(data) {
    const fullWidget = createMarkup(data);
    refs.backdrop.classList.remove("is-hidden");
    refs.modalBtn.addEventListener("click", this.closeByBtn);
    refs.modal.insertAdjacentHTML("afterbegin", fullWidget);
  }

  closeByBtn() {
    refs.backdrop.classList.add("is-hidden");
    refs.modal.innerHTML = "";
  }
}

const weather = new Weather();
console.log(weather);
weather.getGeoByCityName();

function createMarkup(data) {
  const cityLocation = data.name;
  const temp = (data.main.temp - 273.15).toFixed(2);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const icons = createWeatherIcon(data.weather).join("");
  //  const pressure = data.main.pressure;
  // console.log("pressure:", `${pressure}mm`);
  return `<h2 class="city">
      Weather in ${cityLocation}
    </h2>
    <h1 class="temp">
      ${temp}°C
    </h1>
    <ul class="flex">
      ${icons}
    </ul>
    <div class="humidity">
      Humidity: ${humidity}%
    </div>
    <div class="wind">
      Wind speed: ${windSpeed}m/s
    </div>`;
}

function createWeatherIcon(icons) {
  return icons.map((icon) => {
    const desc = icon.description;
    const iconPath = `https://openweathermap.org/img/wn/${icon.icon}.png`;
    return `<li>
              <img src=${iconPath} alt=${desc} class="icon" />
              <div class="description">
              ${desc}
              </div>
          </li>`;
  });
}

function createWidgetPreview(data) {
  const icons = createWeatherIcon(data.weather).join("");
  const temp = (data.main.temp - 273.15).toFixed(2);

  return `
   <h1 class="temp">
      ${temp}°C
    </h1>
     <ul class="flex">
      ${icons}
    </ul>
  `;
}
