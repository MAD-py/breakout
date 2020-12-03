import Vertice from "./vertice";


export default class Circle extends Vertice {
    #colorFiller;
    #colorBorder;
    #speedX;
    #speedY;
    #radius;
    
    constructor(colorFiller, colorBorder, speedX, speedY, radius, x, y) {
        super(x, y);

        this.#colorFiller = colorFiller;
        this.#colorBorder = colorBorder;
        this.#speedX = speedX;
        this.#speedY = speedY;
        this.#radius = radius;
    }

    get colorFiller() {
        return this.#colorFiller;
    }

    get colorBorder() {
        return this.#colorBorder;
    }

    get speedX() {
        return this.#speedX;
    }

    get speedY() {
        return this.#speedY;
    }

    get radius() {
        return this.#radius;
    }

    set colorFiller(newColorFiller) {
        this.#colorFiller = newColorFiller;
    }

    set colorBorder(newColorBorder) {
        this.#colorBorder = newColorBorder;
    }

    set speedX(newSpeed) {
        this.#speedX = newSpeed;
    }

    set speedY(newSpeed) {
        this.#speedY = newSpeed;
    }

    set radius(newRadius) {
        this.#radius = newRadius;
    }

    move(canvas) {
        let new_x = super.x + this.#speedX;
        let new_y = super.y + this.#speedY;

        if (new_x >= canvas.width || new_x <= 0) {
            this.#speedX *= -1;
        }
        if (new_y >= canvas.height) {
            this.#speedY *= -1;
        } else if (new_y <= 0) {
            this.#speedX = 0;
            this.#speedY = 0;
        }

        super.move(canvas, this.#speedX, this.#speedY);
    }

    draw(ctx) {
        ctx.strokeStyle = this.#colorBorder;
        ctx.fillStyle = this.#colorFiller;
        ctx.arc(super.x, super.y, this.#radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    #collision(rectangle) {
        let distX = Math.abs(super.x - rectangle.x - rectangle.width/2);
        let distY = Math.abs(super.y - rectangle.y - rectangle.heigth/2);
        
        let dx = distX - rectangle.width/2;
        let dy = distY - rectangle.heigth/2;

        if (
            distY <= (rectangle.heigth/2) ||
            distX <= (rectangle.width/2) ||
            (dx * dx + dy * dy <= (this.#r * this.#r))
        ) {
            return true;
        }
        return false;
    }

    collisions(bricks, userBar) {
        let collision;

        for (brick in bricks) {
            collision = this.#collision(brick);
            if (collision) {
                brick.isActive = false;
            }
        }

        collision = this.#collision(userBar);
        if (collision) {
             this.#speedX *= -1;
             this.#speedY *= -1;
        }
    }
}
