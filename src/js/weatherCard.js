import { createDiv, createElem } from './elmcreator';

function containerCard(labelText) {
  const container = createDiv(['col-md-4', 'col-sm-6', 'col-6', 'weatherCard']);
  const label = createElem('h5', '', []);
  label.innerText = labelText;
  container.appendChild(label);
  const item = createElem('p', '', []);
  item.innerText = '-';
  container.appendChild(item);
  return [container, item];
}

export default () => {
  const cardsContainer = createDiv(['weatherCards']);
  const container = createDiv(['row']);

  const [cityContainer, city] = containerCard('City');
  const [countryContainer, country] = containerCard('Country');
  const [tempContainer, temp] = containerCard('Temperature');
  const [pressureContainer, pressure] = containerCard('Pressure');
  const [humidityContainer, humidity] = containerCard('Humidity');
  const [tempMinContainer, tempMin] = containerCard('Min Temperature');
  const [tempMaxContainer, tempMax] = containerCard('Max Temperature');

  container.appendChild(cityContainer);
  container.appendChild(countryContainer);
  container.appendChild(tempContainer);
  container.appendChild(pressureContainer);
  container.appendChild(humidityContainer);
  container.appendChild(tempMinContainer);
  container.appendChild(tempMaxContainer);
  cardsContainer.appendChild(container);

  return {
    cardsContainer,
    cardFields: {
      city, country, temp, pressure, humidity, tempMin, tempMax,
    },
  };
};
