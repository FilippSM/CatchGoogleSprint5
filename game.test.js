import { Game } from "./game.js"
import { GameStatuses } from "./GAME_STATUSES.js"

describe('game', () => {
    it('should have Pending status after creating', () => {
        const game = new Game()
        expect(game.status).toBe(GameStatuses.PENDING)
    })
})