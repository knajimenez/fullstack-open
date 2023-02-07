import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import {ErrorNotification, SuccessNotification} from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [filteredPersons, setFilteredPersons] = useState()
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const personsHook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }

  useEffect(personsHook, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log("Button clicked", event.target)
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (personExists) {
      const confirmReplace = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (confirmReplace) {
        const updatedPerson = { ...personExists, number: newNumber }

        personService
          .update(personExists.id, updatedPerson)
          .then(returnedPerson => {
            setSuccessMessage(
              `Updated ${newName}'s number`
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
            setPersons(persons.map(p => p.id !== personExists.id ? p : returnedPerson))
            setNewName("")
            setNewNumber("")
          })
      } else {
        setNewName("")
        setNewNumber("")
      }
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setSuccessMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
        })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setFilter("")
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${person.name} was already removed from the server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filterName = (event) => {
    const query = event.target.value
    setFilter(query)
    setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase())))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />
      <Filter filter={filter} filterName={filterName} />
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} filteredPersons={filteredPersons} deletePerson={deletePerson} />

      <div>debug: {newName} {newNumber}</div>
    </div>
  )
}

export default App