/**
 * Represents a game level containing all objects and elements within it.
 */
class Level {
    //#region attributes

    /** @type {Array<MovableObject>} List of enemies in the level */
    enemies;

    /** @type {Array<Cloud>} List of clouds in the background */
    clouds;

    /** @type {Array<DrawableObject>} List of background objects */
    backgroundObjects;

    /** @type {Array<Coin>} List of coins in the level */
    coins;

    /** @type {Array<SalsaBottle>} List of salsa bottles in the level */
    salsabottles;

    /** @type {number} The X coordinate at which the level ends */
    level_end_x = 2200;

    //#endregion

    /**
     * Creates a new game level.
     * @param {Array<MovableObject>} enemies - Enemies present in the level
     * @param {Array<Cloud>} clouds - Clouds in the background
     * @param {Array<DrawableObject>} backgroundObjects - Static background elements
     * @param {Array<Coin>} coins - Coins to collect in the level
     * @param {Array<SalsaBottle>} salsabottles - Collectible salsa bottles in the level
     */
    constructor(enemies, clouds, backgroundObjects, coins, salsabottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.salsabottles = salsabottles;
    }
}
