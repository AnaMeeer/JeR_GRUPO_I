import Lunaran from '../gameObjects/lunaran.js';
import Balas from '../gameObjects/balas.js';
import Enemies from '../gameObjects/enemy.js';
import Lasers from '../gameObjects/laser.js';
import Barreras from '../gameObjects/barrera.js';
import Vidas from '../gameObjects/vidas.js';
import Barra from '../gameObjects/barra.js';

//variables
var tiempoActual;
var amountDamageBullet = 1; //una bala normal les hace 1 de daño.
var amountDamageLaser = 50; //el laser hace 50 de daño
var amountDamageElec = 0.5; //el rayo electrificante reduce la vida a la mitad
var amountDamageEnemy = 100;

class scene_Play extends Phaser.Scene {
    constructor() {
        super({ key: "scene_Play" });
    }


    create() {
        var that = this;

        let center_width = this.sys.game.config.width / 2;
        //Lunara
        this.player1 = new Lunaran(this, center_width - 10, 350, "lunaran");

        this.player2 = new Lunaran(this, center_width + 10, 350, "lunaran2");

        //Controles
        //Jugador 1
        this.cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);//power up
        this.cursor_e = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);//dash

        //Jugador 2
        this.cursor_i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.cursor_j = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.cursor_k = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.cursor_l = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.cursor_o = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);//dash
        this.cursor_u = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);//power up

        //Balas
        this.bullets = new Balas(this);

        this.input.keyboard.on("keydown_SPACE", () => {
            this.fireBullet(this.player1.x, this.player1.y);
        })
        this.fireRate = 4000;
        this.payerBulletYSpeed = -300;

        //PowerUp - Láser desintegrador.
        this.lasers = new Lasers(this);
        this.bulletSpeed = -1000;

        //PowerUp - Rezo desesperado.
        this.barreras = new Barreras(this);

        //Enemigos
        this.enemies = new Enemies(this);
        this.enemies.spawnEnemy(100, 100);

        //Vidas
        this.sistemaVida = new Vidas(this);
        this.sistemaVida.createHealthSistem(680, 465);
        this.input.keyboard.on("keydown_R", () => {     //para comprobar que funciona bien. Cambiarlo luego por una colision
            this.sistemaVida.damage(amountDamageEnemy);
        });

        //barras
        this.barraEnergia = new Barra(this, 0x0033ff);
        this.barraEnergia.createBar(20, 435, 100);  //Azul. Empieza vacía.
        this.barraDash = new Barra(this, 0xff7514);
        this.barraDash.createBar(20, 465, 0);   //Naranja. Empieza llena.

        //puntuacion
        this.puntos = 0;
        this.puntuacionText = this.add.bitmapText(16, 16, 'font', 'Score: 0', 18);

        this.input.keyboard.on("keydown_T", () => {     //cambiar por una colision
            this.puntos += 10;
            this.barraEnergia.increasePowerUp(10);
        });

        //Colisiones 
        function bulletEnemy(bullet, enemy){    //colision de la bala con el enemigo
            bullet.die();
            enemy.damageEnemy(amountDamageBullet);
            //that.puntos += 10;
            //that.puntuacionText.setText('Score: ' + that.puntos);
        }

        function laserEnemy(laser, enemy){      //colision del laser con el enemigo
            enemy.damageEnemy(amountDamageLaser);
            //that.puntos += 10;
            //that.puntuacionText.setText('Score: ' + that.puntos);
        }

        this.physics.add.overlap(this.bullets, this.enemies, bulletEnemy);  //colision con una bala
        this.physics.add.overlap(this.lasers, this.enemies, laserEnemy);    //colision con el laser

        //this.physics.add.overlap(this.bullets, this.enemy, killEnemy(this.enemy), null, this);

        //  this.variable = this.time.addEvent({
        //     delay: 500, callback: () => {

        //     }, callback: this
        // });


        //window.setInterval(this.bullets.fireBullet(), 1000, this.player1.x, this.player1.y);

        //shoot(this.time, this.bullets, this.player1);

        // Phaser.Game.timer.events.loop(Phaser.Timer.SECOND * 0.5, shoot, this);
        //this.secuenciaDisparo = new Phaser.time.events.loop(500, shoot(this.bullets, this.player1), this);
        // const config2 = {
        //     delay: 500,
        //     loop: true,
        //     callback: shoot(this.bullets, this.player1),
        //     callbackScope: this,
        //     startAt = 0,
        //     paused: false,
        //     hasDispatched = true
        // };
        //Phaser.Time.TimerEvent(500, shoot(this.bullets, this.player1), this);
        
    }

    update(time, delta) {
        //Controles
        //shoot(this.time, this.bullets, this.player1);
        //this.bullets.fireBullet(this.player1.x, this.player1.y);
         if(time > this.fireRate){
             this.bullets.fireBullet(this.player1.x, this.player1.y, 0, this.payerBulletYSpeed);    
             this.fireRate += 100;
         }

        //PowerUp: Laser desintegrador        
        if (this.cursor_q.isDown && (this.barraEnergia.value > 0)) {
                this.lasers.fireLaser(this.player1.x, this.player1.y, 0, this.bulletSpeed); 
                this.barraEnergia.decrease(0.33);  
        }

        //PowerUp: Rezo desesperado
        if (this.cursor_u.isDown) {
            if (this.barraEnergia.value === 100) {
                this.barreras.crearBarrera(this.player1.x, (this.player1.y - 20));
            }     
        }
        if (this.barreras.isAlive() == true) {
            this.barraEnergia.decrease(0.33);  
        }
        if (this.barraEnergia.value == 0) {
            this.barreras.killBarrier();
        }

        //Player 1
        if (this.cursor_a.isDown) {
            this.player1.body.setVelocityX(-200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityX(-1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_d.isDown) {
            this.player1.body.setVelocityX(200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityX(1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_w.isDown) {
            this.player1.body.setVelocityY(-200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityY(-1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_s.isDown) {
            this.player1.body.setVelocityY(200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityY(1000);
                this.barraDash.decrease(8);
            }
        }
        else {
            this.player1.body.setVelocity(0);
        }

        //Player 2
        if (this.cursor_k.isDown) {
            this.player2.body.setVelocityY(200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityY(1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_i.isDown) {
            this.player2.body.setVelocityY(-200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityY(-1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_l.isDown) {
            this.player2.body.setVelocityX(200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityX(1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_j.isDown) {
            this.player2.body.setVelocityX(-200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityX(-1000);
                this.barraDash.decrease(8);
            }
        }
        else {
            this.player2.body.setVelocity(0);
        }

        //Barras
        if (this.cursor_e.isUp) {
            this.barraDash.increaseDash();
        }

        //Puntuacion
        this.puntuacionText.setText('Score: ' + this.puntos);
    }
}

export default scene_Play;