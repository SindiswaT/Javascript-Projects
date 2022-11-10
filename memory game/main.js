const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.getElementById("result")
let chosenCards = []
let chosenIds = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", cardFlip)
        gridDisplay.append(card)
    }
}
createBoard()

function matchCheck(){
    const cards = document.querySelectorAll("img")
    const optionOneId = chosenIds[0]
    const optionTwoId = chosenIds[1]

    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("You clicked the same image!")
    }

    if(chosenCards[0] == chosenCards[1]){
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", cardFlip)
        cards[optionTwoId].removeEventListener("click", cardFlip)
        cardsWon.push(chosenCards)
    }else{
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Sorry try again")
    }
    resultDisplay.textContent = cardsWon.length
    chosenCards = []
    chosenIds = []

    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.textContent = "Congratulations! You found them all"
    }

}

function cardFlip(){
    let cardId = this.getAttribute("data-id")
    chosenCards.push(cardArray[cardId].name)
    this.setAttribute("src", cardArray[cardId].img)
    chosenIds.push(cardId)

    if(chosenCards.length === 2){
        setTimeout(matchCheck, 500)
    }

}