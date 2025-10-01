import axios from "axios";

const api = axios.create({
   baseURL:'https://restcountries.com/v3.1'
});


export const countryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// individual Country
export const countryIndData = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,
capital,flags,tld,currencies,languages,borders`);
};
