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

class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
    }
};

function startGame() {
    this.scene.start("intro");
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

        
        let title = this.add.text(60, 60, "Game Name")
            .setFontSize(40)
            .setInteractive()
            //.on('pointerover', () => this.setStyle({ fill: '#f39c12' }))
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: title,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        // Then later in one of your scenes, create a new button:
        const button = new Button(120, 250, 'Play', this, startGame);

        // Then later in one of your scenes, create a new button:
        const Options = new Button(120, 325, 'Options', this, () => console.log('game is started'));


        // Then later in one of your scenes, create a new button:
        const Credits = new Button(120, 400, 'Credits', this, () => console.log('game is started'));


        // Then later in one of your scenes, create a new button:
        const Quit = new Button(120, 475, 'Quit', this, () => console.log('game is started'));

    }
    update(){}
}

// Config
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x000000",
    scene: [intro, Studio, MainMenu] 
}

let game = new Phaser.Game(config);



