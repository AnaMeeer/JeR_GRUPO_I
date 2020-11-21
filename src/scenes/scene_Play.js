import Lunaran from '../gameObjects/lunaran.js';

class scene_Play extends Phaser.Scene{
    constructor(){
        super({key: "scene_Play"});
    }
    
    create(){

        let center_width = this.sys.game.config.width/2;
        //Lunara
        this.player1 = new Lunaran(this, center_width - 10, 350, "lunaran");

        this.player2 = new Lunaran(this, center_width + 10, 350, "lunaran2");
        
        //Controles
        //Jugador 1
        this.cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_e = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.cursor_q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        //Jugador 2
        this.cursor_i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.cursor_j = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.cursor_k = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.cursor_l = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.cursor_o = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.cursor_u = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    }

    update(){
        //Controles
        //Player 1
        if(this.cursor_a.isDown){
            this.player1.body.setVelocityX(-200);
        }
        else if(this.cursor_d.isDown){
            this.player1.body.setVelocityX(200);
        }
        else if(this.cursor_w.isDown){
            this.player1.body.setVelocityY(-200);
        }
        else if(this.cursor_s.isDown){
            this.player1.body.setVelocityY(200);
        }
        else{
            this.player1.body.setVelocity(0);
        }

        //Player 2
        if(this.cursor_k.isDown){
            this.player2.body.setVelocityY(200);
        }
        else if(this.cursor_i.isDown){
            this.player2.body.setVelocityY(-200);
        }
        else if(this.cursor_l.isDown){
            this.player2.body.setVelocityX(200);
        }
        else if(this.cursor_j.isDown){
            this.player2.body.setVelocityX(-200);
        }
        else{
            this.player2.body.setVelocity(0);
        }

    }

}

export default scene_Play;