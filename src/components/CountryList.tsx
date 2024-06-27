import { useState, useEffect } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <div>
        <h1>Countries</h1>
        <div>
          {countries.map((country: Country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CountryList;
