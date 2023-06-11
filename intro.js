class intro extends Phaser.Scene {

    constructor() {
        super('intro');
    }

    preload() {
    }

    create(){
        //create text object
        this.textObject = this.add.text(
            250, //x
            300,//y
            "Game Name", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            300, //x
            400,//y
            "(Click Anywhere to Continue)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("Studio")
        }, this)

    }

    update(){}
}

class Studio extends Phaser.Scene {

    constructor() {
        super('Studio');
    }

    preload() {
        this.load.video('Studio23', '/assets/Studio23.mp4');
    }

    create(){
        this.video = this.add.video(400, 300, 'Studio23');
        this.video.setScale(0.45);
        this.video.play();
        this.time.addEvent({
            delay: 6500,
            callback: ()=>{
                this.scene.start("MainMenu");
            },
            loop: false,
        })
    }

    update(){}
}

class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('title', 'title.png');
        this.load.image('city', 'city.png');

    }
    create(){
        //create image object 
        this.imageObject = this.add.image(
            515,//x
            450,//y
            'city',//imagename
        )
        this.imageObject.setScale(0.6) //resize

        //create image object 
        this.textObject = this.add.text(
            50,//x
            50,//y
            "Game Name", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );
        
        //create text object
        this.textObject = this.add.text(
            60, //x
            250,//y
            "Play", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            325, //y
            "Options", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            400, //y
            "Credits", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            475, //y
            "Quit", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );
    

    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x000000",
    scene: [intro, Studio, MainMenu] 
}

let game = new Phaser.Game(config);



