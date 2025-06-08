class World{
    // #region attributes
    character = new Character();                        // wir haben eine variable definiert und ihr ein Character objekt zugewiesen
    level = level1;                                     // wir können nun auf alle variablen aus unserem level zugreifen
    enemies = level1.enemies;
    clouds = level1.clouds;
    coins = level1.coins;
    salsabottles = level1.salsabottles;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;                                           // eine variable mit der wir bestimmen um was sich unsere camera bewegen soll --> hier sage ich um wie viel ich den camra auschnitt an der x achse nach links oder nach rechts verschieben möchte
    healthbar = new Healthbar;
    bottlebar = new Bottlebar;
    coinbar = new Coinbar;
    endbossbar = new Endbossbar;
    collectedCoins = [];
    collectedBottles = [];
    /* coin = new Coin */;
    throwableObjects = [];
    canThrow = true;                                        // sorgt dafür das ich enimal die flasche schmeißen kann
    // #endregion

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');             // wir geben in unsere welt das canvas rein in der wir später unsere welt zeichnen wollen mit ctx und getContext können wir in unserer Welt zeichnen --> ohne geht das nicht
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();                                    // beim erstelen der neuen Welt wird der constructor aufgerufen und somit auch draw mit der wir pepe darstellen können beim erstellen einer welt -> init function
        this.setWorld();
        this.run();                        
    }

    // #region methods
    setWorld(){
        this.character.world = this;                   // ich übergebe die akutelle instanz mit this
    }

    run(){                                              // diese function wird während dem spiel dauerhaft ausgeführt und hier werden meherer sachen geprüft
        IntervalHub.startInterval(() => {
            this.checkCollisions();
            this.checkCoinCollisions();
            this.checkBottleCollisions();
            this.checkThrowObjects();
            this.checkThrowableCollisions();
            this.endbossbarTrigger();
            this.checkGameStatus();
        }, 20)
    }

    // eine methode um mir zu sagen ob gewonnen oder verloren
    checkGameStatus() {
        if (this.character.energy <= 0) {
            setTimeout(() => {
                IntervalHub.stopAllIntervals();
            }, 200); // 1 Sekunde warten
            showLoseScreen();
        } else if (this.enemies.some(enemy => enemy instanceof Endboss && enemy.energy <= 0)) {
            setTimeout(() => {
                IntervalHub.stopAllIntervals();
                Soundhub.stopAllSounds();
                Soundhub.playSound(Soundhub.winGame);
            }, 200); // 1 Sekunde warten
            showWinScreen();
        }
    }
    

    checkThrowObjects(){
        if(this.keyboard.D && this.canThrow && this.collectedBottles.length > 0){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);           // der punkt von wo die flasche geworfen wird
            this.throwableObjects.push(bottle);
            this.collectedBottles.pop(); // Eine Flasche verbrauchen --> löscht das letzte element aus dem array
            this.bottlebar.setPercentage(this.collectedBottles.length); // Statusbar aktualisieren
            this.canThrow = false;                                                                      // ist auf false ich kann nicht unendlich flaschen schmeißen
        }
        if (!this.keyboard.D) {
            this.canThrow = true;                                                                       // setzt nach dem loslassen der taste d wieder auf true das heißt ich kann per jedem click eine flasche schmeißen                                                               
        }
    }


    checkThrowableCollisions() {
        this.throwableObjects.forEach(bottle => {
        if (bottle.hasHit) return; // überspringe Flaschen, die schon getroffen haben
            this.level.enemies.forEach(enemy => {
                if (bottle.isColliding(enemy)) {
                    enemy.hitEnemy(25);
                if (enemy instanceof Endboss) {
                    this.endbossbar.setPercentage(enemy.energy);
                }
                bottle.break();
                Soundhub.playSound(Soundhub.bottleBreak);
                bottle.hasHit = true; // markieren, dass die Flasche Schaden verursacht hat
                }
            });
        });
    }


    checkCollisions() {
        let now = new Date().getTime(); // aktuelle Zeit
        this.level.enemies.forEach(enemy => {
            if (
                this.character.isColliding(enemy) &&
                this.character.speedY < 0 &&
                this.character.y + this.character.height <= enemy.y + 30
            ) {
                enemy.hitEnemy(25);  // Schaden an Enemy, der alles weitere regelt
            } else if (this.character.isColliding(enemy) && enemy.energy > 0 &&
            now - this.character.lastHit > 100) {
                // Nur Schaden am Character, wenn Enemy noch lebt
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy);
            }
        });
    }

    

    // eine methode um zu checken ob der eine collisison zwischen coin und chaaracter besteht
    checkCoinCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);         // ins gesammelte Coin-Array
                this.level.coins.splice(index, 1);      // Coin aus der Welt entfernen
                this.coinbar.setPercentage(this.collectedCoins.length);
                Soundhub.playSound(Soundhub.collectCoin);
            }
        });
    }

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

    // eine methode um zu endbossbar sichtbar zu machen
    endbossbarTrigger(){
        if (this.character.x >= 2000){
            this.endbossbar.showEndbossBar();
            if (!this.endbossSoundPlayed) {
                Soundhub.playSound(Soundhub.endbossAttack); // 🔊 Sound einmal abspielen
                this.endbossSoundPlayed = true;
            }
        }
        
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)                                                              // wir clearen den inhalt im canvas weil das bild sonst öfter gezeichnet wird bei jedem verschieben
        this.ctx.translate(this.camera_x, 0);                              // wir verschieben unseren ganzen ausschnitt(context->ctx) um 100px nach links
        this.addObejctsToMap(this.level.backgroundObjects);                                                                                   // der hintergrund muss als erstes hinzugefügt werden weil es sonst überallen anderem ist wenn man es zuletzt hinzufügt
        this.addObejctsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);                              // back --> back und forwards um ein object zu fixen
        this.addToMap(this.healthbar);                                      // wir fügen der map statusbar hinzu
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.endbossbar);
        this.ctx.translate(this.camera_x, 0);                               // forwards
        
        
        this.addObejctsToMap(this.level.enemies);       
        this.addObejctsToMap(this.coins);
        this.addObejctsToMap(this.salsabottles);
        this.addObejctsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);                         // wir verschieben unseren ausschnitt wieder nachr rechts, der erste parameter ist die x achse der zweite die y achse

        self = this;                                    // draw wird immer wieder aufgerufen
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObejctsToMap(objects){                                                                                                       // eine function zum vereinfachen und hinzufügen von objekten
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo){                                                                 // paramter ist das movable object
        if(mo.otherDirection){                                                    // wir gucken ob das object das wir einfügen eine andere Richtung hat --> wenn ja dann->
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawRealFrame(this.ctx)
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }             
    }

    flipImage(mo){
        this.ctx.save();                                                      // wir speichern die aktuellen einstellungen von unserem ctx (context mit dem wir unsere bilder einfügen)
        this.ctx.translate(mo.width, 0);                                  // wir verändern die methode wie wir unsere bilder einfügen
        this.ctx.scale(-1, 1);                                                // wir drehen alles an der y achse um --> wir spiegeln alles
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();                                                   // hier machen wie alles rückgänig was wir vorher wieder verändert haben --> die folgenden bilder sind wieder nicht gespiegelt
    }
    // #endregion


}
