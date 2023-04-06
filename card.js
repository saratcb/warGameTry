function createCard(valor, naipe) {
    const element = document.getElementById("root");
    console.log(element)
    const card = `
    <div>
        <h1>${valor}</h1>
        <h1>${naipe}</h1>
    </div>`;
    element.innerHTML = card;
}

createCard("A","paus")