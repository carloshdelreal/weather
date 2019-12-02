import './style.scss';
import pageLoad from './js/pageload';
import data from './js/data';

window.onload = () => {
  pageLoad();

  const cityField = document.querySelector('#cityForm');
  cityField.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      data();
    }
  });
};
