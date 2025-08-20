/**
 * Class representing the coin status bar.
 * Extends DrawableObject and updates its image based on collected coins.
 */
class Coinbar extends DrawableObject {
    // #region attributes
    /**
     * Array of coin images for different percentages.
     * @type {string[]}
     */
    imagesCoin = ImagesHub.statusbar.coin;

    /**
     * Horizontal position of the coin bar on the canvas.
     * @type {number}
     */
    x = 20;

    /**
     * Vertical position of the coin bar on the canvas.
     * @type {number}
     */
    y = 40;

    /**
     * Width of the coin bar image.
     * @type {number}
     */
    width = 200;

    /**
     * Height of the coin bar image.
     * @type {number}
     */
    height = 60;

    /**
     * Current coin percentage (0–5).
     * @type {number}
     */
    percentage = 0;
    // #endregion

    /**
     * Creates a new Coinbar instance, loads coin images, and sets initial percentage.
     */
    constructor() {
        super();
        this.loadImages(this.imagesCoin); 
        this.setPercentage(0);
    }

    // #region methods

    /**
     * Updates the current percentage and sets the corresponding image.
     * @param {number} percentage - The current coin percentage (0–5)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesCoin[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the correct image index based on the current percentage.
     * @returns {number} Index of the image in imagesCoin array
     */
    resolveImageIndex() {
        if (this.percentage >= 5) {
            return 5;
        } else if (this.percentage >= 4) {
            return 4;
        } else if (this.percentage >= 3) {
            return 3;
        } else if (this.percentage >= 2) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
    // #endregion
}
