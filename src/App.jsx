

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([
    { id: 1, value: 1, flipped: false },
    { id: 2, value: 6, flipped: false },
    { id: 3, value: 3, flipped: false },
    { id: 4, value: 6, flipped: false },
    { id: 5, value: 5, flipped: false },
    { id: 6, value: 1, flipped: false },
    { id: 7, value: 2, flipped: false },
    { id: 8, value: 4, flipped: false },
    { id: 9, value: 5, flipped: false },
    { id: 10, value: 2, flipped: false },
    { id: 11, value: 4, flipped: false },
    { id: 12, value: 3, flipped: false },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const cardClick = (id) => {
    if (selectedCards.length < 2 && !matchedCards.includes(id)) {
      const card = cards.find((c) => c.id === id);
      setSelectedCards([...selectedCards, card]);
      setCards(cards.map((c) => (c.id === id ? { ...c, flipped: true } : c)));
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setCount(count + 1);
      const [first, second] = selectedCards;

      if (first.value === second.value) {
        setMatchedCards((prev) => [...prev, first.id, second.id]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const shuffle = () => {
    const cd = [];
    for (let i = 1; i <= 6; i++) {
      cd.push({ id: i + "a", value: i, flipped: false });
      cd.push({ id: i + "b", value: i, flipped: false });
    }
    return cd.sort(() => Math.random() - 0.5);
  };

  const reset = () => {
    setCards(shuffle());
    setCount(0);
    setSelectedCards([]);
    setMatchedCards([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="heading" style={{ paddingTop: "30px" }}>
        FlashCard Game
      </h1>
      <h2 style={{ color: "white" }}>Trials : {count}</h2>
      <div className="game-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => cardClick(card.id)}
          >
            <div className="card-face card-front"></div>
            <div className="card-face card-back">
              {card.flipped ? card.value : ""}
            </div>
          </div>
        ))}
      </div>
      <button className="btn" onClick={reset}>
        Reset Game
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
