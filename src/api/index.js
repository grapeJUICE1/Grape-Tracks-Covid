import axios from 'axios'


const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) =>{
  let url2 = url;
  if(country){
    url2 = `${url}/countries/${country}`
  }
 try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url2);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async() => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)
    return countries.map((country) => {return country.name})
  } catch (e) {console.log(e)}
}