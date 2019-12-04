import './style.scss';
import pageLoad from './js/pageload';
import appWeather from './js/weatherApp';

window.onload = () => {
  const weather = appWeather(pageLoad());

  const cityField = document.querySelector('#cityForm');
  cityField.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      weather.search();
    }
  });
};
