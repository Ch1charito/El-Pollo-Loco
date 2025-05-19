class Cloud extends MovableObject{
    y = 20;                                                                             // da nicht dynamisch soll standard mäßig sein --> sauberer als wenn es direkt im constructor drinnen liegt
    width = 500;
    height = 250;

    constructor(){                              
        super().loadImage('img/5_background/layers/4_clouds/1.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.x = Math.random() * 500;      
        
    }

}