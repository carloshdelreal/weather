import getData from './data';

export default (DOM) => {
  const inputCityDOM = DOM.cityInput;
  const inputBulletCDOM = DOM.bullC.firstChild;
  const { city, country, temp, pressure, humidity, tempMin, tempMax } = DOM.cardFields;
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

  const updateConditions = (data) => {
    let tempSuffix = '';
    if (tempUnits === 0) {
      tempSuffix = ' °C';
    } else {
      tempSuffix = ' °F';
    }
    city.innerText = data.city;
    country.innerText = data.country;
    temp.innerText = data.main.temp + tempSuffix;
    pressure.innerText = data.main.pressure;
    humidity.innerText = `${data.main.humidity} %`;
    tempMin.innerText = data.main.temp_min + tempSuffix;
    tempMax.innerText = data.main.temp_max + tempSuffix;
  };

  const search = () => {
    const formData = getFormData();
    getData(formData.cityInput, tempUnits).then((data) => {
      updateConditions(data);
    });
  };

  return {
    search,
  };
};
