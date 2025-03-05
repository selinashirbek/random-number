import React, { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);
    if (!isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(random);
    } else {
      setRandomNumber("Ошибка");
    }
  };

  return (
    <div className="container">
      <div className="random-box">
        <h2>Генератор случайного числа</h2>
        <input
          type="number"
          placeholder="Мин число"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Макс число"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <button onClick={generateRandomNumber}>Рандомное число!</button>
        <div className="result">
          {randomNumber !== null && <p>Результат: {randomNumber}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
