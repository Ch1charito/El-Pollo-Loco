class MovableObject{                            // eine Schablone mit der wir sagen welche Felder drin sein sollen

    // #region attributes
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};                            // unser Bilderspeicher
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;                     // eine variable mit der wir die richtung von unserem character bestimmen --> standardmäßig faalse weil wir nicht gespiegelt starten wollen
    speedY = 0;                                 // eine geschwindigkeit auf der y achse --> wie schnell unser object nach unten fällt
    acceleration = 2.5;                           // eine variable mit der wir sagen wie schnell unser object im Fallen beschleunigt wird
    // #endregion

    // #region methods


    //loadImage('img/test.png'); = der aufruf der methode mit der wir dann die src bestimmen und dem img den src wert zuweisen
    loadImage(path){
        this.img = new Image();                 // image ist ein objekt was wir in javascript haben this.img = document.getElementById('iamge') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx){                                  // parameter ist der context ctx mit dem wir das ganze zeichnen wollen
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);              // wir erstellen eine function um diese immer auszuführen wenn wir etwas darstellen wollen  --> wir geben unsere bilder gespiegelt wieder
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Chicken){               // nur wenn wir eine instance also einer erstellung von dem objekt character oder chicken sind wollen wir einen frame also ramen haben
            ctx.beginPath();                                                     // ich zeichne einen kasten um meine objecte beim zeichnen um das ganze dann für die collision zu benutzen
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        
    }

    // eine function um zu checken ob die objecte miteinander kolidieren  um zu schauen ob character und chicken collidieren character.isColliding(chicken)
    isColliding(mo){
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    loadImages(arr){                            // parameter ist der array an bildern die wir hinzugüfen wollen --> die function läuft solange wie viele bilder wir hinzufügen wollen
        arr.forEach((path) => {                 // wir gehen durch dieses array durch
            let img = new Image();              // wir legen eine variable an mit einem neuen Bild
            img.src = path;                     // wir laden das Bild nun in das Image Objekt rein
            this.imageCache[path] = img;       // wir updaten unseren image cache und fügen ihm die bilder hinzu 
        });
        
    }

    playAnimation(images){
        let i = this.currentImage % this.imagesWalking.length;                    // let i = 0 % 6;=> 0,Rest0; --> modulu ist der mathematische Rest; let i = 5 % 6;=> 0,Rest5;  let i = 6 % 6;=> 1,Rest0;
        // i = 1,2,3,4,5,0   => ist eine unendliche reihe
        let path = images[i];                                         // wir holen den Pfad zum aktuellen Bild aus dem Array imagesWalking anhand des Index von i 
        this.img = this.imageCache[path];                                         // Wir setzen das aktuelle Bild (this.img) auf das zwischengespeicherte Bild aus dem Cache anhand des Bildpfads
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;                                         
    }

    moveLeft(){
        this.x -= this.speed;                                                                  
    }

    applyGravity(){                                                                     // eine function mit der wir eine gravitatino hinzufügen
        
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){                                                           // wir sagen er kann nur bis 180 runter fallen                                 
                this.y -= this.speedY;                                                          // wir möchte von unserem y attribut etwas abziehen
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);                                                                  // diese function soll 25 mal pro sekunde aufgerufen werden
    }


    isAboveGround(){
        return this.y < 180;
    }

    jump(){
        this.speedY = 30;
    }


    // #endregion
}