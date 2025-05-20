import { Game } from "./game.js"

describe('game', () => {
    it('should say hello world', () => {
        const game = new Game()
        expect(game.hello()).toBe('hello world')
    })
})