
enum Suit {
    HEARTS = '♥',
    DIAMONDS = '♦',
    SPADES = '♠',
    CLUBS = '♣',
}

enum Rank {
    ACE = 'A',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    JACK = 'J',
    QUEEN = 'Q',
    KING = 'K',
}

enum Color {
    RED = 'red',
    BLACK = 'black',
}

interface BaseCard {
    suit: Suit;
    rank: Rank;
    value: number;
    color: Color;
    pattern: string;
}

const ACE_PATTERN = `
x

`;

const TWO_PATTERN = `
x



x

`;

const THREE_PATTERN = `
x

x

x

`;

const FOUR_PATTERN = `
x   x
   


x   x

`;

const FIVE_PATTERN = `
x   x
   
  x  

x   x

`;

const SIX_PATTERN = `
x   x
   
x   x

x   x

`;

const SEVEN_PATTERN = `
x   x
  x  
x   x
   
x   x

`;

const EIGHT_PATTERN = `
x   x
  x  
x   x
  x  
x   x

`;

const NINE_PATTERN = `
x   x
  x  
x   x
x   x

x   x

`;

const TEN_PATTERN = `
x   x
  x  
x   x
x   x
  x  
x   x

`;

const JACK_PATTERN = `
𝓙   🤔

    
🤔   𝓙

`;

const QUEEN_PATTERN = `
𝓠   👸

    
👸   𝓠

`;

const KING_PATTERN = `
𝓚   🤴

    
🤴   𝓚

`;

const ACE_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.ACE,
    value: 1,
    color: Color.RED,
    pattern: ACE_PATTERN.replaceAll('x', Suit.HEARTS),
});

const TWO_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.TWO,
    value: 2,
    color: Color.RED,
    pattern: TWO_PATTERN.replaceAll('x', Suit.HEARTS),
});

const THREE_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.THREE,
    value: 3,
    color: Color.RED,
    pattern: THREE_PATTERN.replaceAll('x', Suit.HEARTS),
});

const FOUR_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.FOUR,
    value: 4,
    color: Color.RED,
    pattern: FOUR_PATTERN.replaceAll('x', Suit.HEARTS),
});

const FIVE_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.FIVE,
    value: 5,
    color: Color.RED,
    pattern: FIVE_PATTERN.replaceAll('x', Suit.HEARTS),
});

const SIX_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.SIX,
    value: 6,
    color: Color.RED,
    pattern: SIX_PATTERN.replaceAll('x', Suit.HEARTS),
});

const SEVEN_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.SEVEN,
    value: 7,
    color: Color.RED,
    pattern: SEVEN_PATTERN.replaceAll('x', Suit.HEARTS),
});

const EIGHT_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.EIGHT,
    value: 8,
    color: Color.RED,
    pattern: EIGHT_PATTERN.replaceAll('x', Suit.HEARTS),
});

const NINE_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.NINE,
    value: 9,
    color: Color.RED,
    pattern: NINE_PATTERN.replaceAll('x', Suit.HEARTS),
});

const TEN_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.TEN,
    value: 10,
    color: Color.RED,
    pattern: TEN_PATTERN.replaceAll('x', Suit.HEARTS),
});

const JACK_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.JACK,
    value: 11,
    color: Color.RED,
    pattern: JACK_PATTERN.replaceAll('x', Suit.HEARTS),
});

const QUEEN_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.QUEEN,
    value: 12,
    color: Color.RED,
    pattern: QUEEN_PATTERN.replaceAll('x', Suit.HEARTS),
});

const KING_OF_HEARTS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.HEARTS,
    rank: Rank.KING,
    value: 13,
    color: Color.RED,
    pattern: KING_PATTERN.replaceAll('x', Suit.HEARTS),
});

const ACE_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.ACE,
    value: 1,
    color: Color.RED,
    pattern: ACE_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const TWO_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.TWO,
    value: 2,
    color: Color.RED,
    pattern: TWO_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const THREE_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.THREE,
    value: 3,
    color: Color.RED,
    pattern: THREE_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const FOUR_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.FOUR,
    value: 4,
    color: Color.RED,
    pattern: FOUR_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const FIVE_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.FIVE,
    value: 5,
    color: Color.RED,
    pattern: FIVE_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const SIX_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.SIX,
    value: 6,
    color: Color.RED,
    pattern: SIX_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const SEVEN_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.SEVEN,
    value: 7,
    color: Color.RED,
    pattern: SEVEN_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const EIGHT_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.EIGHT,
    value: 8,
    color: Color.RED,
    pattern: EIGHT_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const NINE_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.NINE,
    value: 9,
    color: Color.RED,
    pattern: NINE_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const TEN_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.TEN,
    value: 10,
    color: Color.RED,
    pattern: TEN_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const JACK_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.JACK,
    value: 11,
    color: Color.RED,
    pattern: JACK_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const QUEEN_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.QUEEN,
    value: 12,
    color: Color.RED,
    pattern: QUEEN_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const KING_OF_DIAMONDS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.DIAMONDS,
    rank: Rank.KING,
    value: 13,
    color: Color.RED,
    pattern: KING_PATTERN.replaceAll('x', Suit.DIAMONDS),
});

