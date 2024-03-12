import { Card, Deck } from '../constants/card';
import { createCardInstance } from './card';

function generateDeck() {
    const deck: Card[] = [];
    for (const baseCard of Object.values(Deck)) {
        deck.push(createCardInstance(baseCard));
    }

    return deck;
}

function shuffleDeck(deck: Card[]) {
    deck.sort(() => Math.random() - 0.5);

    return deck;
}

export {generateDeck, shuffleDeck};