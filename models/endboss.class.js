/**
 * Represents the Endboss enemy in the game.
 * Extends MovableObject to allow movement and animations.
 */
class Endboss extends MovableObject {
    //#region attributes
    /** @type {number} Height of the endboss */
    height = 400;

    /** @type {number} Width of the endboss */
    width = 250;

    /** @type {number} Vertical position on the canvas */
    y = 55;

    /** @type {{top:number, right:number, bottom:number, left:number}} Collision offsets */
    offSett = {
        top: 80,
        right: 10,
        bottom: 15,
        left: 10
    };

    /** @type {number} Movement speed */
    speed = 1;

    /** @type {number} Health of the endboss */
    energy = 100;

    /** @type {number} Horizontal position on the canvas */
    x = 2500;

    /** @type {string[]} Array of image paths for alert animation */
    imagesAlert = ImagesHub.endboss.alert;

    /** @type {string[]} Array of image paths for dead animation */
    imagesDead = ImagesHub.endboss.dead;

    /** @type {string[]} Array of image paths for hurt animation */
    imagesHurt = ImagesHub.endboss.hurt;

    /** @type {string[]} Array of image paths for walking animation */
    imagesWalking = ImagesHub.endboss.walking;

    /** @type {boolean} Flag if the endboss is currently hurt */
    isHurt = false;

    /** @type {boolean} Flag if the endboss is moving left */
    isMovingLeft = false;
    //#endregion

    constructor() {
        super().loadImage(this.imagesAlert[0]);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesWalking);
        this.animate();
    }

    //#region methods
    /**
     * Starts the animation loop for the endboss.
     */
    animate() {
        this.animationIntervalId = IntervalHub.startInterval(() => {
            this.animateImages();
        }, 200);
    }

    /**
     * Animates the endboss based on its current state.
     */
    animateImages = () => {
        if (this.energy <= 0) {
            this.playAnimation(this.imagesDead);
        } else if (this.isHurt) {
            this.playAnimation(this.imagesHurt);
        } else if (this.isMovingLeft) {
            this.playAnimation(this.imagesWalking);
        } else {
            this.playAnimation(this.imagesAlert);
        }
    }

    /**
     * Applies damage to the endboss and handles state changes.
     * @param {number} damage - Amount of damage to apply.
     */
    hitEnemy(damage) {
        super.hitEnemy(damage);
        if (this.energy <= 0) {
            this.die();
        } else {
            this.isHurt = true;
            setTimeout(() => {
                this.isHurt = false;
            }, 500);
            if (!this.isMovingLeft && this.energy < 100) {
                this.isMovingLeft = true;
                this.startMovingLeft();
            }
        }
    }

    /**
     * Handles the death of the endboss.
     */
    die() {
        this.markedForDeletion = true;
        this.speed = 0;
    }

    /**
     * Starts moving the endboss to the left.
     */
    startMovingLeft() {
        this.moveIntervalId = IntervalHub.startInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
    //#endregion
}
