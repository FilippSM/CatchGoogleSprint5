import { GameStatuses } from "./GAME_STATUSES"

export class Game {
    #settings = {
        gridSize: {
            columsCount: 4,
            rowsCount: 4
        }
    }


    #status = GameStatuses.PENDING

    #googlePosition = {
        x: 0, y: 0
    }

    get status() {
        return this.#status
    }

    get googlePosition() {
        return this.#googlePosition
    }

    get gridSize() {
        return this.#settings.gridSize
    }

    start () {
        this.#status = GameStatuses.IN_PROGRESS;
        // Инициализируем googlePosition случайным образом
      /*   this.#googlePosition = {} */
    }
}
