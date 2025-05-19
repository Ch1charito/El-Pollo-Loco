class World{
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
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0,)
    ];
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');             // wir geben in unsere welt das canvas rein in der wir später unsere welt zeichnen wollen mit ctx und getContext können wir in unserer Welt zeichnen --> ohne geht das nicht
        this.canvas = canvas;
        this.draw();                                    // beim erstelen der neuen Welt wird der constructor aufgerufen und somit auch draw mit der wir pepe darstellen können beim erstellen einer welt -> init function
    }

    // #region objects hinzufügen
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);                                                                // wir erstellen eine function um diese immer auszuführen wenn wir etwas darstellen wollen             
    }
    // #endregion


}
