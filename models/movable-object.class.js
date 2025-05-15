class MovableObject{                            // eine Schablone mit der wir sagen welche Felder drin sein sollen
    x = 120;
    y = 400;
    img;

    //loadImage('img/test.png');
    loadImage(path){
        this.img = new Image();                 // image ist ein objekt was wir in javascript haben this.img = document.getElementById('iamge') <img id="image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
        
    }

    moveLeft(){
        
    }
}