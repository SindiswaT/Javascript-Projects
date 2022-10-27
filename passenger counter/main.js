let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count = count +1  // also written as: count += 1
    countEl.textContent = count 
}

function save(){
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
