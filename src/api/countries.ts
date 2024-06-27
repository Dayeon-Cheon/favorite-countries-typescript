import axios from "axios";
import { Country } from "../types/country";

const API_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(API_URL);
    const countries: Country[] = response.data.map((country) => ({
      name: {
        common: country.name.common,
      },
      capital: country.capital,
      flags: {
        svg: country.flags.svg,
      },
    }));
    return countries;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
