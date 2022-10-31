let count = 0
let countG = 0
let hScoreNum = document.getElementById("h-score-num")
let gScoreNum = document.getElementById("g-score-num")



function addOne(){
    count += 1
    hScoreNum.textContent = count
}
function addTwo(){
    count += 2
    hScoreNum.textContent = count
}
function addThree(){
    count += 3
    hScoreNum.textContent = count
}



function addOneG(){
    countG += 1
    gScoreNum.textContent = countG
}
function addTwoG(){
    countG += 2
    gScoreNum.textContent = countG
}
function addThreeG(){
    countG += 3
    gScoreNum.textContent = countG
}

