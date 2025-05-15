class Character extends MovableObject{          // auch wenn Character leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften


    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
    }

    jump(){

    };
}