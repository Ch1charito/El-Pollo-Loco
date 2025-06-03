class Bottlebar extends DrawableObject {
    imagesBottle = ImagesHub.statusbar.bottle;
    percentage = 0;

    constructor() {
        super();
        /* this.loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png') */
        this.loadImages(this.imagesBottle);
        this.x = 20;
        this.y = 80;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesBottle[this.resolveImageIndex()];
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