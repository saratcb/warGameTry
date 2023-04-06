const SUITS = ["♠","♣","♥","♦"]
const VALUES = ["A", "R", "Q", "J", "2","3","4","5","6","7","8","9","10"]


export default class Deck {
    constructor(cards = freshDeck) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards -1; i>0; i--){
            const newIndex = Math.floor(Math.random() * (i +1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.card[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    }
        )
}