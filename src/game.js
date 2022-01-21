let playerVictories = 0
let aiVictories = 0

console.log("Welcome to another game of JAN-KEN-PON!")
    const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function readPlayerInput() {
    return new Promise((resolve, reject) => {
        const input = rl.question(">>> ", function (answer) {
            rl.close();
        });
        
        resolve(input)
    })
}
const escolha = readPlayerInput()
console.log("A sua escolha foi " + escolha)
// function readPlay()