/**
 * Represents the game world, managing characters, enemies, items, and rendering.
 */
class World {
    //#region attributes

    /** @type {Character} The main player character */
    character = new Character();

    /** @type {Level} Current game level */
    level = level1;

    /** @type {Array} Enemies in the current level */
    enemies = level1.enemies;

    /** @type {Array} Clouds in the current level */
    clouds = level1.clouds;

    /** @type {Array} Coins in the current level */
    coins = level1.coins;

    /** @type {Array} Collectable salsa bottles */
    salsabottles = level1.salsabottles;

    /** @type {Array} Background objects */
    backgroundObjects = level1.backgroundObjects;

    /** @type {HTMLCanvasElement} The canvas element */
    canvas;

    /** @type {CanvasRenderingContext2D} Canvas rendering context */
    ctx;

    /** @type {Keyboard} The keyboard input object */
    keyboard;

    /** @type {number} Camera x offset */
    camera_x = 0;

    /** @type {Healthbar} Player health bar */
    healthbar = new Healthbar();

    /** @type {Bottlebar} Bottle count bar */
    bottlebar = new Bottlebar();

    /** @type {Coinbar} Coin count bar */
    coinbar = new Coinbar();

    /** @type {Endbossbar} Endboss health bar */
    endbossbar = new Endbossbar();

    /** @type {Array} Collected coins */
    collectedCoins = [];

    /** @type {Array} Collected bottles */
    collectedBottles = [];

    /** @type {Array} Thrown objects */
    throwableObjects = [];

    /** @type {boolean} Flag if player can throw a bottle */
    canThrow = true;

    //#endregion

    /**
     * Initializes the world with canvas and keyboard input.
     * @param {HTMLCanvasElement} canvas
     * @param {Keyboard} keyboard
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

        Soundhub.music.loop = true;
        Soundhub.playSound(Soundhub.music);
        Soundhub.music.volume = 0.05;
    }

    /**
     * Links the character to this world.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Starts the main game loop and checks collisions, collectible items, and game status.
     */
    run() {
        IntervalHub.startInterval(() => {
            this.checkCollisions();
            this.checkCoinCollisions();
            this.checkBottleCollisions();
            this.checkThrowObjects();
            this.checkThrowableCollisions();
            this.endbossbarTrigger();
            this.checkGameStatus();
        }, 20);
    }

    /**
     * Checks whether the game is over or won and triggers the appropriate end screen.
     */
    checkGameStatus() {
        if (this.character.energy <= 0) {
            setTimeout(() => {
                IntervalHub.stopAllIntervals();
                Soundhub.stopSound(Soundhub.music);
            }, 200);
            showLoseScreen();
        } else if (this.enemies.some(enemy => enemy instanceof Endboss && enemy.energy <= 0)) {
            setTimeout(() => {
                IntervalHub.stopAllIntervals();
                Soundhub.stopAllSounds();
                Soundhub.stopSound(Soundhub.music);
                Soundhub.playSound(Soundhub.winGame);
            }, 200);
            showWinScreen();
        }
    }

    /**
     * Handles throwing objects when the player presses the throw key.
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.canThrow && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.collectedBottles.pop();
            this.bottlebar.setPercentage(this.collectedBottles.length);
            this.canThrow = false;
        }
        if (!this.keyboard.D) {
            this.canThrow = true;
        }
    }

    /**
     * Checks collisions between throwable objects and enemies.
     */
    checkThrowableCollisions() {
        this.throwableObjects.forEach(bottle => {
            if (bottle.hasHit) return;
            this.level.enemies.forEach(enemy => {
                if (bottle.isColliding(enemy)) {
                    enemy.hitEnemy(25);
                    if (enemy instanceof Endboss) {
                        this.endbossbar.setPercentage(enemy.energy);
                    }
                    bottle.break();
                    Soundhub.playSound(Soundhub.bottleBreak);
                    bottle.hasHit = true;
                }
            });
        });
    }

    /**
     * Checks collisions between the player and enemies.
     */
    checkCollisions() {
        let now = new Date().getTime();
        this.level.enemies.forEach(enemy => {
            if (
                this.character.isColliding(enemy) &&
                this.character.speedY < 0 &&
                this.character.y + this.character.height <= enemy.y + 30
            ) {
                enemy.hitEnemy(25);
            } else if (this.character.isColliding(enemy) && enemy.energy > 0 &&
                now - this.character.lastHit > 100) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * Checks collisions with coins and updates coin count.
     */
    checkCoinCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.level.coins.splice(index, 1);
                this.coinbar.setPercentage(this.collectedCoins.length);
                Soundhub.playSound(Soundhub.collectCoin);
            }
        });
    }

    /**
     * Checks collisions with salsa bottles and updates bottle count.
     */
    checkBottleCollisions() {
        this.level.salsabottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle);
                this.level.salsabottles.splice(index, 1);
                this.bottlebar.setPercentage(this.collectedBottles.length);
                Soundhub.playSound(Soundhub.collectBottle);
            }
        });
    }

    /**
     * Triggers the endboss bar and endboss attack music.
     */
    endbossbarTrigger() {
        if (this.character.x >= 2000) {
            this.endbossbar.showEndbossBar();
            if (!this.endbossSoundPlayed) {
                Soundhub.playSound(Soundhub.endbossAttack);
                this.endbossSoundPlayed = true;
            }
        }
    }

    /**
     * Draws all objects in the world onto the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObejctsToMap(this.level.backgroundObjects);
        this.addObejctsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.endbossbar);
        this.ctx.translate(this.camera_x, 0);
        this.addObejctsToMap(this.level.enemies);
        this.addObejctsToMap(this.coins);
        this.addObejctsToMap(this.salsabottles);
        this.addObejctsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Adds an array of objects to the map.
     * @param {Array} objects
     */
    addObejctsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds a single object to the map, handling direction flipping.
     * @param {MovableObject} mo
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawRealFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips an object horizontally for rendering.
     * @param {MovableObject} mo
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the object to normal orientation after flipping.
     * @param {MovableObject} mo
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    //#endregion
}

