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

    loadImages(arr){                            // parameter ist der array an bildern die wir hinzugüfen wollen --> die function läuft solange wie viele bilder wir hinzufügen wollen
        arr.forEach((path) => {                 // wir gehen durch dieses array durch
            let img = new Image();              // wir legen eine variable an mit einem neuen Bild
            img.src = path;                     // wir laden das Bild nun in das Image Objekt rein
            this.imageCache[path] = img;       // wir updaten unseren image cache und fügen ihm die bilder hinzu 
        });
        
    }




    //#endregion
}