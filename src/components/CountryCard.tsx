import { Country } from "../types/country";
import styled from "styled-components";

interface CountryCardProps {
  country: Country;
  handleToggleCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleToggleCountry,
}) => {
  return (
    <>
      <CardContainer onClick={() => handleToggleCountry(country)}>
        <FlagImage src={country.flags.svg} />
        <CountryName>{country.name.common}</CountryName>
        <CapitalName>{country.capital}</CapitalName>
      </CardContainer>
    </>
  );
};

export default CountryCard;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;

const FlagImage = styled.img`
  width: 100px;
  margin: 10px 0;
`;

const CountryName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const CapitalName = styled.h5`
  margin: 5px 0 0;
  font-size: 14px;
  color: grey;
`;
