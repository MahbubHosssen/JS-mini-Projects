const input = document.querySelector("#input")
const generateBtn = document.querySelector(".generate-btn")
const copyBtn = document.querySelector(".copy-btn")

const char = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbols = " !#$%&()*+-./:;<=>?@[]^_{|}~";
const all = char + number + symbols + char.toUpperCase()

function createPassword() {
    let password = "";
    password += char[Math.floor(Math.random() * char.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    password += char[Math.floor(Math.random() * char.length)].toUpperCase()

    

    while(12 > password.length){
        password += all[Math.floor(Math.random() * all.length)]
    }

    return password
}



generateBtn.addEventListener("click",() => {
    // const random = 
    input.value = createPassword();
    // console.log(random)
})
copyBtn.addEventListener("click", () => {
    input.select()
    document.execCommand("copy")
    alert("Copy Done")
})