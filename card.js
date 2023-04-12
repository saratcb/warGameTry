
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

let player1Card, player2Card

let playerOneDeck, playerTwoDeck, inRound, stop 
var warCards1P1, warCards2P1, warCards3P1, warCards4P1, warCards1P2, warCards2P2, warCards3P2, warCards4P2

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
        playerOneCardNumWar.innerHTML = ""
        playerTwoCardNumWar.innerHTML = ""

        updateDeckCount()
    }

    function flipCards(){
        document.getElementById("warP1").style.display = "none";
         document.getElementById("warP2").style.display = "none";

        inRound = true

        player1Card = playerOneDeck.pop()
        player2Card = playerTwoDeck.pop()

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

    function checkWinnerWar(player1WarCard, player2WarCard, war2,war3,war4,war5,war6,war7){

        let p1Card = CARD_VALUE_MAP[player1WarCard.value]
        let p2Card = CARD_VALUE_MAP[player2WarCard.value]

        
        if (p1Card>p2Card){
            playerOneDeck.push(player1Card)
            playerOneDeck.push(player2Card) 
            playerOneDeck.push(player1WarCard)
            playerOneDeck.push(player2WarCard)
            playerOneDeck.push(war2)
            playerOneDeck.push(war3)
            playerOneDeck.push(war4)
            playerOneDeck.push(war5)
            playerOneDeck.push(war6)
            playerOneDeck.push(war7)
        }

        else if (p1Card<p2Card){
            playerTwoDeck.push(player1Card)
            playerTwoDeck.push(player2Card)
            playerTwoDeck.push(player1WarCard)
            playerTwoDeck.push(player2WarCard)
            playerTwoDeck.push(war2)
            playerTwoDeck.push(war3)
            playerTwoDeck.push(war4)
            playerTwoDeck.push(war5)
            playerTwoDeck.push(war6)
            playerTwoDeck.push(war7)
        } 

        else {
            console.log("war again");
        }
        
        updateDeckCount()

    }

    function war (){
        warCards1P1 = playerOneDeck.pop(); 
        warCards2P1 = playerOneDeck.pop(); 
        warCards3P1 = playerOneDeck.pop();
        warCards4P1 = playerOneDeck.pop();

        warCards1P2 = playerTwoDeck.pop(); 
        warCards2P2 = playerTwoDeck.pop(); 
        warCards3P2 = playerTwoDeck.pop();
        warCards4P2 = playerTwoDeck.pop();

         
        
        /* p1WarCards = p1Deck.splice(0, 3);
        warCardsP2= playerTwoDeck.cards.slice(0,3);
        ;*/

         document.getElementById("warP1").style.display = "flex";
         document.getElementById("warP2").style.display = "flex";


         playerOneCardNumWar.appendChild(warCards1P1.getHTML());
         playerTwoCardNumWar.appendChild(warCards1P2.getHTML());
        
        checkWinnerWar(warCards1P1,warCards1P2, warCards2P1,warCards2P2,warCards3P1,warCards3P2,warCards4P1,warCards4P2);

         
    }


    function updateDeckCount() {
        playerOneDeckElement.innerText = "Player One Score: " + playerOneDeck.numberOfCards
        playerTwoDeckElement.innerText = "Player Two Score: " + playerTwoDeck.numberOfCards

    }
    
    

    
      
