async function dataGetter(city, unit) {
  const query = `q=${city}`;
  let units = 'units=';
  if (unit === 0) {
    units += 'metric';
  } else {
    units += 'imperial';
  }

  const apikey = 'appid=117282e70ab56637f9fbaa2e9518192a';
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?${query}&${apikey}&${units}`,
      { mode: 'cors' }
    );
    const myJson = await response.json();
    return {
      city: myJson.name,
      country: myJson.sys.country,
      main: myJson.main
    };
  } catch (err) {
    return null;
  }
}

function Weather(DOM) {
  const inputCityDOM = DOM.cityInput;
  const cityValidation = DOM.cityValidation;
  const inputBulletCDOM = DOM.bullC.firstChild;
  const {
    city,
    country,
    temp,
    pressure,
    humidity,
    tempMin,
    tempMax
  } = DOM.cardFields;
  let tempUnits = 0; // 0 metric 1 imperial

  const formDataValid = () => {
    if (inputCityDOM.value === '') {
      inputCityDOM.classList.add('is-invalid');
      return false;
    }
    inputCityDOM.classList.remove('is-invalid');
    return true;
  };

  const getFormData = () => {
    const cityInput = inputCityDOM.value;

    if (inputBulletCDOM.checked) {
      tempUnits = 0;
    } else {
      tempUnits = 1;
    }
    if (formDataValid()) {
      inputCityDOM.value = '';

      return {
        cityInput
      };
    }
    return null;
  };

  const updateConditions = (conditions) => {
    let tempSuffix = '';
    if (tempUnits === 0) {
      tempSuffix = ' °C';
    } else {
      tempSuffix = ' °F';
    }
    city.innerText = conditions.city;
    country.innerText = conditions.country;
    temp.innerText = conditions.main.temp + tempSuffix;
    pressure.innerText = conditions.main.pressure;
    humidity.innerText = `${conditions.main.humidity} %`;
    tempMin.innerText = conditions.main.temp_min + tempSuffix;
    tempMax.innerText = conditions.main.temp_max + tempSuffix;
  };

  const search = () => {
    const formData = getFormData();
    dataGetter(formData.cityInput, tempUnits).then((promiseData) => {
      if (promiseData == null) {
        inputCityDOM.classList.add('is-invalid');
        cityValidation.innerText = `${formData.cityInput}: City not Founded`;
      } else {
        inputCityDOM.classList.remove('is-invalid');
        cityValidation.innerText = '';
        updateConditions(promiseData);
      }
    });
  };

  return {
    search
  };
}
export default Weather;
