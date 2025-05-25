class World{
    // #region attributes
    character = new Character();                        // wir haben eine variable definiert und ihr ein Character objekt zugewiesen
    level = level1;                                     // wir können nun auf alle variablen aus unserem level zugreifen
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;                                           // eine variable mit der wir bestimmen um was sich unsere camera bewegen soll --> hier sage ich um wie viel ich den camra auschnitt an der x achse nach links oder nach rechts verschieben möchte
    statusbar = new Statusbar;
    throwableObjects = [new ThrowableObject()];
    // #endregion

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');             // wir geben in unsere welt das canvas rein in der wir später unsere welt zeichnen wollen mit ctx und getContext können wir in unserer Welt zeichnen --> ohne geht das nicht
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();                                    // beim erstelen der neuen Welt wird der constructor aufgerufen und somit auch draw mit der wir pepe darstellen können beim erstellen einer welt -> init function
        this.setWorld();
        this.checkCollisions();                         
    }

    // #region methods
    setWorld(){
        this.character.world = this;                   // ich übergebe die akutelle instanz mit this
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {            // diese function wird jede sekunde einmal für alle gegner ausgeführt
                if(this.character.isColliding(enemy)) {
                    this.character.hit();                      // function mit der wir leben abziehen --> energy
                    this.statusbar.setPercentage(this.character.energy);        // ich gebe die percenteage weiter anhand des energy des characters und verändere so das bild der statusbar
                } 
            });
        }, 200);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)                                                              // wir clearen den inhalt im canvas weil das bild sonst öfter gezeichnet wird bei jedem verschieben
        this.ctx.translate(this.camera_x, 0);                              // wir verschieben unseren ganzen ausschnitt(context->ctx) um 100px nach links
        /* this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)      // mit this.character.img greifen wir auf des Bild unseres Characters zu ; pos1 = img, pos2= x position in canvas, pos3= yposition in canvas, pos4= breite und pos5=höhe */
        this.addObejctsToMap(this.level.backgroundObjects);                                                                                   // der hintergrund muss als erstes hinzugefügt werden weil es sonst überallen anderem ist wenn man es zuletzt hinzufügt
        
        this.ctx.translate(-this.camera_x, 0);                              // back --> back und forwards um ein object zu fixen
        this.addToMap(this.statusbar);                                      // wir fügen der map statusbar hinzu
        this.ctx.translate(this.camera_x, 0);                               // forwards

        this.addToMap(this.character);
        this.addObejctsToMap(this.level.enemies);
        this.addObejctsToMap(this.level.clouds);
        this.addObejctsToMap(this.throwableObjects);

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
