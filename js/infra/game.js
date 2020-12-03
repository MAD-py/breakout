export default class Game {
    #user;
    #level;

    constructor(user, level) {
        this.#user = user;
        this.#level = level || 1;
    }

    get user() {
        return this.#user;
    }

    get level() {
        return this.#level;
    }

    set user(newUser) {
        this.#user = newUser;
    }

    set level(newLevel) {
        this.#level = newLevel;
    }

    saveGame() {
        this.#user.savePositions();
        localStorage.setItem(user.name + "Game", this.#level);
    }

    removeGame() {
        this.#user.removePositions();
        localStorage.removeItem(user.name + "Game");
    }

    static loadGame(user) {
        let level = localStorage.getItem(user.name + "Game");

        if (level) {
            return Game(user, level);
        }
        return Game(user);
    }
}
