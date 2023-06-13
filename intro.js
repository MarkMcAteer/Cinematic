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
        this.load.video('Studio23', 'Studio23.mp4');
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

        // button code sourced from https://webtips.dev/webtips/phaser/interactive-buttons-in-phaser3
        let startButton = this.add.text(120, 250, 'Play')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("Level1"); })
            .on('pointerover', () => startButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => startButton.setStyle({ fill: '#FFF' }))

        let optionsButton = this.add.text(120, 325, 'Options')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("OptionsMenu"); })
            .on('pointerover', () => optionsButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => optionsButton.setStyle({ fill: '#FFF' }))

        let creditsButton = this.add.text(120, 400, 'Credits')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("Credits"); })
            .on('pointerover', () => creditsButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => creditsButton.setStyle({ fill: '#FFF' }))

    }
    update(){}
}

class Level1 extends Phaser.Scene {

    constructor() {
        super('Level1');
    }

    preload() {
    }

    create(){
        //create text object
        this.textObject = this.add.text(
            250, //x
            300,//y
            "Level1 of Game goes here", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        let returnButton = this.add.text(40, 20, 'Return')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("MainMenu"); })
            .on('pointerover', () => returnButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => returnButton.setStyle({ fill: '#FFF' }))

    }

    update(){}
}

class OptionsMenu extends Phaser.Scene {

    constructor() {
        super('OptionsMenu');
    }

    preload() {
    }

    create(){
        //create text object
        this.textObject = this.add.text(
            250, //x
            300,//y
            "Game Options Here", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        let returnButton = this.add.text(40, 20, 'Return')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("MainMenu"); })
            .on('pointerover', () => returnButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => returnButton.setStyle({ fill: '#FFF' }))

    }



    update(){}
}

class Credits extends Phaser.Scene {

    constructor() {
        super('Credits');
    }

    preload() {
    }

    create(){
        //create text object
        this.textObject = this.add.text(
            250, //x
            50,//y
            "Game Credits: ", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            230, //x
            150,//y
            "Harrison Le: Core Gameplay ", //text
            {
                font: "25px Arial",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            200, //x
            250,//y
            "Brandon Christensen: Scene Flow", //text
            {
                font: "25px Arial",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            230, //x
            350,//y
            "Mark McAteer: Cinematics", //text
            {
                font: "25px Arial",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            250, //x
            450,//y
            "Jacob", //text
            {
                font: "25px Arial",
                color: "#ffffff",
            } //style
        );

        let returnButton = this.add.text(40, 20, 'Return')
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { this.scene.start("MainMenu"); })
            .on('pointerover', () => returnButton.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => returnButton.setStyle({ fill: '#FFF' }))

    }

    update(){}
}

// Config
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x000000",
    scene: [intro, Studio, MainMenu, Level1, OptionsMenu, Credits] 
}

let game = new Phaser.Game(config);