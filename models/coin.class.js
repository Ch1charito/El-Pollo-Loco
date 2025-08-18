class Coin extends DrawableObject {

    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 60,
        right : 60,
        bottom : 60,
        left : 60
    }
    width = 150;
    height =150;




    constructor (x, y){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = x;
        this.y = y;


    }
}