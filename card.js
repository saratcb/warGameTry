
import Deck from './deck.js';

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

const playerOneCardNum = document.querySelector(".playerOneCardNum")
const playerTwoCardNum= document.querySelector(".playerTwoCardNum")
const computerDeckElement = document.querySelector(".card__back")
const playerDeckElement = document.querySelector(".card__back")

let player1PlayingDeck, player2PlayingDeck, inRound, stop 

document.addEventListener("click", () => {
    if (stop){
    startGame()
    return
}
    if (inRound){
        cleanBeforeRound()
    } else {
        flipCards()
    }
}

)

startGame()
    function startGame(){
    const deck = new Deck();
    deck.shuffle();

    const deckMidpoint = Math.ceil(deck.numberOfCards/2)
    player1PlayingDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    player2PlayingDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false
    
    cleanBeforeRound()
    }

    function cleanBeforeRound(){

        inRound = false
        playerOneCardNum.innerHTML = ""
        playerTwoCardNum.innerHTML = ""
        text.innerText = ""

        updateDeckCount()
    }

    function flipCards(){
        inRound = true

        const player1Card = player1PlayingDeck.pop()
        const player2Card = player2PlayingDeck.pop()

        playerOneCardNum.appendChild(player1Card.getHTML())
        playerTwoCardNum.appendChild(player2Card.getHTML())

        updateDeckCount()


    }

    function updateDeckCount() {
        computerDeckElement.innerText = player2PlayingDeck.numberOfCards
        playerDeckElement.innerText = player1PlayingDeck.numberOfCards
      }
      
