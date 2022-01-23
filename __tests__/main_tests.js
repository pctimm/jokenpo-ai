// import * as bot from '../src/ai.js'
import * as game from '../src/game.js'


describe('AI string manipulation', function() {
    it('Status code must be 0 for draw or null', function() {
        expect(game.getStatusCode('draw')).toBe(0)
        expect(game.getStatusCode(null)).toBe(0)
    })
})