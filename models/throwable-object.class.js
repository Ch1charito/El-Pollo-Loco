/**
 * Represents a throwable object in the game, like a salsa bottle.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
    //#region attributes

    /** @type {Object} Collision offsets for precise hit detection */
    offSett = {
        top: 10,
        right: 30,
        bottom: 10,
        left: 30
    };

    /** @type {boolean} Flag indicating whether the object has hit something */
    hasHit = false;

    /** @type {Array<string>} Image paths for the bottle rotation animation */
    imagesBottleRotation = ImagesHub.bottle.rotation;

    /** @type {Array<string>} Image paths for the splash animation */
    imagesSplash = ImagesHub.bottle.splash;

    /** @type {boolean} Indicates if the object is broken */
    isBroken = false;

    /** @type {number} Height of the object */
    height = 60;

    /** @type {number} Width of the object */
    width = 50;

    //#endregion

    /**
     * Creates a new throwable object at a specified position.
     * @param {number} x - The x-coordinate of the object
     * @param {number} y - The y-coordinate of the object
     */
    constructor(x, y) {
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png'); 
        this.x = x;
        this.y = y;
        this.loadImages(this.imagesBottleRotation);
        this.loadImages(this.imagesSplash);
        this.throw();
    }

    /**
     * Initiates the throwing action, applies gravity, and starts movement and rotation animations.
     */
    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.animationIntervalId = IntervalHub.startInterval(() => {
            if (!this.isBroken) {
                this.playAnimation(this.imagesBottleRotation);
            }
        }, 1000 / 60);
        this.movementIntervalId = IntervalHub.startInterval(() => {
            if (!this.isBroken) {
                this.x += 10;
            }
        }, 25);
    }

    /**
     * Marks the object as broken and plays the splash animation.
     */
    break() {
        this.isBroken = true;
        this.playAnimation(this.imagesSplash);
    }
}
