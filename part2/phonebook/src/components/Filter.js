const Filter = ({filter, filterName}) => {
    return (
        <div>
            <h3>Filter</h3>
            Filter shown with <input value={filter} onChange={filterName} />
        </div>
    )
}

export default Filter