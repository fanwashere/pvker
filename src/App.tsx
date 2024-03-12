import React, {useState} from 'react';
import './App.scss';

import Card from './components/Card';
import {Card as CardClass, DECK, Suit} from './constants/card';
import {generateDeck, shuffleDeck} from './utils/deck';

function App() {
  const [ deck, setDeck ] = useState<CardClass[]>(shuffleDeck(generateDeck()));
  const [ selectedCards, setSelectedCards ] = useState<Set<CardClass>>(new Set());

  function onSelectCard(card: CardClass) {
    setSelectedCards(new Set(selectedCards.add(card)));
  }

  function onDeselectCard(card: CardClass) {
    const newSelectedCards = new Set(selectedCards);
    newSelectedCards.delete(card);
    setSelectedCards(newSelectedCards);
  }

  function hasFlush(cards: CardClass[]) {
    const suitCount = new Map<Suit, number>();
    for (const card of cards) {

      const suit = card.baseCard.suit;
      const newSuitCount = (suitCount.get(suit) ?? 0) + 1;

      if (newSuitCount >= 5) {
        return true;
      }

      suitCount.set(suit, newSuitCount);
    }

    return false;
  }

  return (
    <div className="App">
      {deck.map(card => <Card key={card.id} card={card} selected={selectedCards.has(card)} onSelect={onSelectCard} onDeselect={onDeselectCard} />)}

      {hasFlush(Array.from(selectedCards)) && <div>Flush!!</div>}
    </div>
  );
}

export default App;
