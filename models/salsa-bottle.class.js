/**
 * Represents a salsa bottle object in the game world.
 * @extends DrawableObject
 */
class SalsaBottle extends DrawableObject {
    //#region attributes

    /** @type {Object} Collision offsets for more precise hit detection */
    offSett = {
        top: 20,
        right: 35,
        bottom: 15,
        left: 35
    };

    /** @type {number} Width of the salsa bottle */
    width = 100;

    /** @type {number} Height of the salsa bottle */
    height = 100;

    //#endregion

    /**
     * Creates a new SalsaBottle at a specified position.
     * @param {number} x - The x-coordinate of the bottle
     * @param {number} y - The y-coordinate of the bottle
     */
    constructor(x, y) {
        super();
        this.loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
    }
}
