const Person = ({ person, deletePerson }) => {
    return (
        <div>
            <div>{person.name} {person.number}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Person