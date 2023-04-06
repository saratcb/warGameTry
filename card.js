

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