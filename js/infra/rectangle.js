import Vertice from "./vertice";

export default class Rectangle extends Vertice {
    #colorFiller;
    #colorBorder;
    #isActive;
    #width;
    #height;

    constructor(colorFiller, colorBorder, isActive, width, height, x, y) {
        super(x, y);
        
        this.#colorFiller = colorFiller;
        this.#colorBorder = colorBorder;
        this.#isActive = isActive;
        this.#width = width;
        this.#height = height;
    }

    get colorFiller() {
        return this.#colorFiller;
    }

    get colorBorder() {
        return this.#colorBorder;
    }

    get isActive() {
        return this.#isActive;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    set colorFiller(newColorFiller) {
        this.#colorFiller = newColorFiller;
    }

    set colorBorder(newColorBorder) {
        this.#colorBorder = newColorBorder;
    }
    
    set isActive(newIsActive) {
        this.#isActive = newIsActive;
    }

    set width(newWidth) {
        this.#width = newWidth;
    }

    set height(newHeight) {
        this.#height = newHeight;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.#colorBorder;
        ctx.fillStyle = this.#colorFiller;
        ctx.rect(super.x, super.y, this.#width, this.#height);
        ctx.closePath();
    }

    move(canvas, speedX, speedY) {
        super.move(canvas, speedX, speedY);
    }
}
