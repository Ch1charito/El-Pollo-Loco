class Coin extends DrawableObject {

    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 60,
        right : 60,
        bottom : 60,
        left : 60
    }




    constructor (x, y){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height =150;


    }
}