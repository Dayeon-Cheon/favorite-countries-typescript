import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <>
      <div>
        <img src={country.flags.svg} />
        <h3>{country.name.common}</h3>
        <h5>{country.capital}</h5>
      </div>
    </>
  );
};

export default CountryCard;
