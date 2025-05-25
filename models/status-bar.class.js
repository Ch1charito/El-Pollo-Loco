class Statusbar extends DrawableObject{
    //#region attributes
    imagesHealth = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    percentage = 100;                                                   // startpunkt healthbar

    //#endregion

    constructor(){                                                      // der constructor wird bei jeder instanzierung automatisch aufgerufen
        this.loadImages(this.imagesHealth);

    }

    setPercentage(percentage){                                                    // eine function die die percentage der health statusbar verändern soll --> setPercentage(50) leben status healthbar ist bei 50 prozent
        this.percentage = percentage;
    }

}