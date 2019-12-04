export default async function getStationData(city, unit) {
  const query = `q=${city}`;
  let units = 'units=';
  if (unit === 0) {
    units += 'metric';
  } else {
    units += 'imperial';
  }

  const apikey = 'appid=117282e70ab56637f9fbaa2e9518192a';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?${query}&${apikey}&${units}`,
    { mode: 'cors' }
  );
  const myJson = await response.json();

  return { city: myJson.name, country: myJson.sys.country, main: myJson.main };
}
