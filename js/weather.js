import refs from "./references.js";

const API_KEY = "64d6b90eedb4f846285071799db733c3";
const endpointGeo = "/geo/1.0/direct";
const endpointData = "/data/2.5/weather";
// const countryCode = 'UA';
// const url = BASE_URL + endpointGeo + queryParams;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
axios.defaults.baseURL = "https://api.openweathermap.org";
console.dir(axios);
class Weather {
  constructor() {
    this.endpointGeo = endpointGeo;
    this.endpointData = endpointData;
    this._cityName = "Kyiv";
    // this.geoLocation = {
    //   lon: 30.5241361,
    //   lat: 50.4500336,
    // };
    this._geoLocation = null;
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

  getGeoByCityName() {
    const queryParams = `?q=${this.cityName}&appid=${API_KEY}`;
    const url = this.endpointGeo + queryParams;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        return data[0];
      })
      .then((city) => {
        // console.log(city.lat, city.lon);
        this.geoLocation = { lat: city.lat, lon: city.lon };
      })
      .catch((error) => alert(error));
    // fetch(url)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     // console.log(response);
    //   })
    //   .then((data) => {
    //     return data[0];
    //     // console.log(data);
    //   })
    //   .then((city) => {
    //     console.log(city);
    //   })
    //   .catch();
  }

  getDataByGeo() {
    const queryParams = `?lat={this.geoLocation.lat}&lon={lon}&appid={API key}`;
  }
}

const weather = new Weather();
console.log(weather);

weather.getGeoByCityName();
