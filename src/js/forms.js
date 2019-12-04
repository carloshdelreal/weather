import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

// Create Activity Form
export default function createForm() {
  const formContainer = createElem('div', '', ['formWeather']);
  const formWrapper = createElem('div', '', ['formpop']);

  // City
  const fieldCity = createDiv(['form-group']);
  const cityInput = createElem('input', 'cityForm', ['city', 'form-control']);
  const cityValidation = createElem('div', '', ['cityValidation']);
  cityInput.placeholder = 'Type a city: Bogota';
  fieldCity.appendChild(cityInput);
  fieldCity.appendChild(cityValidation);

  // priority
  const fieldTemperature = createElem('div', '', ['form-group', 'bullets']);
  const bullC = bulletField('°c');
  const bullF = bulletField('°f');
  bullC.firstChild.checked = true;

  fieldTemperature.appendChild(bullC);
  fieldTemperature.appendChild(bullF);

  // Put everything together
  formWrapper.appendChild(fieldCity);
  formWrapper.appendChild(fieldTemperature);
  formContainer.appendChild(formWrapper);

  return {
    formContainer, bullC, bullF, cityInput, cityValidation,
  };
}
