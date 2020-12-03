import Rectangle from "./rectangle";

export default class Bricks extends Rectangle {
    #points;

    constructor(points, colorFiller, colorBorder, isActive, width, height, x, y) {
        super(colorFiller, colorBorder, isActive, width, height, x, y);

        this.#points = points;
    }

    get points() {
        return this.#points;
    }

    set points(newPoints) {
        this.#points = newPoints;
    }

    reset() {
        super.isActive = true;
    }

    draw(ctx) {
        super.draw(ctx);
    }
}
