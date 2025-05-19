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
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');             // wir geben in unsere welt das canvas rein in der wir später unsere welt zeichnen wollen mit ctx und getContext können wir in unserer Welt zeichnen --> ohne geht das nicht
        this.canvas = canvas;
        this.draw();                                    // beim erstelen der neuen Welt wird der constructor aufgerufen und somit auch draw mit der wir pepe darstellen können beim erstellen einer welt -> init function
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)                                                              // wir clearen den inhalt im canvas weil das bild sonst öfter gezeichnet wird bei jedem verschieben 
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)      // mit this.character.img greifen wir auf des Bild unseres Characters zu ; pos1 = img, pos2= x position in canvas, pos3= yposition in canvas, pos4= breite und pos5=höhe
        this.enemies.forEach(enemies => {                                                                                            // eine schleife das durch jedes objekt in enemies wiederholt
            this.ctx.drawImage(enemies.img, enemies.x, enemies.y, enemies.width, enemies.height)                                     // wir führen die drawImage methode für jedes element aus enemies aus
        });
        this.clouds.forEach(clouds => {                                                                                            // eine schleife das durch jedes objekt in clouds wiederholt
            this.ctx.drawImage(clouds.img, clouds.x, clouds.y, clouds.width, clouds.height)                                     // wir führen die drawImage methode für jedes element aus clouds aus
        });

        self = this;                                    // draw wird immer wieder aufgerufen
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}