let password = document.getElementById("password")
let numPassword = document.getElementById("num-password")
let charPassword = document.getElementById("char-password")



/* Numbers Button */
function genNumPassword(){
  let passwordLength = 15
  let numPassword = ""

  for(let i = 0; i <= passwordLength; i++){
    let characters = "0123456789"
    let randomNumber = Math.floor(Math.random() * characters.length)
    numPassword += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("num-password").value = numPassword
}

function copyNumPassword(){
  let copyText = document.getElementById("num-password")
  copyText.select()
  copyText.setSelectionRange(0,999)
  document.execCommand("copy")
  window.alert("copied")
}




/* Characters Button */
function genCharPassword(){
  let passwordLength = 15
  let charPassword = ""

  for(let i = 0; i <= passwordLength; i++){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let randomNumber = Math.floor(Math.random() * characters.length)
    charPassword += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("char-password").value = charPassword
}

function copyCharPassword(){
  let copyText = document.getElementById("char-password")
  copyText.select()
  copyText.setSelectionRange(0,999)
  document.execCommand("copy")
  window.alert("copied")
}




/* Numbers and Characters Button */
function genPassword(){
  let passwordLength = 15
  let password = ""

  for(let i = 0; i <= passwordLength; i++){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~,`,!@#$%^&*()_-+={[}]|:;<>.?/"
    let randomNumber = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("password").value = password
}

function copyPassword(){
  let copyText = document.getElementById("password")
  copyText.select()
  copyText.setSelectionRange(0,999)
  document.execCommand("copy")
  window.alert("copied")
}