/**
 * Class representing a collectible coin in the game.
 * Extends DrawableObject and sets position and collision offsets.
 */
class Coin extends DrawableObject {
    // #region attributes

    /**
     * Collision offset for each side of the coin.
     * @type {{top: number, right: number, bottom: number, left: number}}
     */
    offSett = {                                     
        top: 60,
        right: 60,
        bottom: 60,
        left: 60
    };

    /**
     * Width of the coin image.
     * @type {number}
     */
    width = 150;

    /**
     * Height of the coin image.
     * @type {number}
     */
    height = 150;
    // #endregion

    /**
     * Creates a new Coin instance at the specified position.
     * @param {number} x - The horizontal position of the coin.
     * @param {number} y - The vertical position of the coin.
     */
    constructor(x, y) {
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
        this.y = y;
    }
}
