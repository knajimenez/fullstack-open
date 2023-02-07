const Form = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <div>
            <h3>Add new person</h3>
            <form onSubmit={addPerson} >
                <div>
                    Name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form