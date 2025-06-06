class DrawableObject {
    //#region attributes
    img;
    imageCache = {};                            // unser Bilderspeicher
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    //#endregion


    //#region methods

    //loadImage('img/test.png'); = der aufruf der methode mit der wir dann die src bestimmen und dem img den src wert zuweisen
    loadImage(path){
        this.img = new Image();                 // image ist ein objekt was wir in javascript haben this.img = document.getElementById('iamge') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx){                                  // parameter ist der context ctx mit dem wir das ganze zeichnen wollen
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);              // wir erstellen eine function um diese immer auszuführen wenn wir etwas darstellen wollen  --> wir geben unsere bilder gespiegelt wieder
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof ChickenSmall || this instanceof Coin || this instanceof SalsaBottle || this instanceof ThrowableObject){               // nur wenn wir eine instance also einer erstellung von dem objekt character oder chicken sind wollen wir einen frame also ramen haben
            ctx.beginPath();                                                     // ich zeichne einen kasten um meine objecte beim zeichnen um das ganze dann für die collision zu benutzen
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        
    }

    drawRealFrame(ctx){                                                          // eine function um einen angepassten kleieneren ramen zu zeichnen
        if (this instanceof Character || this instanceof Endboss || this instanceof Coin || this instanceof Chicken || this instanceof ChickenSmall || this instanceof SalsaBottle || this instanceof ThrowableObject){               
            ctx.beginPath();                                                     // ich zeichne einen kasten um meine objecte beim zeichnen um das ganze dann für die collision zu benutzen
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';                             // colorcode für transparent
            ctx.rect(
                this.x + this.offSett.left,
                this.y + this.offSett.top,
                this.width - this.offSett.left - this.offSett.right,
                this.height - this.offSett.top - this.offSett.bottom
            );
            ctx.stroke();
        }
    }

    loadImages(arr){                            // parameter ist der array an bildern die wir hinzugüfen wollen --> die function läuft solange wie viele bilder wir hinzufügen wollen
        arr.forEach((path) => {                 // wir gehen durch dieses array durch
            let img = new Image();              // wir legen eine variable an mit einem neuen Bild
            img.src = path;                     // wir laden das Bild nun in das Image Objekt rein
            this.imageCache[path] = img;       // wir updaten unseren image cache und fügen ihm die bilder hinzu 
        });
        
    }




    //#endregion
}