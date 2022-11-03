const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];

let passwordLength = 12
let password = ""

document.getElementById("pwOne").value = password
document.getElementById("pwTwo").value = password

document.getElementById("btn-pw").addEventListener("click", generatePassword)

function generatePassword(){
  for(let i = 0; i < passwordLength; i++){
    let randomPwOne = Math.floor(Math.random() * characters.length)
    let randomPwTwo = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomPwOne, randomPwOne + 1, randomPwTwo, randomPwTwo + 1)
  }
       
}