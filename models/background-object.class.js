/**
 * Represents a static background object (e.g., landscape, sky).
 * Inherits from {@link MovableObject}, but does not move.
 */
class BackgroundObject extends MovableObject {
    /**
     * Width of the background object in pixels.
     * @type {number}
     */
    width = 720;

    /**
     * Height of the background object in pixels.
     * @type {number}
     */
    height = 480;

    /**
     * Creates a new background object.
     * 
     * @param {string} imagePath - Path to the image used as background.
     * @param {number} x - X position where the background image will be placed.
     * @param {number} [y] - Y position (defaults to placing the image at the bottom of the canvas).
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}

