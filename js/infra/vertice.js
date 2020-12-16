export default class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    set x(x) {
        this.#x = x;
    }

    set y(y) {
        this.#y = y;
    }

    move(canvas, vx, vy, width) {
        let new_x = this.#x + vx;
        let new_y = this.#y + vy;
        if (
            new_x + width <= canvas.width &&
            new_x >= 0 && 
            new_y <= canvas.height &&
            new_y >= 0
        ) {
            this.#x += vx;
            this.#y += vy;
        } else if (new_x + width > canvas.width) {
            this.#x = canvas.width - width;
        } else if (new_x < 0) {
            this.#x = 0;
        } else if (new_y > canvas.height) {
            this.#y = canvas.height;
        } else if (new_y < 0) {
            this.#y = 0;
        }
    }
}
