class MovableObject{                            // eine Schablone mit der wir sagen welche Felder drin sein sollen
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    

    //loadImage('img/test.png'); = der aufruf der methode mit der wir dann die src bestimmen und dem img den src wert zuweisen
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