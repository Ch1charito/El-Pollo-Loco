class Level {
    //#region attributes
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;                                  // eine variable mit der wir sagen wie weit unser character gehen kann
    //#endregion

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}