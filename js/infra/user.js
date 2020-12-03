export default class User {
    #name;
    #lives;
    #points;

    constructor(name, points) {
        this.#name = name;
        this.#lives = 3;
        this.#points = points || 0;
    }

    get name() {
        return this.#name;
    }

    get lives() {
        return this.#lives;
    }

    get points() {
        return this.#points;
    }

    set name(newName) {
        this.#name = newName;
    }

    set lives(newLives) {
        this.#lives = newLives;
    }

    set points(newPoints) {
        this.#points = newPoints;
    }

    savePoints() {
        localStorage.setItem(this.#name, this.#points);
    }

    removePoints() {
        localStorage.removeItem(this.#name);
    }

    static loadPoints(name) {
        let points = localStorage.getItem(name);

        if (points) {
            return User(name, points);
        }
        return User(name);
    }
}
