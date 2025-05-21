class World{
    // #region attributes
    character = new Character();                        // wir haben eine variable definiert und ihr ein Character objekt zugewiesen
    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject ('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        
    ];
    canvas;
    ctx;
    keyboard;
    // #endregion

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');             // wir geben in unsere welt das canvas rein in der wir später unsere welt zeichnen wollen mit ctx und getContext können wir in unserer Welt zeichnen --> ohne geht das nicht
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();                                    // beim erstelen der neuen Welt wird der constructor aufgerufen und somit auch draw mit der wir pepe darstellen können beim erstellen einer welt -> init function
        this.setWorld();
    }

    // #region methods
    setWorld(){
        this.character.world = this;                   // ich übergebe die akutelle instanz mit this
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)                                                              // wir clearen den inhalt im canvas weil das bild sonst öfter gezeichnet wird bei jedem verschieben 
        /* this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)      // mit this.character.img greifen wir auf des Bild unseres Characters zu ; pos1 = img, pos2= x position in canvas, pos3= yposition in canvas, pos4= breite und pos5=höhe */
        this.addObejctsToMap(this.backgroundObjects);                                                                                   // der hintergrund muss als erstes hinzugefügt werden weil es sonst überallen anderem ist wenn man es zuletzt hinzufügt
        this.addToMap(this.character);
        this.addObejctsToMap(this.enemies);
        this.addObejctsToMap(this.clouds);

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

    addToMap(mo){
        if(mo.otherDirection){                                                    // wir gucken ob das object das wir einfügen eine andere Richtung hat --> wenn ja dann->
            this.ctx.save();                                                      // wir speichern die aktuellen einstellungen von unserem ctx (context mit dem wir unsere bilder einfügen)
            this.ctx.translate(mo.img.width, 0);                                  // wir verändern die methode wie wir unsere bilder einfügen
            this.ctx.scale(-1, 1);                                                // wir drehen alles an der y achse um --> wir spiegeln alles
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);              // wir erstellen eine function um diese immer auszuführen wenn wir etwas darstellen wollen  --> wir geben unsere bilder gespiegelt wieder
        if(mo.otherDirection){
            this.ctx.restore();                                                   // hier machen wie alles rückgänig was wir vorher wieder verändert haben --> die folgenden bilder sind wieder nicht gespiegelt
        }             
    }
    // #endregion


}
