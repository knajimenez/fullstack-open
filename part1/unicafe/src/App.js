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

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
} 

const Statistics = (props) => {
  console.log(props)
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = total > 0 ? (good - bad)/total : 0
  const positive = total > 0 ? (good/total)*100 : 0

  if (total === 0) {
    return (
      <div> No feedback given</div>
    )
  } else {
    return (
      <table>
          <tbody>
            <StatisticsLine name="Good" value={good} />
            <StatisticsLine name="Neutral" value={neutral} />
            <StatisticsLine name="Bad" value={bad} />
            <StatisticsLine name="All" value={total} />
            <StatisticsLine name="Average" value={average.toFixed(2)} />
            <StatisticsLine name="Positive" value={positive.toFixed(2) + "%"} />
          </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    console.log('increasing, value before', good)
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    console.log('increasing, value before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    console.log('increasing, value before', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="Good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App