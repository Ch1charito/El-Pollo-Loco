/**
 * Represents the Endboss health bar in the game.
 * Extends DrawableObject to display images based on health percentage.
 */
class Endbossbar extends DrawableObject {
    /** @type {string[]} Array of image paths for the endboss health bar */
    imagesEndbossbar = ImagesHub.statusbar.endboss;

    /** @type {number} Current health percentage of the endboss */
    percentage = 100;

    /** @type {number} Horizontal position on the canvas */
    x = 490;

    /** @type {number} Vertical position on the canvas */
    y = 0;

    /** @type {number} Width of the health bar (set dynamically) */
    width = 0;

    /** @type {number} Height of the health bar (set dynamically) */
    height = 0;

    constructor() {
        super();
        this.loadImages(this.imagesEndbossbar);
        this.setPercentage(100);
    }

    /**
     * Updates the health bar to reflect the current percentage.
     * @param {number} percentage - Current health percentage.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesEndbossbar[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the correct image index based on the current health percentage.
     * @returns {number} Index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage >= 80) {
            return 5;
        } else if (this.percentage >= 60) {
            return 4;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Sets the size of the endboss bar for display on the canvas.
     */
    showEndbossBar() {
        this.width = 200;
        this.height = 60;
    }
}
