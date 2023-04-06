
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

const computerCardSlot = document.querySelector(".playerOneCardNum")
const playerCardSlot = document.querySelector(".playerTwoCardNum")
/*const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")*/


const deck = new Deck();

deck.shuffle();

const 


function createCardplayer1() {

    const cardValue = "9";
    const classCard = "card card--heartRed"

    const element = document.getElementById("playerOneCardNum");
    
    const card = `
    <div>
    <section class="${classCard}" value="${cardValue}"></section>
    </div>`;

    element.innerHTML = card;
 
}

function createCardplayer2() {

    const cardValue = "10";
    const classCard = "card card--spadeBlack"

    const element = document.getElementById("playerTwoCardNum");
    
    const card = `
    <div>
    <section class="${classCard}" value="${cardValue}"></section>
    </div>`;

    element.innerHTML = card;
   
}



createCardplayer1()
createCardplayer2()