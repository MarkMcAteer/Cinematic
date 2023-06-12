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
            this.scene.start("Example")
        }, this)

    }

    update(){}
}


// Code sourced and editied from 
// https://labs.phaser.io/view.html?src=src/tweens/checkerboard%20rotate.js
class Example extends Phaser.Scene
{
    constructor ()
    {
        super("Example");
    }

    preload ()
    {
        this.load.image('block', 'assets/checkerboard.png');
    }

    create ()
    {
        const blocks = this.add.group({ key: 'block', repeat: 107 });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 12,
            height: 9,
            cellWidth: 74,
            cellHeight: 74
        });

        const a = [ 0, 90, 180, 270 ];

        blocks.children.iterate(child => {

            child.angle = Phaser.Math.RND.pick(a);

            this.tweens.add({
                targets: child,
                ease: 'Power1',
                duration: 250,
                delay: (Math.random() * 6000),
                repeatDelay: 3000 + (Math.random() * 6000),
                repeat: -1,
                angle: {

                    getEnd: (target, key, value) =>
                    {
                        var a = 90;

                        if (Math.random() > 0.5)
                        {
                            a = 180;
                        }

                        if (Math.random() > 0.5)
                        {
                            return target.angle + a;
                        }
                        else
                        {
                            return target.angle - a;
                        }
                    },

                    getStart: (target, key, value) =>
                    {
                        return target.angle;
                    }

                }

            });

            //create text object
            this.textObject = this.add.text(
                272, //x
                300,//y
                "Loading Game...", //text
                {
                    font: "40px Arial",
                    color: "#000000",
                } //style
            );

            this.time.addEvent({
                delay: 6500,
                callback: ()=>{
                    this.scene.start("MainMenu");
                },
                loop: false,
            })

        });
    }
}

class Loading extends Phaser.Scene {

    constructor() {
        super('Loading');
    }

    preload() {
    }

    create(){
        //create text object
        this.textObject = this.add.text(
            220, //x
            300,//y
            "Loading Game...", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.input.once('pointerdown', function() {
            this.scene.start("MainMenu")
        }, this)

    }

    update(){}
} 

// class sourced from https://webtips.dev/webtips/phaser/interactive-buttons-in-phaser3
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
            this.tweens.add({
                targets: title,
                x: '+=' + this.s,
                repeat: 4,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100
            });

        // Then later in one of your scenes, create a new button:
        const button = new Button(95, 250, 'Play', this, startGame);

        // Then later in one of your scenes, create a new button:
        const Options = new Button(110, 325, 'Options', this, () => console.log('game is started'));


        // Then later in one of your scenes, create a new button:
        const Credits = new Button(110, 400, 'Credits', this, () => console.log('game is started'));


        // Then later in one of your scenes, create a new button:
        const Quit = new Button(95, 475, 'Quit', this, () => console.log('game is started'));

    }
    update(){}
}

// Config
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x000000",
    scene: [intro, Loading, Example, MainMenu] 
}

let game = new Phaser.Game(config);



