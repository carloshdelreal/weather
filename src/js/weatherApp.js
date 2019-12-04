import getData from './data';

const Weather = (DOM) => {
  const inputCityDOM = DOM.cityInput;
  const inputBulletCDOM = DOM.bullC.firstChild;
  const cardFields = DOM.cardFields;
  let tempUnits = 0; // 0 metric 1 imperial
  const previousSearchesList = [];

  const update = () => {};

  const formDataValid = () => {
    if (inputCityDOM.value === '') {
      inputCityDOM.classList.add('is-invalid');
      return false;
    }
    inputCityDOM.classList.remove('is-invalid');
    return true;
  };

  const getFormData = () => {
    const city = inputCityDOM.value;

    if (inputBulletCDOM.checked) {
      tempUnits = 0;
    } else {
      tempUnits = 1;
    }
    if (formDataValid()) {
      inputCityDOM.value = '';

      return {
        city
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
    cardFields.city.innerText = data.city;
    cardFields.country.innerText = data.country;
    cardFields.temp.innerText = data.main.temp + tempSuffix;
    cardFields.pressure.innerText = data.main.pressure;
    cardFields.humidity.innerText = data.main.humidity + ' %';
    cardFields.tempMin.innerText = data.main.temp_min + tempSuffix;
    cardFields.tempMax.innerText = data.main.temp_max + tempSuffix;
  };

  const search = () => {
    const formData = getFormData();
    getData(formData.city, tempUnits).then((data) => {
      updateConditions(data);
    });
  };

  return {
    update,
    search
  };
};

export { Weather };
