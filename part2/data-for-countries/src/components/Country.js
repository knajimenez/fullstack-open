import Weather from "./Weather"

const Country = ({ country }) => {
    return (
        <div>
            <div><h2>{country.name.common}</h2></div>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}km²</div>
            <h3>Languages</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather city={country.capital} />
        </div>
    )
}

export default Country