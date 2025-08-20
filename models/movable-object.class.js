/**
 * Represents any drawable object that can move in the game world.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    //#region attributes

    /** @type {number} Horizontal movement speed */
    speed = 0.15;

    /** @type {boolean} Indicates if the object is facing the opposite direction */
    otherDirection = false;

    /** @type {number} Vertical speed for jumping or falling */
    speedY = 0;

    /** @type {number} Gravity/acceleration affecting vertical movement */
    acceleration = 2.5;

    /** @type {number} Current health or energy of the object */
    energy = 100;

    /** @type {number} Timestamp of the last hit received */
    lastHit = 0;

    //#endregion

    //#region methods

    /**
     * Checks if this object is colliding with another movable object.
     * @param {MovableObject} mo - Another movable object
     * @returns {boolean} True if collision occurs, false otherwise
     */
    isColliding(mo) {
        return this.x + this.offSett.left + this.width - this.offSett.right - this.offSett.left > mo.x + mo.offSett.left &&
               this.y + this.offSett.top + this.height - this.offSett.top - this.offSett.bottom > mo.y + mo.offSett.top &&
               this.x + this.offSett.left < mo.x + mo.offSett.left + mo.width - mo.offSett.left - mo.offSett.right &&
               this.y + this.offSett.top < mo.y + mo.offSett.top + mo.height - mo.offSett.top - mo.offSett.bottom;
    }

    /**
     * Reduces energy by 5 points when hit.
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) this.energy = 0;
        else this.lastHit = new Date().getTime();
    }

    /**
     * Checks if the object is dead (energy is 0).
     * @returns {boolean}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Checks if the object is recently hurt (within 1 second).
     * @returns {boolean}
     */
    isHurt() {
        let timePassed = (new Date().getTime() - this.lastHit) / 1000;
        return timePassed < 1;
    }

    /**
     * Reduces energy by a given damage value and dies if energy <= 0.
     * @param {number} damage
     */
    hitEnemy(damage) {
        this.energy -= damage;
        if (this.energy <= 0) this.die();
    }

    /**
     * Marks the object for deletion (used when dead).
     */
    die() {
        this.markedForDeletion = true;
    }

    /**
     * Plays an animation from an array of images.
     * @param {Array<string>} images - Array of image paths
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right by its speed.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left by its speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Applies gravity to the object, affecting vertical movement.
     */
    applyGravity() {
        IntervalHub.startInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     * @returns {boolean}
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) return true;
        else return this.y < 180;
    }

    /**
     * Makes the object jump by setting an initial upward speed.
     */
    jump() {
        this.speedY = 30;
    }

    //#endregion
}
