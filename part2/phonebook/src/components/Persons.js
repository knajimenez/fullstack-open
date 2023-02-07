import Person from "./Person"

const Persons = ({ filter, persons, filteredPersons, deletePerson }) => {
    return (
        <div>
        {filter === "" ?
        persons.map(person =>
          <Person key={person.name} person={person} deletePerson={deletePerson} />
        )
        : filteredPersons.map(person =>
          <Person key={person.name} person={person} deletePerson={deletePerson} />
        )}
      </div>
    )
}

export default Persons