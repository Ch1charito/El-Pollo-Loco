class Cloud extends MovableObject{
    // #region attributes
    y = 20;                                                                             // da nicht dynamisch soll standard mäßig sein --> sauberer als wenn es direkt im constructor drinnen liegt
    width = 500;
    height = 250;
    // #endregion

    constructor(){                              
        super().loadImage('img/5_background/layers/4_clouds/1.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.x = Math.random() * 500;                                                   // zufällig generierte zahl zwischen 0 und 500
        this.animate();

    }

    //#region methods
    animate(){                                                                          // eine function um die wolke zu animiere
        setInterval( () => {                                                            
        this.x -= 0.15;                                                                    // 0.15 in dem fall px werden von der x koordinate im canvas abgezogen
        },1000 / 60)                                                                    // 60 fps => frames pro sekunde --> die functino wird 60 mal pro sekunde aufgerufen
    }

    // #endregion
}