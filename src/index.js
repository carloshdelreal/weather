import './style.scss';
import pageLoad from './js/pageload';
import { Weather } from './js/weatherApp';

window.onload = () => {
  const weather = Weather(pageLoad());

  const cityField = document.querySelector('#cityForm');
  cityField.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      weather.search();
    }
  });
};
