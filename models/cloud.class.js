class Cloud extends MovableObject{

    constructor(){                              
        super().loadImage('img/5_background/layers/4_clouds/1.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.x = 200 + Math.random() * 500;     // mit math.random erechne ich einen rdnm wert ziwschen 0 und 1. Weil man 1 pixel aber nicht sieht mulitplieziere ich den wert mit 500 und kriege einen Wert on 0 bis 500, das ganze addiere ich ja auf die 200 rauf--> so starteter bei 200 und geht bis 700
    }

}