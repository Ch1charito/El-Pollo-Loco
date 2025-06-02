class Coinbar extends DrawableObject {
    imagesCoin = ImagesHub.statusbar.coin;

    percentage = 0;



    constructor() {
        super();
        this.loadImages(this.imagesCoin); // Alle Coinbar-Bilder vorladen
        this.x = 40;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0); // Startwert
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesCoin[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 5) {
            return 5;
        } else if (this.percentage >= 4) {
            return 4;
        } else if (this.percentage >= 3) {
            return 3;
        } else if (this.percentage >= 2) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }



}