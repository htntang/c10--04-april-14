import { useEffect, useState } from 'react'
import './App.css'


const computerOpponent = "http://localhost:5173/rps"

function Button(props){
  const {text, fire} = props
  return <button style={{backgroundColor: 'white', color: "#b9b1ff", margin: 4}} onClick={fire}>{text}</button>
}

function App() {
  const [myGuess, setMyGuess] = useState('No guess yet') 

  let myGuessString = 'You have not guessed yet'
  if (myGuess != 'No guess yet') myGuessString = 'You guessed '+myGuess+'!'

  useEffect(()=>{
    if (myGuess == "no guess yet") return;

    async function getComputerGuess(){
      const result = fetch(computerOpponentUrl)
      console.log(result)
    }

    getComputerGuess()
  }, [myGuess])

  return (
    <div>
      <h1>Welcome to Rock, Paper, Scissors</h1>
      <img src="https://i.imgur.com/gHc5yEK.png"></img>
      <div>{myGuessString}</div>
      <br />
      <Button text="Rock" fire={()=>{setMyGuess('rock')}}/>
      <Button text="Paper" fire={()=>{setMyGuess('paper')}}/>
      <Button text="Scissors" fire={()=>{setMyGuess('scissors')}}/>
    </div>
  )
}

export default App;