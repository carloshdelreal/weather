export default async function getStationData() {
  const query = 'query=bogota';
  const locType = 'locationType=city';
  const units = 'units=e';
  const apikey = 'apiKey=19906d8aa09345c5906d8aa09335c57f';
  const response = await fetch(
    `https://api.weather.com/v3/location/search?${query}&${locType}&language=en-US&format=json&${apikey}`
    //`https://api.weather.com/v3/location/search?query=atlanta&locationType=locid&language=en-US&format=json&${apikey}`
  );
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));
  return myJson;
}
