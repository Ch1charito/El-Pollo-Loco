/**
 * Class representing a cloud in the background.
 * Extends MovableObject and handles basic movement.
 */
class Cloud extends MovableObject {
    // #region attributes
    /**
     * Vertical position of the cloud on the canvas.
     * @type {number}
     */
    y = 20;

    /**
     * Width of the cloud image.
     * @type {number}
     */
    width = 500;

    /**
     * Height of the cloud image.
     * @type {number}
     */
    height = 250;
    // #endregion

    /**
     * Creates a new Cloud instance, loads the cloud image, sets a random x position, and starts movement.
     */
    constructor() {                              
        super().loadImage('img/5_background/layers/4_clouds/1.png');                    
        this.x = Math.random() * 500;                                                   
        this.animate();
    }

    // #region methods

    /**
     * Starts cloud movement to the left.
     * Clouds do not animate frames, only move horizontally.
     */
    animate() {                                                                          
        this.moveLeft();                                                                  
    }
    // #endregion
}
