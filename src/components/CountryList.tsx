import { useState, useEffect } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchCountries();
  }, []);

  const handleToggleCountry = (country: Country): void => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
      setCountries((prevCountries) =>
        [...prevCountries, country].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      );
    } else {
      setSelectedCountries([...selectedCountries, country]);
      setCountries((prevCountries) =>
        prevCountries.filter((c) => c !== country)
      );
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>Favorite Countries</h1>
          <div>
            {selectedCountries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  handleToggleCountry={handleToggleCountry}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1>Countries</h1>
          <div>
            {countries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  handleToggleCountry={handleToggleCountry}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
