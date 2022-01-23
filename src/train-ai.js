/* Ideia: a ideia da lógica da AI: ela tenta adivinhar a próxima jogada do usuário
    baseado na jogada anterior.
    Entrada: vencedor jogada anterior, o que player e ai jogaram.
    Saída: uma jogada esperada do usuário.
    
    O QUE A AI FARIA: tentará vencer da jogada esperada do usuário.

    Padrão de inputs:
    status: 0: empate, 1: ai, 2: player
    tipodejogada: 1: sci, 2: pap, 3: roc
    saída em tipo de jogada.
*/
import * as brain from '../node_modules/brain.js/dist/brain.js'
import * as bot from '../src/ai.js'
import * as game from '../src/game.js'

const net = new brain.brain.NeuralNetwork()

// database
const data = [

]

export function getBrainData() {
    return data
}

export function pushBrainData(lastRound, userOutput) {
    const statusLR = game.getStatusCode(lastRound.status)
    
    const lastRoundObj = {
        "status": game.getStatusCode(lastRound.status),
        "ai": bot.gameChoiceToCode(lastRound.ai),
        "player": bot.gameChoiceToCode(lastRound.player)
    }

    const obj = {
        input: lastRoundObj,
        output: userOutput
    }
    data.push(obj)
    net.train(data)
}