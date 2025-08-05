import "./App.css";
import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';

 /**
     * Challenge: Update the `hold` function to flip
     * the `isHeld` property on the object in the array
     * that was clicked, based on the `id` prop passed
     * into the function.
     * 
     * Hint: as usual, there's more than one way to 
     * accomplish this.
     */ 

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
    setRandomNumbers(generateAllNewDice());
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
      <div className="dice">{numbers}</div>
      <button onClick={rollDice} className="btn-dice">
        Roll
      </button>
    </main>
  );
}
