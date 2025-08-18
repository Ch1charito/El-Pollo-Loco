class SalsaBottle extends DrawableObject{
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 20,
        right : 35,
        bottom : 15,
        left : 35
    }
    width = 100;
    height = 100;




    constructor (x, y){
        super();
        this.loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;


    }
}