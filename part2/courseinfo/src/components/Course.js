const Course = (props) => {
    console.log(props)

    const { course } = props
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {
    console.log(props)

    const { name } = props
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}

const Content = (props) => {
    console.log(props)

    const { parts } = props
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </div>
    )
}

const Part = (props) => {
    console.log(props)

    const { name, exercises } = props
    return (
        <>
            <p>
                {name} {exercises}
            </p>
        </>
    )
}

const Total = (props) => {
    console.log(props)

    const { parts } = props

    const total = parts.reduce((sum, part) => {
        return sum + part.exercises
    },0)
    return (
        <div>
            <p>
                <strong>Total of {total} exercises</strong>
            </p>
        </div>
    )
}

export default Course