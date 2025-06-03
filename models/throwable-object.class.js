class ThrowableObject extends MovableObject{
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 10,
        right : 30,
        bottom : 10,
        left : 30
    }




    constructor(x, y){
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png'); 
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        

    }


    throw(){
        this.speedY = 30;
        this.applyGravity();
        IntervalHub.startInterval(() => {
            this.x += 10;
        }, 25);
    }
}