const ACE_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.ACE,
    value: 1,
    color: Color.BLACK,
    pattern: ACE_PATTERN.replaceAll('x', Suit.CLUBS),
});

const TWO_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.TWO,
    value: 2,
    color: Color.BLACK,
    pattern: TWO_PATTERN.replaceAll('x', Suit.CLUBS),
});

const THREE_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.THREE,
    value: 3,
    color: Color.BLACK,
    pattern: THREE_PATTERN.replaceAll('x', Suit.CLUBS),
});

const FOUR_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.FOUR,
    value: 4,
    color: Color.BLACK,
    pattern: FOUR_PATTERN.replaceAll('x', Suit.CLUBS),
});

const FIVE_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.FIVE,
    value: 5,
    color: Color.BLACK,
    pattern: FIVE_PATTERN.replaceAll('x', Suit.CLUBS),
});

const SIX_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.SIX,
    value: 6,
    color: Color.BLACK,
    pattern: SIX_PATTERN.replaceAll('x', Suit.CLUBS),
});

const SEVEN_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.SEVEN,
    value: 7,
    color: Color.BLACK,
    pattern: SEVEN_PATTERN.replaceAll('x', Suit.CLUBS),
});

const EIGHT_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.EIGHT,
    value: 8,
    color: Color.BLACK,
    pattern: EIGHT_PATTERN.replaceAll('x', Suit.CLUBS),
});

const NINE_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.NINE,
    value: 9,
    color: Color.BLACK,
    pattern: NINE_PATTERN.replaceAll('x', Suit.CLUBS),
});

const TEN_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.TEN,
    value: 10,
    color: Color.BLACK,
    pattern: TEN_PATTERN.replaceAll('x', Suit.CLUBS),
});

const JACK_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.JACK,
    value: 11,
    color: Color.BLACK,
    pattern: JACK_PATTERN.replaceAll('x', Suit.CLUBS),
});

const QUEEN_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.QUEEN,
    value: 12,
    color: Color.BLACK,
    pattern: QUEEN_PATTERN.replaceAll('x', Suit.CLUBS),
});

const KING_OF_CLUBS: Readonly<BaseCard> = Object.freeze({
    suit: Suit.CLUBS,
    rank: Rank.KING,
    value: 13,
    color: Color.BLACK,
    pattern: KING_PATTERN.replaceAll('x', Suit.CLUBS),
});

const ACE_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.ACE,
    value: 1,
    color: Color.BLACK,
    pattern: ACE_PATTERN.replaceAll('x', Suit.SPADES),
});

const TWO_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.TWO,
    value: 2,
    color: Color.BLACK,
    pattern: TWO_PATTERN.replaceAll('x', Suit.SPADES),
});

const THREE_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.THREE,
    value: 3,
    color: Color.BLACK,
    pattern: THREE_PATTERN.replaceAll('x', Suit.SPADES),
});

const FOUR_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.FOUR,
    value: 4,
    color: Color.BLACK,
    pattern: FOUR_PATTERN.replaceAll('x', Suit.SPADES),
});

const FIVE_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.FIVE,
    value: 5,
    color: Color.BLACK,
    pattern: FIVE_PATTERN.replaceAll('x', Suit.SPADES),
});

const SIX_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.SIX,
    value: 6,
    color: Color.BLACK,
    pattern: SIX_PATTERN.replaceAll('x', Suit.SPADES),
});

const SEVEN_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.SEVEN,
    value: 7,
    color: Color.BLACK,
    pattern: SEVEN_PATTERN.replaceAll('x', Suit.SPADES),
});

const EIGHT_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.EIGHT,
    value: 8,
    color: Color.BLACK,
    pattern: EIGHT_PATTERN.replaceAll('x', Suit.SPADES),
});

const NINE_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.NINE,
    value: 9,
    color: Color.BLACK,
    pattern: NINE_PATTERN.replaceAll('x', Suit.SPADES),
});

const TEN_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.TEN,
    value: 10,
    color: Color.BLACK,
    pattern: TEN_PATTERN.replaceAll('x', Suit.SPADES),
});

const JACK_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.JACK,
    value: 11,
    color: Color.BLACK,
    pattern: JACK_PATTERN.replaceAll('x', Suit.SPADES),
});

const QUEEN_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.QUEEN,
    value: 12,
    color: Color.BLACK,
    pattern: QUEEN_PATTERN.replaceAll('x', Suit.SPADES),
});

