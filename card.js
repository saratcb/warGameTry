
import Deck from "./deck.js"

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
const playerOneDeckElement = document.querySelector(".playerOneDeck")
const playerTwoDeckElement = document.querySelector(".playerTwoDeck")

let playerOneDeck, playerTwoDeck, inRound, stop 

document.querySelector(".myButton").addEventListener("click", () => {
    if (stop){
    startGame()
    return
}
    if (inRound){
        cleanBeforeRound()
    } else {
        flipCards()
    }
})

startGame()
    function startGame(){
    const deck = new Deck();
    deck.shuffle();

    const deckMidpoint = Math.ceil(deck.numberOfCards/2)
    playerOneDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    playerTwoDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false
    
    cleanBeforeRound()
    }

    function cleanBeforeRound(){

        inRound = false
        playerOneCardNum.innerHTML = ""
        playerTwoCardNum.innerHTML = ""

        
    }

    function flipCards(){
        inRound = true

        const player1Card = playerOneDeck.pop()
        const player2Card = playerTwoDeck.pop()

        playerOneCardNum.appendChild(player1Card.getHTML())
        playerTwoCardNum.appendChild(player2Card.getHTML())

        

    }
    
    

    
      
