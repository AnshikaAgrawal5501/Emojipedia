import React from "react";
import Card from "./Card";
import emojis from "../emojipedia";

function createCard(card) {
  return (
    <Card
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createCard)}</dl>
    </div>
  );
}

export default App;
