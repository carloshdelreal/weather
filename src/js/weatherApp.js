import data from './data';

export default (DOM) => {
  const inputCityDOM = DOM.cityInput;
  const inputBulletCDOM = DOM.bullC.firstChild;
  const {
    city, country, temp, pressure, humidity, tempMin, tempMax,
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
        cityInput,
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
    data(formData.cityInput, tempUnits).then((promiseData) => {
      updateConditions(promiseData);
    });
  };

  return {
    search,
  };
};
