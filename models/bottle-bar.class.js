/**
 * Represents the bottle status bar.
 * Inherits from {@link DrawableObject}.
 */
class Bottlebar extends DrawableObject {
    /**
     * Array of images for the bottle status.
     * @type {string[]}
     */
    imagesBottle = ImagesHub.statusbar.bottle;

    /**
     * Current fill level in percent.
     * @type {number}
     */
    percentage = 0;

    /**
     * X position of the status bar.
     * @type {number}
     */
    x = 20;

    /**
     * Y position of the status bar.
     * @type {number}
     */
    y = 80;

    /**
     * Width of the status bar.
     * @type {number}
     */
    width = 200;

    /**
     * Height of the status bar.
     * @type {number}
     */
    height = 60;

    /**
     * Creates a new bottle status bar and loads the images.
     */
    constructor() {
        super();
        this.loadImages(this.imagesBottle);
        this.setPercentage(0);
    }

    /**
     * Sets the bottle fill level and updates the displayed image.
     * @param {number} percentage - New percentage (0-5)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesBottle[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the current fill level.
     * @returns {number} Index of the image in the imagesBottle array
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
}

