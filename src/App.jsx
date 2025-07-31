import "./App.css";
import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 *
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */
export default function App() {
  const [randomNumbers, setRandomNumbers] = useState(generateAllNewDice());

  const numbers = randomNumbers.map((itemObject) => <Die id={itemObject.id} value={itemObject.value} />);

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

  return (
    <main>
      <div className="dice">{numbers}</div>
      <button onClick={rollDice} className="btn-dice">
        Roll
      </button>
    </main>
  );
}
