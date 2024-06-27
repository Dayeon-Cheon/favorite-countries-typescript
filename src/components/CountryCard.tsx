import { Country } from "../types/country";

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
      <div onClick={() => handleToggleCountry(country)}>
        <img
          src={country.flags.svg}
          style={{ width: "30px", height: "20px" }}
        />
        <h3>{country.name.common}</h3>
        <h5>{country.capital}</h5>
      </div>
    </>
  );
};

export default CountryCard;
