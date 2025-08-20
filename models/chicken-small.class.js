/**
 * Small chicken enemy that moves left and can be killed by the player.
 * Extends MovableObject.
 */
class ChickenSmall extends MovableObject {
    // #region attributes
    /** @type {number} Y position of the small chicken */
    y = 385;

    /** @type {number} Height of the small chicken */
    height = 40;

    /** @type {number} Width of the small chicken */
    width = 40;

    /** @type {string[]} Array of walking sprite image paths */
    imagesWalking = ImagesHub.smallChicken.walking;

    /** @type {string[]} Array of dead sprite image paths */
    imagesDead = ImagesHub.smallChicken.dead;

    /** @type {{top:number, right:number, bottom:number, left:number}} Collision offset for hitbox */
    offSett = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    /** @type {number} Initial energy of the small chicken */
    energy = 25;
    // #endregion

    /**
     * Creates a new Small Chicken instance, initializes position, speed, and animations.
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);

        /** @type {number} Initial X position (randomized) */
        this.x = 800 + Math.random() * 500;

        /** @type {number} Movement speed (randomized) */
        this.speed = 0.50 + Math.random() * 0.25;

        this.animate();
    }

    // #region methods
    /**
     * Starts the movement and animation intervals for the chicken.
     */
    animate() {
        this.moveIntervalId = IntervalHub.startInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.animationIntervalId = IntervalHub.startInterval(() => {
            this.animateImages();
        }, 200);
    }

    /**
     * Handles which animation to play depending on the chicken's energy.
     * Plays walking animation when alive and dead animation when energy <= 0.
     */
    animateImages = () => {
        if (this.energy <= 0) {
            this.playAnimation(this.imagesDead);
            if (!this.isDeadSoundPlayed) {
                Soundhub.playSound(Soundhub.chickenDead);
                this.isDeadSoundPlayed = true;
            }
        } else {
            this.playAnimation(this.imagesWalking);
        }
    }

    /**
     * Stops all movement and animation, marks the chicken for deletion.
     */
    die() {
        clearInterval(this.moveIntervalId);
        clearInterval(this.animationIntervalId);
        this.speed = 0;
        this.markedForDeletion = true;
    }
    // #endregion
}
