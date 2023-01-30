import { useState } from 'react'

const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const getRandomInt = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const increasePoints = () => {
    console.log('value before', points)
    const pointsClone = [...points]
    pointsClone[selected] += 1
    setPoints(pointsClone)
    console.log('value after', pointsClone)
  }

  const highestVote = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {points[selected]} votes</div>
      <Button onClick={increasePoints} text="Vote" />
      <Button onClick={getRandomInt} text="Next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[highestVote]}</div>
      <div>has {points[highestVote]} votes</div>
    </div>
  )
}

export default App