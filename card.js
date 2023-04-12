
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
const playerOneDeckElement = document.querySelector(".player1Score")
const playerTwoDeckElement = document.querySelector(".player2Score")
const playerOneCardNumWar = document.querySelector(".playerOneCardWar")
const playerTwoCardNumWar = document.querySelector(".playerTwoCardWar")

let playerOneDeck, playerTwoDeck, inRound, stop 



document.querySelector(".myButton").addEventListener("click", () => {
    if (stop){
    startGame()
    return
}
    else{
        cleanBeforeRound()
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
        updateDeckCount()
    }

    function flipCards(){
        inRound = true

        const player1Card = playerOneDeck.pop()
        const player2Card = playerTwoDeck.pop()

        playerOneCardNum.appendChild(player1Card.getHTML())
        playerTwoCardNum.appendChild(player2Card.getHTML())

        checkWinner(player1Card,player2Card)
        updateDeckCount()

    }

    function checkWinner(player1Card, player2Card){

        let p1Card = CARD_VALUE_MAP[player1Card.value]
        let p2Card = CARD_VALUE_MAP[player2Card.value]

        
        if (p1Card>p2Card){
            playerOneDeck.push(player1Card)
            playerOneDeck.push(player2Card) 
        }

        else if (p1Card<p2Card){
            playerTwoDeck.push(player1Card)
            playerTwoDeck.push(player2Card)
        } 

        else {
            war();
        }
        
        updateDeckCount()

    }

    function war (){
        var warCards1P1 = playerOneDeck.pop();
        var warCards2P1 = playerOneDeck.pop();
        var warCards3P1 = playerOneDeck.pop();
        var warCards4P1 = playerOneDeck.pop();


         warCardsP2= playerTwoDeck.cards.slice(0,3);

        /* playerOneCardNumWar.innerHTML = warCardsP1;
         playerTwoCardNumWar.innerHTML = warCardsP2;*/

         document.getElementById("warCard1").style.display = "flex";
         document.getElementById("warCard2").style.display = "flex";

         playerOneCardNumWar.appendChild(warCards1P1.getHTML())
         playerOneCardNumWar.appendChild(warCards2P1.getHTML())
         playerOneCardNumWar.appendChild(warCards3P1.getHTML())
         playerOneCardNumWar.appendChild(warCards4P1.getHTML())


         
         playerTwoCardNumWar.appendChild(warCardsP2.getHTML())
    }

    function updateDeckCount() {
        playerOneDeckElement.innerText = "Player One Score: " + playerOneDeck.numberOfCards
        playerTwoDeckElement.innerText = "Player Two Score: " + playerTwoDeck.numberOfCards

    }
    
    

    
      
