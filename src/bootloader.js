
class Bootloader extends Phaser.Scene {
    constructor(){
        super({key: "Bootloader"});
    }

    preload(){
        this.load.on("complete", () => {
            this.scene.start("scene_Play");
        })

        this.load.image("lunaran", "./assets/nave.png");
        this.load.image("lunaran2", "./assets/nave2.png");
        this.load.image("malo","./assets/star.png");
        
    }

}
export default Bootloader;