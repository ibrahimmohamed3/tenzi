import "./App.css";
import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';



export default function App() {
  const [randomNumbers, setRandomNumbers] = useState(generateAllNewDice());

  const numbers = randomNumbers.map((itemObject) => 
  <Die key={itemObject.id}
   value={itemObject.value}
   isHeld = {itemObject.isHeld}
   hold = {()=>hold(itemObject.id)} 
   id ={itemObject.id}
   />);
   

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = {
        value: Math.floor(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      };
      newDice.push(randomNumber);
    }
    return newDice;
  }

  function rollDice() {
    setRandomNumbers(oldDice => oldDice.map(die => 
            die.isHeld ?
                die :
                { ...die, value:  Math.floor(Math.random() * 6) }
    ));
  }


    function hold(id) {
        setRandomNumbers(oldDice => {
            return oldDice.map(die => {
                return die.id === id ?
                    {...die, isHeld: !die.isHeld} :
                    die
            })
        })

      }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">{numbers}</div>
      <button onClick={rollDice} className="btn-dice">
        Roll
      </button>
    </main>
  );
}