const KING_OF_SPADES: Readonly<BaseCard> = Object.freeze({
    suit: Suit.SPADES,
    rank: Rank.KING,
    value: 13,
    color: Color.BLACK,
    pattern: KING_PATTERN.replaceAll('x', Suit.SPADES),
});

const Deck: Readonly<{ [key: string]: Readonly<BaseCard> }> = Object.freeze({
    ACE_OF_HEARTS,
    TWO_OF_HEARTS,
    THREE_OF_HEARTS,
    FOUR_OF_HEARTS,
    FIVE_OF_HEARTS,
    SIX_OF_HEARTS,
    SEVEN_OF_HEARTS,
    EIGHT_OF_HEARTS,
    NINE_OF_HEARTS,
    TEN_OF_HEARTS,
    JACK_OF_HEARTS,
    QUEEN_OF_HEARTS,
    KING_OF_HEARTS,
    ACE_OF_DIAMONDS,
    TWO_OF_DIAMONDS,
    THREE_OF_DIAMONDS,
    FOUR_OF_DIAMONDS,
    FIVE_OF_DIAMONDS,
    SIX_OF_DIAMONDS,
    SEVEN_OF_DIAMONDS,
    EIGHT_OF_DIAMONDS,
    NINE_OF_DIAMONDS,
    TEN_OF_DIAMONDS,
    JACK_OF_DIAMONDS,
    QUEEN_OF_DIAMONDS,
    KING_OF_DIAMONDS,
    ACE_OF_CLUBS,
    TWO_OF_CLUBS,
    THREE_OF_CLUBS,
    FOUR_OF_CLUBS,
    FIVE_OF_CLUBS,
    SIX_OF_CLUBS,
    SEVEN_OF_CLUBS,
    EIGHT_OF_CLUBS,
    NINE_OF_CLUBS,
    TEN_OF_CLUBS,
    JACK_OF_CLUBS,
    QUEEN_OF_CLUBS,
    KING_OF_CLUBS,
    ACE_OF_SPADES,
    TWO_OF_SPADES,
    THREE_OF_SPADES,
    FOUR_OF_SPADES,
    FIVE_OF_SPADES,
    SIX_OF_SPADES,
    SEVEN_OF_SPADES,
    EIGHT_OF_SPADES,
    NINE_OF_SPADES,
    TEN_OF_SPADES,
    JACK_OF_SPADES,
    QUEEN_OF_SPADES,
    KING_OF_SPADES,
});

const DECK: BaseCard[] = [
    ACE_OF_HEARTS,
    TWO_OF_HEARTS,
    THREE_OF_HEARTS,
    FOUR_OF_HEARTS,
    FIVE_OF_HEARTS,
    SIX_OF_HEARTS,
    SEVEN_OF_HEARTS,
    EIGHT_OF_HEARTS,
    NINE_OF_HEARTS,
    TEN_OF_HEARTS,
    JACK_OF_HEARTS,
    QUEEN_OF_HEARTS,
    KING_OF_HEARTS,
    ACE_OF_DIAMONDS,
    TWO_OF_DIAMONDS,
    THREE_OF_DIAMONDS,
    FOUR_OF_DIAMONDS,
    FIVE_OF_DIAMONDS,
    SIX_OF_DIAMONDS,
    SEVEN_OF_DIAMONDS,
    EIGHT_OF_DIAMONDS,
    NINE_OF_DIAMONDS,
    TEN_OF_DIAMONDS,
    JACK_OF_DIAMONDS,
    QUEEN_OF_DIAMONDS,
    KING_OF_DIAMONDS,
    ACE_OF_CLUBS,
    TWO_OF_CLUBS,
    THREE_OF_CLUBS,
    FOUR_OF_CLUBS,
    FIVE_OF_CLUBS,
    SIX_OF_CLUBS,
    SEVEN_OF_CLUBS,
    EIGHT_OF_CLUBS,
    NINE_OF_CLUBS,
    TEN_OF_CLUBS,
    JACK_OF_CLUBS,
    QUEEN_OF_CLUBS,
    KING_OF_CLUBS,
    ACE_OF_SPADES,
    TWO_OF_SPADES,
    THREE_OF_SPADES,
    FOUR_OF_SPADES,
    FIVE_OF_SPADES,
    SIX_OF_SPADES,
    SEVEN_OF_SPADES,
    EIGHT_OF_SPADES,
    NINE_OF_SPADES,
    TEN_OF_SPADES,
    JACK_OF_SPADES,
    QUEEN_OF_SPADES,
    KING_OF_SPADES,
];

class Card {
    constructor(
        readonly baseCard: BaseCard,
        readonly id: string = Math.random().toString(16).slice(2),
    ) { }
}

export type { BaseCard };
export { Suit, Rank, Color, Deck, DECK, Card };