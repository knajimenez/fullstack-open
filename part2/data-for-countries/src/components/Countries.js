import Country from "./Country"

const Countries = ({ countries, handleShow }) => {
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countries.length <= 10 && countries.length > 1) {
        return (
            countries.map(country =>
                <div key={country.name.official}>
                    <span>
                        {country.name.common}
                    </span>
                    <button onClick={() => handleShow(country.name.common)}>Show</button>
                </div>
                )
            )
    } else if (countries.length === 1) {
        return (
            countries.map(country =>
                <div key={country.name.official}>
                    <Country country={country} />
                </div>
                )
            )
    } else {
        return (<></>)
    }

}

export default Countries;