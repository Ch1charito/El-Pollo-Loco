/**
 * Class representing a normal chicken enemy.
 * Extends MovableObject and handles movement, animation, and death.
 */
class Chicken extends MovableObject {
    // #region attributes
    /** 
     * Vertical position of the chicken on the canvas.
     * @type {number} 
     */
    y = 360;

    /** 
     * Height of the chicken sprite.
     * @type {number} 
     */
    height = 70;

    /** 
     * Width of the chicken sprite.
     * @type {number} 
     */
    width = 70;

    /** 
     * Array of image paths for walking animation.
     * @type {string[]} 
     */
    imagesWalking = ImagesHub.chicken.walking;

    /** 
     * Array of image paths for dead animation.
     * @type {string[]} 
     */
    imagesDead = ImagesHub.chicken.dead;

    /** 
     * Offset for collision detection (top, right, bottom, left).
     * @type {{top: number, right: number, bottom: number, left: number}} 
     */
    offSett = {                                     
        top : 10,
        right : 10,
        bottom : 10,
        left : 10
    };

    /** 
     * Current energy/health of the chicken.
     * @type {number} 
     */
    energy = 25;
    // #endregion

    /**
     * Creates a new Chicken instance, loads images, sets random x position and speed, and starts animation.
     */
    constructor() {                              
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');                    
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 800 + Math.random() * 500;     
        this.speed = 0.15 + Math.random() * 0.25;                                     
        this.animate();
    }

    // #region methods

    /**
     * Starts movement and animation intervals.
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
     * Animates the chicken depending on its energy.
     * Plays walking animation if alive, dead animation if energy <= 0.
     * Also plays the death sound once when the chicken dies.
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
     * Handles chicken death:
     * stops all intervals, sets speed to 0, and marks for deletion.
     */
    die() {
        clearInterval(this.moveIntervalId);
        clearInterval(this.animationIntervalId);
        this.speed = 0;
        this.markedForDeletion = true;
    }
    // #endregion
}
