/**
 * Represents the health bar of the player.
 * Extends DrawableObject to allow image rendering on the canvas.
 */
class Healthbar extends DrawableObject {
    //#region attributes
    /** @type {string[]} Array of image paths for the health bar */
    imagesHealth = ImagesHub.statusbar.health;

    /** @type {number} Current health percentage */
    percentage = 100;

    /** @type {number} Width of the health bar */
    width = 200;

    /** @type {number} Height of the health bar */
    height = 60;

    /** @type {number} X position on the canvas */
    x = 20;

    /** @type {number} Y position on the canvas */
    y = 0;
    //#endregion

    constructor() {
        super();
        this.loadImages(this.imagesHealth);
        this.setPercentage(100);
    }

    /**
     * Updates the health bar to reflect the given percentage.
     * @param {number} percentage - The current health percentage (0-100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesHealth[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the correct image index for the current health percentage.
     * @returns {number} Index of the health bar image to display.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
