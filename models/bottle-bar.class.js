class Bottlebar extends DrawableObject {
    imagesBottle = ImagesHub.statusbar.bottle;
    percentage = 0;
    x = 20;
    y = 80;
    width = 200;
    height = 60;

    constructor() {
        super();
        this.loadImages(this.imagesBottle);
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