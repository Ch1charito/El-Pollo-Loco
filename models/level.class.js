class Level {
    //#region attributes
    enemies;
    clouds;
    backgroundObjects;
    coins;
    salsabottles;
    level_end_x = 2200;                                  // eine variable mit der wir sagen wie weit unser character gehen kann
    //#endregion

    constructor(enemies, clouds, backgroundObjects, coins, salsabottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.salsabottles = salsabottles;
    }
}