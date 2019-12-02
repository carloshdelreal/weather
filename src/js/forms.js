import { createDiv, createElem } from './elmcreator';
import bulletField from './bulletField';

// Create Activity Form
export default function createForm() {
  const formContainer = createElem('div', '', ['formWeather']);
  const formWrapper = createElem('div', '', ['formpop']);

  // City
  const fieldCity = createDiv(['form-group']);
  const cityInput = createElem('input', 'cityForm', ['city', 'form-control']);
  cityInput.placeholder = 'Type a city: Bogota';
  fieldCity.appendChild(cityInput);

  // priority
  const fieldTemperature = createElem('div', '', ['form-group', 'bullets']);

  fieldTemperature.appendChild(bulletField('°c'));
  fieldTemperature.appendChild(bulletField('°f'));

  // Put everything together
  formWrapper.appendChild(fieldCity);
  formWrapper.appendChild(fieldTemperature);
  formContainer.appendChild(formWrapper);

  return formContainer;
}
