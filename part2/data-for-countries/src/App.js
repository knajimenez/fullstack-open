import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  const countryHook = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        if (filter !== "") {
          const searchResult = response.data.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
          setCountries(searchResult)
          console.log(searchResult);
        }
      })
  }

  useEffect(countryHook, [filter])
  
  const filterCountries = (event) => {
    const query = event.target.value
    setFilter(query)
  }

  const handleShow = (showCountry) => {
    setFilter(showCountry)
  }

  return (
    <main>
      <div>
        Find countries: <input value={filter} onChange={filterCountries} />
      </div>

      <div className='countries'>
        {filter === "" ? <div>No search results</div>
         : <Countries countries={countries} handleShow={handleShow} />}
      </div>
    </main>
  )
}

export default App;
