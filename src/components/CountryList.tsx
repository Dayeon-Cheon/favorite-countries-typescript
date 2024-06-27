import { useState, useEffect } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";
import styled from "styled-components";

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
    <Container>
      <CountryBox>
        <BoxHeader>Favorite Countries</BoxHeader>
        <Card>
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleToggleCountry={handleToggleCountry}
              />
            );
          })}
        </Card>
      </CountryBox>
      <CountryBox>
        <BoxHeader>Countries</BoxHeader>
        <Card>
          {countries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleToggleCountry={handleToggleCountry}
              />
            );
          })}
        </Card>
      </CountryBox>
    </Container>
  );
};

export default CountryList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 500px;
  max-width: 1200px;
`;

const CountryBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const BoxHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;
