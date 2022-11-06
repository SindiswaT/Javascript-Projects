let password = document.getElementById("password")

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
  let copyText =document.getElementById("password")
  copyText.select()
  copyText.setSelectionRange(0,999)
  document.execCommand("copy")
}