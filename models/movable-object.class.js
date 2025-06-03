class MovableObject extends DrawableObject{                            // eine Schablone mit der wir sagen welche Felder drin sein sollen

    // #region attributes
    speed = 0.15;
    otherDirection = false;                     // eine variable mit der wir die richtung von unserem character bestimmen --> standardmäßig faalse weil wir nicht gespiegelt starten wollen
    speedY = 0;                                 // eine geschwindigkeit auf der y achse --> wie schnell unser object nach unten fällt
    acceleration = 2.5;                           // eine variable mit der wir sagen wie schnell unser object im Fallen beschleunigt wird
    energy = 100;                               // unsere hp also volles leben
    lastHit = 0;
    // #endregion

    // #region methods


    

    
    

    // eine function um zu checken ob die objecte miteinander kolidieren  um zu schauen ob character und chicken collidieren character.isColliding(chicken)
    /* isColliding(mo){
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    } */
    isColliding(mo){
        return this.x + this.offSett.left + this.width - this.offSett.right - this.offSett.left > mo.x + mo.offSett.left &&
        this.y + this.offSett.top + this.height - this.offSett.top - this.offSett.bottom > mo.y + mo.offSett.top &&
        this.x + this.offSett.left < mo.x + mo.offSett.left + mo.width - mo.offSett.left - mo.offSett.right &&
        this.y + this.offSett.top < mo.y + mo.offSett.top + mo.height - mo.offSett.top - mo.offSett.bottom;    
    }



    hit(){
        this.energy -= 5;                // sobald wir mit dem object chicken collidiren wird unseren character ernergy minus 2 gemacht also 2 hp abgezogen
        if(this.energy < 0){             // wenn es kleiner als 0  sein würde geben wir einfach den wert 0 damit es nicht kleiner als 0 werden kann
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();        // so speichern wir zeit in zahlenform
        }
    }

    isDead(){                           // eine function um rauszufinden ob unser character oder ein anderer object tot ist oder nicht energy=0
        return this.energy == 0;        // returned true or false
    }

    isHurt(){                           // eine function um zu sagen das unser character verletzt ist
        let timePassed = new Date().getTime() - this.lastHit;       // millisekunden seit dem 01.01.1970 bis aktuell - den letzten hit --> die differenz in milliesekunden
        timePassed = timePassed / 1000;     // wert von millisekunden in sekunden umgewandelt
        return timePassed < 1;              // wenn wir innerhalb der letzten  sekunde getroffen wurden wird das ergebnis als true zurückgegeben
    }


    

    playAnimation(images){
        let i = this.currentImage % images.length;                    // let i = 0 % 6;=> 0,Rest0; --> modulu ist der mathematische Rest; let i = 5 % 6;=> 0,Rest5;  let i = 6 % 6;=> 1,Rest0;
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
        IntervalHub.startInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){                                                           // wir sagen er kann nur bis 180 runter fallen                                 
                this.y -= this.speedY;                                                          // wir möchte von unserem y attribut etwas abziehen
                this.speedY -= this.acceleration;
            }
        },1000 / 25);                                                                       // diese function soll 25 mal pro sekunde aufgerufen werden
    }


    isAboveGround(){
        if(this instanceof ThrowableObject){                                        // damit sorgen wir daüf rdas das throwabale object aus dem bild rausfallen kann und nicht auf der höhe 180 von y stehen bleibt
            return true;
        }else {
            return this.y < 180;
        }
    }

    jump(){
        this.speedY = 30;
    }


    // #endregion
}