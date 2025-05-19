class BackgroundObject extends MovableObject{

    width = 720;                                // wir vergeben für den hintergrund eine standard höhe und eine standard breite
    height = 400;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }

}