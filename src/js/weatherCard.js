import { createDiv } from './elmcreator';

export default () => {
  const container = createDiv(['row']);

  const title = createDiv(['col-md-4']);
  title.innerText = 'Title';

  const country = createDiv(['col-md-4']);
  country.innerText = 'Country';

  const temp = createDiv(['col-md-4']);
  temp.innerText = 'Temp';

  const pressure = createDiv(['col-md-4']);
  pressure.innerText = 'Pressure';

  const humidity = createDiv(['col-md-4']);
  humidity.innerText = 'Humidity';

  const tempMin = createDiv(['col-md-4']);
  tempMin.innerText = 'Min Temperature';

  const tempMax = createDiv(['col-md-4']);
  tempMax.innerText = 'Max Temperature';

  container.appendChild(title);
  container.appendChild(country);
  container.appendChild(temp);
  container.appendChild(pressure);
  container.appendChild(humidity);
  container.appendChild(tempMin);
  container.appendChild(tempMax);

  return {
    container,
    cardFields: { title, country, temp, pressure, humidity, tempMin, tempMax }
  };
};
