let playerVictories = 0
let aiVictories = 0

// Reading input configuration
import PromptSync from "prompt-sync";
import * as ai from "./ai.js"
const prompt = PromptSync();
let lastRound = {
    status: null,
    ai: null,
    player: null
}
showTitle()
showInstructions()

console.log("And... the match begins!!!\n")

while (true) { // Looping the match
    showScore(aiVictories, playerVictories)
    const uChoice = prompt("your choice >>> ")
    console.log('')

    // Validating user input
    if (uChoice !== 'sci' && uChoice !== 'pap' && uChoice !== 'roc') {
        if (uChoice == "help") showInstructions()
        else console.log("[!] Invalid choice. Try again or [help].")
        continue
    }

    const aiChoice = ai.chooseOption(lastRound)
    console.log(choiceToEmoji(uChoice) + " | you   VS.   ai| " + choiceToEmoji(aiChoice))
    const winner = calculateWinner(uChoice, aiChoice)
    lastRound = setLastRound(winner, uChoice, aiChoice)
    console.log(lastRound)
    if (winner == 'player') {
        playerVictories ++
        console.log(`You won that one!\n`)
    }
    else if (winner == 'ai') {
        aiVictories ++
        console.log(`Gerson won that one!\n`)
    }
    else {
        console.log("It was a draw. hmmm...")
    }
}

function setLastRound(s, p, a) {
    const newLastRound = {
        status: s,
        player: p,
        ai: a
    }
    return newLastRound
}
function showTitle() {
    console.log("-=-=- Welcome to another game of JAN-KEN-PON! -=-=--")
    console.log("You are playing with my brand new A.I. neat machine.\n" +
                "And it is called 'Gerson'.\n")
}
function showInstructions() {
    console.log(">> INSTRUCTIONS <<\n" +
    "Write [sci] for Scissors;\n" +
    "Write [pap] for Paper;\n" +
    "Write [roc] for Rock;\n" +
    "Type [help] for showing this instructions again.\n\n")
}
function showScore(aiWins, pWins) {
    console.log("GERSON: " + aiWins)
    console.log("YOU: " + pWins)
    console.log("-=-=-=--=-=-=-=-=--")
}
function calculateWinner(playerC, aiC) {
    // player wins
    if (playerC == 'roc' && aiC == 'sci') return 'player'
    else if (playerC == 'sci' && aiC == 'pap') return 'player'
    else if (playerC == 'pap' && aiC == 'roc') return 'player'
    // ai wins
    else if (playerC == 'roc' && aiC == 'pap') return 'ai'
    else if (playerC == 'sci' && aiC == 'roc') return 'ai'
    else if (playerC == 'pap' && aiC == 'sci') return 'ai'
    else return 'draw'
}
function choiceToEmoji(choice) {
    const rock = "🪨"
    const scissors = "✂️"
    const paper = "📜"
    if (choice == 'roc') return rock
    else if (choice == 'sci') return scissors
    else return paper
}