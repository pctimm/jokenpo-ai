export function chooseOption(lastRound) {
    // lastRound.status = 'ai', 'player' or 'draw'
    // lastRound.ai = 'roc', 'pap', 'sci'
    // lastRound.player = 'roc', 'pap', 'sci'
    if (lastRound.status == 'draw' || lastRound.status == null) {
        const choiceNumber = Math.round(Math.random() * 3)
        return codeToGameChoice(choiceNumber)
    }
    else if (lastRound.status == 'ai') {
        return lastRound.player
    }
    else if (lastRound.status == 'player') {
        if (lastRound.player == 'roc') { // ai played sci and lost
            return 'pap'
        }
        else if (lastRound.player == 'pap') { // ai played roc and lost
            return 'sci'
        }
        else { // ai played paper and lost
            return 'roc'
        }
    }
}

function codeToGameChoice(number) {
    if (number == 1) {
        return 'sci'
    }
    else if (number == 2) {
        return 'pap'
    }
    else if (number == 3) {
        return 'roc'
    }
    return 'sci' // ?
}