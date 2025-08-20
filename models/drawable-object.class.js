/**
 * Base class for all drawable objects in the game.
 * Handles image loading, caching, and drawing on the canvas.
 */
class DrawableObject {
    // #region attributes

    /** @type {HTMLImageElement} The current image displayed for this object */
    img;

    /** @type {Object.<string, HTMLImageElement>} Cache for preloaded images */
    imageCache = {};

    /** @type {number} Index of the current image in an animation sequence */
    currentImage = 0;

    /** @type {number} Horizontal position on the canvas */
    x = 120;

    /** @type {number} Vertical position on the canvas */
    y = 280;

    /** @type {number} Height of the object */
    height = 150;

    /** @type {number} Width of the object */
    width = 100;
    // #endregion

    // #region methods

    /**
     * Loads an image from the given path.
     * @param {string} path - Path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - Canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a transparent frame around the object (used for debugging).
     * Only applies to certain object types.
     * @param {CanvasRenderingContext2D} ctx - Canvas rendering context.
     */
    drawFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof Chicken ||
            this instanceof Endboss ||
            this instanceof ChickenSmall ||
            this instanceof Coin ||
            this instanceof SalsaBottle ||
            this instanceof ThrowableObject
        ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Draws the real collision frame based on offsets (used for debugging).
     * Only applies to certain object types.
     * @param {CanvasRenderingContext2D} ctx - Canvas rendering context.
     */
    drawRealFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Chicken ||
            this instanceof ChickenSmall ||
            this instanceof SalsaBottle ||
            this instanceof ThrowableObject
        ) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
            ctx.rect(
                this.x + this.offSett.left,
                this.y + this.offSett.top,
                this.width - this.offSett.left - this.offSett.right,
                this.height - this.offSett.top - this.offSett.bottom
            );
            ctx.stroke();
        }
    }

    /**
     * Loads multiple images and stores them in the image cache.
     * @param {string[]} arr - Array of image paths to preload.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    // #endregion
}
