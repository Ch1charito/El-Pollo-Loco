class Endboss extends MovableObject {

    //#region attributes

    imagesWalking = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];


    //#endregion


    constructor(){
        super().loadImage(this.imagesWalking[0]); 
        this.loadImages(this.imagesWalking);
        this.x = 700;
        this.animate();
    }


    //#region methods
    animate(){
        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            this.playAnimation(this.imagesWalking);                                   // wir führen eine function zum animieren aus die wir aus movable objects bekommen
        },200); 
    }
    
    
    //#endregion


}