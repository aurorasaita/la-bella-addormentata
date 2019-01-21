var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render});

var player;
var unità = 32;
var danno = 2;
var velocity = 150;
var velocityy = 250;
var inizioAnimazione;
var altezzaPrecedente;
var animationActive = false;
var danneggiamento = false;
var sx = false;
var portasi = true;
var portasi1 = true;
var alabarda = false;
var respawnX = 2*unità;
var respawnY = 5*unità;
var salto = true;
var dialogoiniziale = true;
var dialogo = 0;
var pronto;
var catturato=false;

function preload() {
}

var StartState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/copertina.png');
        game.load.spritesheet('bottInizia', 'assets/bottInizia.png', 263, 77);
        game.load.spritesheet('bottCrediti', 'assets/bottCrediti.png', 263, 76);
        game.load.spritesheet('bottAutori', 'assets/bottAutori.png', 263, 76);
    },

    create: function() {
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true; this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        bottAutori = game.add.sprite(50, 50, 'bottAutori');
        bottAutori.inputEnabled = true;
        bottAutori.scale.setTo(0.5,0.5);
        bottAutori.events.onInputDown.add(this.bottAutoriClick, this);
        bottCrediti = game.add.sprite(200, 50, 'bottCrediti');
        bottCrediti.inputEnabled = true;
        bottCrediti.scale.setTo(0.5,0.5);
        bottCrediti.events.onInputDown.add(this.bottCreditiClick, this);
        bottInizia = game.add.sprite(620, 600, 'bottInizia');
        bottInizia.inputEnabled = true;
        bottInizia.scale.setTo(0.5,0.5);
        bottInizia.frame = 1;
        bottInizia.events.onInputDown.add(this.bottIniziaClick, this);
    },

    bottAutoriClick: function(pointer) {
        game.state.start('Autori');
    },

    bottCreditiClick: function(pointer) {
        game.state.start('Crediti');
    },

    bottIniziaClick: function(pointer) {
        game.state.start('Storia1');
    },

}

var CreditiState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/crediti.png');
        game.load.spritesheet('bottHome', 'assets/bottHome.png', 263, 76);
        game.load.spritesheet('bottCrediti', 'assets/bottCrediti.png', 263, 76);
        game.load.spritesheet('bottAutori', 'assets/bottAutori.png', 263, 76);
    },

    create: function() {
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true; this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        bottAutori = game.add.sprite(50, 50, 'bottAutori');
        bottAutori.inputEnabled = true;
        bottAutori.scale.setTo(0.5,0.5);
        bottAutori.events.onInputDown.add(this.bottAutoriClick, this);
        bottCrediti = game.add.sprite(200, 50, 'bottCrediti');
        bottCrediti.scale.setTo(0.5,0.5);
        bottCrediti.frame = 1;
        bottHome = game.add.sprite(843, 50, 'bottHome');
        bottHome.scale.setTo(0.5,0.5);
        bottHome.inputEnabled = true;
        bottHome.events.onInputDown.add(this.bottHomeClick, this);
    },

    bottAutoriClick: function(pointer){
        game.state.start('Autori');
    },

    bottHomeClick: function(pointer){
        game.state.start('Start');
    }

}

var AutoriState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/autori.png');
        game.load.spritesheet('bottHome', 'assets/bottHome.png', 263, 76);
        game.load.spritesheet('bottCrediti', 'assets/bottCrediti.png', 263, 76);
        game.load.spritesheet('bottAutori', 'assets/bottAutori.png', 263, 76);
    },

    create: function() {
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true; this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        bottAutori = game.add.sprite(50, 50, 'bottAutori');
        bottAutori.scale.setTo(0.5,0.5);
        bottAutori.frame = 1;
        bottCrediti = game.add.sprite(200, 50, 'bottCrediti');
        bottCrediti.inputEnabled = true;
        bottCrediti.scale.setTo(0.5,0.5);
        bottCrediti.events.onInputDown.add(this.bottCreditiClick, this);
        bottHome = game.add.sprite(843, 50, 'bottHome');
        bottHome.scale.setTo(0.5,0.5);
        bottHome.inputEnabled = true;
        bottHome.events.onInputDown.add(this.bottHomeClick, this);
    },

    bottCreditiClick: function(pointer) {
        game.state.start('Crediti');
    },

    bottHomeClick: function(pointer) {
        game.state.start('Start');
    }

}

game.state.add('Start', StartState);
game.state.add('Crediti', CreditiState);
game.state.add('Autori', AutoriState);

var Storia1State = {
    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/storia1.png');
        game.load.image('dida1', 'assets/dida1.png');
    },

    create: function() {

      game.world.setBounds(0,0,1024, 768);
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        image.inputEnabled = true;
        image.events.onInputDown.add(this.appariDialoghi, this);
        dida1 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida1');
        dida1.anchor.set(0.5);
        dida1.alpha = 0;
    },

    appariDialoghi: function(pointer) {

        if (dida1.alpha === 1) {
        game.state.start('Storia2');
                  }
        if (dida1.alpha ===0) {
        dida1.alpha = 1;
        }
      }
    }

    var Storia2State = {
        preload: function() {
            game.load.crossOrigin = 'anonymous';
            game.load.image('open', 'assets/storia2.png');
            game.load.image('dida2', 'assets/dida2.png');
        },

        create: function() {

          game.world.setBounds(0,0,1024, 768);
          this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
            image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
            image.anchor.set(0.5);
            image.inputEnabled = true;
            image.events.onInputDown.add(this.appariDialoghi, this);
            dida2 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida2');
            dida2.anchor.set(0.5);
            dida2.alpha = 0;
        },

        appariDialoghi: function(pointer) {

            if (dida2.alpha === 1) {
            game.state.start('Storia3');
                      }
            if (dida2.alpha ===0) {
            dida2.alpha = 1;
            }
          }
        }

        var Storia3State = {
            preload: function() {
                game.load.crossOrigin = 'anonymous';
                game.load.image('open', 'assets/storia3.png');
                game.load.image('dida3', 'assets/dida3.png');
            },

            create: function() {

              game.world.setBounds(0,0,1024, 768);
              this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
                image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
                image.anchor.set(0.5);
                image.inputEnabled = true;
                image.events.onInputDown.add(this.appariDialoghi, this);
                dida3 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida3');
                dida3.anchor.set(0.5);
                dida3.alpha = 0;
            },

            appariDialoghi: function(pointer) {

                if (dida3.alpha === 1) {
                game.state.start('Storia4');
                          }
                if (dida3.alpha ===0) {
                dida3.alpha = 1;
                }
              }
            }

            var Storia4State = {
                preload: function() {
                    game.load.crossOrigin = 'anonymous';
                    game.load.image('open', 'assets/storia4.png');
                    game.load.image('dida4', 'assets/dida4.png');
                },

                create: function() {

                  game.world.setBounds(0,0,1024, 768);
                  this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
                    image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
                    image.anchor.set(0.5);
                    image.inputEnabled = true;
                    image.events.onInputDown.add(this.appariDialoghi, this);
                    dida4 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida4');
                    dida4.anchor.set(0.5);
                    dida4.alpha = 0;
                },

                appariDialoghi: function(pointer) {

                    if (dida4.alpha === 1) {
                    game.state.start('Storia5');
                              }
                    if (dida4.alpha ===0) {
                    dida4.alpha = 1;
                    }
                  }
                }

                var Storia5State = {
                    preload: function() {
                        game.load.crossOrigin = 'anonymous';
                        game.load.image('open', 'assets/storia5.png');
                        game.load.image('dida5', 'assets/dida5.png');
                    },

                    create: function() {

                      game.world.setBounds(0,0,1024, 768);
                      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
                        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
                        image.anchor.set(0.5);
                        image.inputEnabled = true;
                        image.events.onInputDown.add(this.appariDialoghi, this);
                        dida5 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida5');
                        dida5.anchor.set(0.5);
                        dida5.alpha = 0;
                    },

                    appariDialoghi: function(pointer) {

                        if (dida5.alpha === 1) {
                        game.state.start('Storia6');
                                  }
                        if (dida5.alpha ===0) {
                        dida5.alpha = 1;
                        }
                      }
                    }

                    var Storia6State = {
                        preload: function() {
                            game.load.crossOrigin = 'anonymous';
                            game.load.image('open', 'assets/storia6.png');
                            game.load.image('dida6', 'assets/dida6.png');
                        },

                        create: function() {

                          game.world.setBounds(0,0,1024, 768);
                          this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
                            image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
                            image.anchor.set(0.5);
                            image.inputEnabled = true;
                            image.events.onInputDown.add(this.appariDialoghi, this);
                            dida6 = game.add.sprite(game.world.centerX, game.world.centerY, 'dida6');
                            dida6.anchor.set(0.5);
                            dida6.alpha = 0;
                        },

                        appariDialoghi: function(pointer) {

                            if (dida6.alpha === 1) {
                            game.state.start('Game1');
                                      }
                            if (dida6.alpha ===0) {
                            dida6.alpha = 1;
                            }
                          }
                        }

game.state.add('Storia1', Storia1State);
game.state.add('Storia2', Storia2State);
game.state.add('Storia3', Storia3State);
game.state.add('Storia4', Storia4State);
game.state.add('Storia5', Storia5State);
game.state.add('Storia6', Storia6State);

var Game1State = {

    preload: function(){

      game.load.image('sfondo', 'assets1/sfondo1.png');

        game.load.spritesheet('aurora', 'assets1/aurora.png', 38, 38);
        game.load.spritesheet('malefica', 'assets1/malefica.png', 38,38);
        game.load.spritesheet('enemy1', 'assets1/guardia.png', 34, 32);
        game.load.spritesheet('enemy2', 'assets1/guardia pozione.png', 32, 34);

        game.load.image('comandi1', 'assets1/CAMMINA.png');
        game.load.image('comandi2', 'assets1/ATTACCA.png');
        game.load.image('comandi3', 'assets1/SALTA.png');
        game.load.image('comandi4', 'assets1/KO.png');

        game.load.image('spara', 'assets1/bullet.png');

        game.load.image('platform', 'assets1/platform.png');

        game.load.spritesheet('torcia', 'assets1/torcia.png', 27, 79);
        game.load.image('finestra', 'assets1/arazzo.png');
        game.load.image('finestra2', 'assets1/arazzo2.png');
        game.load.spritesheet('porta', 'assets1/animazione porta.png', 105.75, 163);
        game.load.image('portatrasparente', 'assets1/portatrasparente.png');

        game.load.image('punte', 'assets1/punte.png');
        game.load.image('eroe', 'assets1/unicoverore.png');

        game.load.spritesheet('vite', 'assets1/cuori.png', 13, 13);
        game.load.spritesheet('contatoreAurora', 'assets1/aurtutta.png', 64, 64);

        game.load.tilemap('mappa', 'tilelev1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets1/tiles.png');
        game.load.image('tiles1', 'assets1/tiles1.png');
        game.load.image('tiles2', 'assets1/tiles2.png');

        game.load.image('dialogo1', 'assets1/dialogo1.png');
        game.load.image('dialogo2', 'assets1/dialogo2.png');
        game.load.image('dialogoGuardia', 'assets1/dialogoGuardia.png');

    },

    create: function(){

        game.world.setBounds(0,0,3200,3200);

sfondo = game.add.sprite (0, 0, 'sfondo');

      torce1 = game.add.sprite(38*unità, 74*unità, 'torcia');
      torce2 = game.add.sprite(48*unità, 74*unità, 'torcia');
      torce3 = game.add.sprite(58*unità, 74*unità, 'torcia');
      torce4 = game.add.sprite(68*unità, 74*unità, 'torcia');
      torce5 = game.add.sprite(38*unità, 90*unità, 'torcia');
      torce6 = game.add.sprite(48*unità, 90*unità, 'torcia');
      torce7 = game.add.sprite(58*unità, 90*unità, 'torcia');
      torce8 = game.add.sprite(68*unità, 90*unità, 'torcia');
      torce1.animations.add('animtorc', 0, 1, 2, 3, true);
      torce1.animations.play('animtorc', 3, true);
      torce2.animations.add('animtorc', 0, 1, 2, 3, true);
      torce2.animations.play('animtorc', 3, true);
      torce3.animations.add('animtorc', 0, 1, 2, 3, true);
      torce3.animations.play('animtorc', 3, true);
      torce4.animations.add('animtorc', 0, 1, 2, 3, true);
      torce4.animations.play('animtorc', 3, true);
      torce5.animations.add('animtorc', 0, 1, 2, 3, true);
      torce5.animations.play('animtorc', 3, true);
      torce6.animations.add('animtorc', 0, 1, 2, 3, true);
      torce6.animations.play('animtorc', 3, true);
      torce7.animations.add('animtorc', 0, 1, 2, 3, true);
      torce7.animations.play('animtorc', 3, true);
      torce8.animations.add('animtorc', 0, 1, 2, 3, true);
      torce8.animations.play('animtorc', 3, true);

      finestre = game.add.physicsGroup();
      finestre.create(13*unità, 26*unità, 'finestra');
      finestre.create(13.5*unità, 5*unità, 'finestra');
      finestre.create(13*unità, 66*unità, 'finestra2');
      finestre.create(4*unità, 66*unità, 'finestra2');
      finestre.setAll('body.immovable', true);

      re = game.add.sprite(12*unità, 47*unità, 'eroe')

comandi1= game.add.sprite (6.7*unità, 4*unità, 'comandi1');
comandi1.scale.setTo(1.5,1.5);
comandi1.alpha=1;
comandi2= game.add.sprite (8.5*unità, 76*unità, 'comandi2');
comandi2.scale.setTo(1.5,1.5);
comandi2.alpha=0;
comandi3= game.add.sprite (10.7*unità, 4*unità, 'comandi3');
comandi3.scale.setTo(1.5,1.5);
comandi3.alpha=1;
comandi4= game.add.sprite (3*unità, 26*unità, 'comandi4');
comandi4.scale.setTo(1.5,1.5);

        map = game.add.tilemap('mappa');
        map.addTilesetImage('terreno','tiles');
        map.addTilesetImage('tiles1','tiles1');
        map.addTilesetImage('tiles2','tiles2');
        layer = map.createLayer('livello1');
        map.setCollisionBetween(1, 100);


      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();








        porta1 = game.add.sprite(569, 2368, 'porta');
        porta1.animations.add('apriporta1', [0, 1, 2, 3], 15, true);
        porta1.frame = 0;
        porta1.scale.setTo(0.97,0.97);

        portaInizio = game.add.sprite(2*unità, 4*unità-18, 'porta');
        portaInizio.frame = 3;
        portaInizio.scale.setTo(0.7,0.7);

        porta2 = game.add.sprite(2553, 2368,  'porta');
        porta2.animations.add('apriporta2', [0, 1, 2, 3], 15, true);
        porta2.scale.setTo(0.97,0.97);


        player = game.add.sprite(respawnX, respawnY, 'aurora');
        player.scale.setTo(1.7,1.7);
        player.alpha = 1;
        game.physics.arcade.enable(player);
        player.body.gravity.y = 400;
        player.animations.add('left1', [2, 3], 5, true);
        player.animations.add('right1', [0, 1], 5, true);
        player.animations.add('left2', [6, 7], 5, true);
        player.animations.add('right2', [4, 5], 5, true);
        player.animations.add('attLeft', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true);
        player.animations.add('attRight', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);
        player.animations.add('saltoAttLeft', [36, 37, 38, 39, 40, 41, 42, 43, 44], 5, true);
        player.animations.add('saltoAttRight', [27, 28, 29, 30, 31, 32, 33, 34, 35], 5, true);
        player.animations.add('saltoLeft1', [48, 49, 50], 5, false);
        player.animations.add('saltoRight1', [45, 46, 47], 5, false);
        player.animations.add('saltoLeft2', [36], 5, false);
        player.animations.add('saltoRight2', [27], 5, false);
        player.animations.add('morteLeft', [58, 59, 60, 61], 2, true);
        player.animations.add('morteRight', [54, 55, 56, 57], 2, true);

        proiettili = game.add.group();
        proiettili.enableBody = true;

        enemy1 = game.add.sprite(80, 850, 'enemy2');
        enemy1.scale.setTo(1.9, 1.9);
        enemy1.animations.add('lancia', [3,4,0,0,1,2], 2, true);
        enemy1.animations.play('lancia');
        enemy2 = game.add.sprite(80, 1790, 'enemy2');
        enemy2.animations.add('lancia', [4,0,0,1,2,3], 3, true);
        enemy2.animations.play('lancia');
        enemy2.scale.setTo(1.9,1.9);
        enemy3 = game.add.sprite(80, 2410, 'enemy1');
       enemy3.animations.add('enemy3left', [0,1], 5, true);
       enemy3.animations.add('enemy3right', [2,3], 5, true);
        enemy3.scale.setTo(1.9,1.9);
        enemy4 = game.add.sprite(1024, 2600, 'enemy2');
        enemy4.animations.add('lancia', [8,9,5,5,6,7], 1.5, true);
        enemy4.animations.play('lancia');
        enemy4.scale.setTo(1.9,1.9);

        game.physics.arcade.enable(enemy1);
        game.physics.arcade.enable(enemy2);
        game.physics.arcade.enable(enemy3);
        game.physics.arcade.enable(enemy4);

        enemy1.body.collideWorldBounds = true;
        enemy2.body.collideWorldBounds = true;
        enemy3.body.collideWorldBounds = true;
        enemy4.body.collideWorldBounds = true;

        enemy1.body.immovable = true;
        enemy2.body.immovable = true;
        enemy3.body.immovable = true;
        enemy4.body.immovable = true;

        enemy1.body.gravity.y = 350;
        enemy2.body.gravity.y = 350;
        enemy3.body.gravity.y = 350;
        enemy4.body.gravity.y = 350;

        enemy1.shooting = true;
        enemy2.shooting = true;
        enemy4.shooting = true;

        game.camera.follow(player);

        timerMorte = function(){
          endGame();
         velocityy=250;
         velocity = 150;
         player.tint = 0xFFFFFF;
         if(respawnX===160){
           porta1.frame=3;
         }
      }

        morte = function() {
             velocity=0;
             velocityy=0;
              game.time.events.add(200, timerMorte);
        }

        endGame = function() {
          animationActive=false;
          portasi = true;

          player.kill();
          this.game.state.start('Bad');
        }

        goodGame = function() {
          this.game.state.start('Good');
        }

        portatrasparente = game.add.sprite(18*unità-8, 2368, 'portatrasparente');
        portatrasparente.alpha = 0;

        game.physics.arcade.enable(portatrasparente);
        portatrasparente.body.immovable = true;
        portatrasparente.body.collideWorldBounds = true;

        malefica = game.add.sprite(3104, 2451, 'malefica');
        game.physics.arcade.enable(malefica);
        malefica.scale.setTo(2,2);
        malefica.body.immovable = true;
        malefica.body.collideWorldBounds = true;
        malefica.animations.add('folgorantemagiabellacara', [0,1], 4, true);
        malefica.animations.play('folgorantemagiabellacara');

        platform1 = game.add.sprite(127, 640, 'platform');
        platform2 = game.add.sprite(127, 1248, 'platform');
        platform3 = game.add.sprite(321, 1408, 'platform');
        platform4 = game.add.sprite(224, 1855, 'platform');

        game.physics.arcade.enable(platform1);
        game.physics.arcade.enable(platform2);
        game.physics.arcade.enable(platform3);
        game.physics.arcade.enable(platform4);

        platform1.body.immovable = true;
        platform2.body.immovable = true;
        platform2.body.collideWorldBounds = true;
        platform3.body.immovable = true;
        platform3.body.collideWorldBounds = true;
        platform4.body.immovable = true;
        platform4.body.collideWorldBounds = true;
        player.checkWorldBounds = true;
        player.events.onOutOfBounds.add(morte, this);

        cursors = game.input.keyboard.createCursorKeys();
        animazione = game.input.keyboard.addKey(Phaser.KeyCode.A);

        platforms1 = game.add.group();
        platforms1.enableBody = true;
        game.physics.arcade.enable(platforms1);

        game.time.events.loop(3000, timer1);
        function timer1() {
          if(enemy1.shooting){
             var spara = proiettili.create(100, 850, 'spara');
             spara.body.velocity.y = -320;
             spara.body.velocity.x = 100;
             spara.body.gravity.y = 85;
             spara.scale.setTo(1, 1);
          }
        }

        game.time.events.loop(2000, timer2);
        function timer2() {
          if(enemy2.shooting){
             var spara = proiettili.create(80, 1800, 'spara');
             spara.body.velocity.x = 300;
             spara.scale.setTo(1, 1);
          }
        }

       game.time.events.loop(4000, timer3);
       function timer3() {
         if(enemy4.shooting){
            var spara = proiettili.create(1024, 2656, 'spara');
            spara.body.velocity.y = -250;
            spara.body.velocity.x = -80;
            spara.body.gravity.y = 85;
            spara.scale.setTo(1, 1);
         }
       }

       game.time.events.loop(2000, timer4);
       function timer4() {
         var sali = platforms1.create(1312, 3200, 'platform');
         sali.body.velocity.y = -150;
         sali.body.immovable = true;
       }

       game.time.events.loop(2000, timer5);
       function timer5() {
         var sali = platforms1.create(1632, 2144, 'platform');
         sali.body.velocity.y = 150;
         sali.body.immovable = true;
       }

       game.time.events.loop(2000, timer6);
       function timer6() {
         var sali = platforms1.create(1954, 3200, 'platform');
         sali.body.velocity.y = -150;
         sali.body.immovable = true;
       }

       punte = game.add.sprite(1248, 2142, 'punte');
       game.physics.arcade.enable(punte);
       punte.body.immovable = true;
       punte.body.collideWorldBounds = true;

       vita1 = game.add.sprite (900, 30, 'vite');
       vita1.scale.setTo(2.5,2.5);
       vita1.frame = 0;
       vita1.fixedToCamera = true;
       vita1.alpha = 1;

       vita2 = game.add.sprite (940, 30, 'vite');
       vita2.scale.setTo(2.5,2.5);
       vita2.frame = 0;
       vita2.fixedToCamera = true;
       vita2.alpha = 1;

       contatoreAurora = game.add.sprite (905, 80, 'contatoreAurora');
       contatoreAurora.frame = 6;
       contatoreAurora.animations.add('animTimer', [0, 1, 2, 3, 4, 5, 6], true);
       contatoreAurora.fixedToCamera = true;
       contatoreAurora.alpha = 1;

       dialogo1 = game.add.sprite(212, 130, 'dialogo1');
       dialogo1.alpha = 0;
       dialogo2 = game.add.sprite(212, 430, 'dialogo2');
       dialogo2.alpha = 0;
       dialogoGuardia = game.add.sprite(212, 430, 'dialogoGuardia');
       dialogoGuardia.alpha = 0;
       dialogoGuardia.fixedToCamera = true;

       if (dialogoiniziale === true){
       game.paused = true;
       vita1.alpha = 0;
       vita2.alpha = 0;
       contatoreAurora.alpha = 0;
       player.alpha = 0;
       comandi1.alpha = 0;
       comandi3.alpha = 0;
     };


     game.input.onDown.add(unpause, self);

    // And finally the method that handels the pause menu
    function unpause(event){
        // Only act if paused
        if(game.paused){
            // Calculate the corners of the menu
            if (dialogo === 2) {
           dialogoiniziale = false;
             dialogo2.alpha = 0;
             dialogo1.alpha = 0;
             game.paused = false;
             vita1.alpha = 1;
             vita2.alpha = 1;
             contatoreAurora.alpha = 1;
             player.alpha = 1;
             comandi1.alpha = 1;
             comandi3.alpha = 1;
              }

           if (dialogo === 1) {

                           dialogo2.alpha = 1;
                              dialogo = 2;

                  }
              if (dialogo === 0) {
                dialogo1.alpha = 1;
                dialogo = 1;
               }
            }
        }

    },


    update: function() {

      enemy1.body.setSize(24,30,1,3);
      enemy2.body.setSize(24,30,1,3);
      enemy3.body.setSize(28,31,4,1);
      enemy4.body.setSize(24,30,7,3);

       game.physics.arcade.collide(player, layer);
       game.physics.arcade.collide(player, portatrasparente);
       game.physics.arcade.collide(enemy1, layer);
       game.physics.arcade.collide(enemy2, layer);
       game.physics.arcade.collide(enemy3, layer);
       game.physics.arcade.collide(enemy4, layer);
       game.physics.arcade.collide(player, platforms1);

       patrol(platform1);
       patrol(platform2);
       patrol(platform3);
       patrol4(enemy3);
       patrol2(platform4);

       combattimentoEnemy4();

       catturata();

       game.physics.arcade.collide(platform1, proiettili, this.collisionePiattaforma);
       game.physics.arcade.collide(proiettili, layer, this.collisioneMuri);
       game.physics.arcade.collide(player, punte, collisionePunte);
       game.physics.arcade.collide(player, malefica, this.collisioneMalefica);
       game.physics.arcade.collide(platforms1, layer, this.piattaformeCollisioneMuri);

       game.physics.arcade.collide(player, platform1);
       game.physics.arcade.collide(player, platform2);
       game.physics.arcade.collide(player, platform3);
       game.physics.arcade.collide(player, platform4);

       game.physics.arcade.overlap(player, proiettili, collisioneProiettili);
       game.physics.arcade.collide(player, enemy1, overlapHandler1);
       game.physics.arcade.collide(player, enemy2, overlapHandler2);
       game.physics.arcade.collide(player, enemy3, overlapHandler3);
       game.physics.arcade.collide(player, enemy4, collisioneEnemy4);

       calcolaDannoCaduta();
       openPorta2(porta2);

       morte();
       contatoreVite();
       aperturaPorta1(porta1);

       if (alabarda === false) {
       if (sx === true) {
         player.body.setSize(20, 34, 10, 3);

       }
       if (sx === false) {
         player.body.setSize(20, 34, 8, 3);

       }
     }

     if (alabarda === true) {
       if (sx === true) {
         player.body.setSize(26, 34, 10, 3);

       }
       if (sx === false) {
         player.body.setSize(26, 34, 2, 3);

       }
     }


       if(player.body.onFloor() || player.body.touching.down)
          altezzaPrecedente = player.body.position.y;

       player.body.velocity.x = 0;

       if (player.body.onFloor() || player.body.touching.down){
         salto = true;
       }
       if (!player.body.onFloor() && !player.body.touching.down && sx===false && cursors.left.isDown){
         salto = true;
       }
       if (!player.body.onFloor() && !player.body.touching.down && sx===true && cursors.right.isDown){
         salto = true;
       }

       if(cursors.left.isDown && danno>0){
          player.body.velocity.x = -velocity;
          sx = true;
       }
       if(cursors.right.isDown && danno>0){
          player.body.velocity.x = velocity;
          sx = false;
       }

       if (cursors.up.isDown && (player.body.onFloor() || player.body.touching.down)){
       player.body.velocity.y = -velocityy;
       }

       if(danno<1){
         if(sx===true){
           player.animations.play('morteLeft')
         }
         if(sx===false){
           player.animations.play('morteRight')
         }
       }
       else if (danno > 0) {

         if (alabarda === false) {
           if (!animationActive) {
             if (player.body.onFloor() || player.body.touching.down){
               if (sx === true) {
                 if(player.body.velocity.x<0){
                 player.animations.play('left1');
               }
               else if(player.body.velocity.x===0){
                   player.animations.stop();
                   player.frame=2;
               }
               }
               else if (sx === false) {
                 if(player.body.velocity.x>0){
                 player.animations.play('right1');
               }
               else if(player.body.velocity.x===0){
                   player.animations.stop();
                   player.frame=0;
               }
               }
             }
             else if (!player.body.onFloor() && !player.body.touching.down) {
               if (salto===true){
               if (sx === true) {
                 player.animations.play('saltoLeft1');
                 salto=false;
               }
               else if (sx === false) {
                 player.animations.play('saltoRight1');
                 salto=false;
               }
             }
             }
           }
        }

        else if (alabarda === true) {
          if (!animationActive) {
            if (player.body.onFloor() || player.body.touching.down){
              if (sx === true) {
                if(player.body.velocity.x<0){
                player.animations.play('left2');
              }
              else if(player.body.velocity.x===0){
                  player.animations.stop();
                  player.frame=6;
              }
              }
              else if (sx === false) {
                if(player.body.velocity.x>0){
                player.animations.play('right2');
              }
              else if(player.body.velocity.x===0){
                  player.animations.stop();
                  player.frame=4;
              }
              }
            }
            else if (!player.body.onFloor() && !player.body.touching.down) {
              if (sx === true) {
                player.animations.play('saltoLeft2');
              }
              else if (sx === false) {
                player.animations.play('saltoRight2');
              }
            }
          }
         else if (animationActive) {
           if (player.body.onFloor() || player.body.touching.down){
             if (sx === true) {
               player.animations.play('attLeft');
             }
             else if (sx === false) {
               player.animations.play('attRight');
             }
           }
           else if (!player.body.onFloor() && !player.body.touching.down) {
             if (sx === true) {
               player.animations.play('saltoAttLeft');
             }
             else if (sx === false) {
               player.animations.play('saltoAttRight');
             }
           }
        }
      }
}

       this.salvaTempo();

       function catturata(){
         if(catturato === true){
           dialogoGuardia.alpha=1;
           catturato=false;
         }
       }

       function danneggiato() {
          if(!danneggiamento) {
            player.tint = 0xC83E7F;
             danneggiamento = true;
             danno--;
             game.time.events.add(1200, timerDanno);
             function timerDanno() {
               danneggiamento=false;
               player.tint = 0xFFFFFF;
             }
          }
       }

       function timerMorte(){
         endGame();
        velocityy=250;
        velocity = 150;
        player.tint = 0xFFFFFF;
     }

       function morte() {
          if(danno===0){
            velocity=0;
            velocityy=0;
             game.time.events.add(2000, timerMorte);
          }
       }

       function contatoreVite() {
          if(danno===2) {
             vita1.frame = 0;
             vita2.frame = 0;
          }
          if(danno===1) {
             vita1.frame = 0;
             vita2.frame = 1;
          }
          if(danno<1) {
             vita1.frame = 1;
             vita2.frame = 1;
          }
       }


         function calcolaDannoCaduta() {
              if((player.body.onFloor() || player.body.touching.down) && (altezzaPrecedente - player.body.position.y < -300)){
                 danneggiato();}
              }



      function    collisioneProiettili (player, spara) {
                 spara.kill();
                 danneggiato();
                 velocity -=100;
                 contatoreAurora.animations.play('animTimer');
                 player.animations._anims.left1.speed = 2 ;
                 player.animations._anims.right1.speed = 2 ;
                 player.animations._anims.left2.speed = 2 ;
                 player.animations._anims.right2.speed = 2 ;
                 if (danno<1){
                   catturato=true;
                 }
                 if(danno===1){
                    game.time.events.add(6000, timer7);
                    function timer7() {
                       velocity +=100;
                       player.animations._anims.left1.speed = 5;
                       player.animations._anims.right1.speed = 5;
                       player.animations._anims.left2.speed = 5;
                       player.animations._anims.right2.speed = 5;
                       contatoreAurora.frame = 6;
                    }
                 }
                 }


       function overlapHandler1(player, enemy1) {
          if(player.body.touching.down) {
             enemy1.shooting = !enemy1.shooting;
             enemy1.kill();
          }
          if(player.body.touching.down===false) {
             danneggiato();
          }
          if(danno === 0){
            catturato=true;
          }
       }

       function collisioneEnemy4(player, enemy4) {
          if(animationActive === true) {
             uccidiEnemy4();
          }
          else{
             if(player.body.touching.down) {
               uccidiEnemy4();
             }
             if(player.body.touching.down===false){
               danneggiato();
             }
             if(danno === 0){
               catturato=true;
             }
          }
       }

       function  overlapHandler2(player, enemy2) {
          if(player.body.touching.down) {
             enemy2.shooting = !enemy2.shooting;
             enemy2.kill();
          }
          if(player.body.touching.down===false){
             danneggiato();}
             if(danno === 0){
               catturato=true;
             }
          }


       function  overlapHandler3(player, enemy3) {
          if(player.body.touching.down) {
             enemy3.kill();

             alabarda = true;
             respawnX = 160;
             respawnY = 2410;

          }
          if(player.body.touching.down===false){
             danneggiato();}
             if(danno === 0){
               catturato=true;
             }
          }

      function uccidiEnemy4() {
          enemy4.shooting = !enemy4.shooting;
          enemy4.kill();
      }

      function combattimentoEnemy4(){
         if(animazione.isDown && !animationActive && alabarda === true){
            animationActive = true;
            game.time.events.add(800, timer8);
         }
      }

      function timer8() {
         if(animationActive === true){
            animationActive = false;}
      }

      function patrol(platform1) {
         if(platform1.body.position.x < 128)
            platform1.body.velocity.x = 100;
         if(platform1.body.position.x > 320)
            platform1.body.velocity.x = -100;
      }

      function patrol(platform2) {
         if(platform2.body.position.x < 128)
            platform2.body.velocity.x = 100;
         if(platform2.body.position.x > 320)
            platform2.body.velocity.x = -100;
      }

      function patrol(platform3) {
         if(platform3.body.position.x < 128)
            platform3.body.velocity.x = 100;
         if(platform3.body.position.x > 320)
            platform3.body.velocity.x = -100;
      }

      function patrol2(platform4) {
         if(platform4.body.position.y < 1856)
            platform4.body.velocity.y = 100;
         if(platform4.body.position.y > 2304)
            platform4.body.velocity.y = -100;
       }

       function  patrol4(enemy3) {
         if(enemy3.body.position.x < 100) {
            enemy3.body.velocity.x = 30;
            enemy3.animations.play('enemy3right');
}
         if(enemy3.body.position.x > 320){
            enemy3.body.velocity.x = -30;
            enemy3.animations.play('enemy3left');
}
       }

       function  aperturaPorta1 (porta1) {
          if(alabarda === true && portasi1===true) {
porta1.animations.play('apriporta1');
          game.time.events.add(200, timerporta1);
          function timerporta1() {
            porta1.animations.stop('apriporta1');
            porta1.frame = 3;
            portatrasparente.kill();
            comandi2.alpha=1;
            portasi1=false;
          }
        }
          if(alabarda === true && portasi1===false) {
            porta1.frame = 3;
            comandi2.alpha=1;
        }
       }

       if(respawnX === 160){
          enemy3.kill();
          portatrasparente.kill();
         }

       function openPorta2(porta2) {
          if(player.body.position.x > 2368 && portasi === true) {
          porta2.animations.play('apriporta2');
          game.time.events.add(200, timerporta2);
          function timerporta2() {
            porta2.animations.stop('apriporta2');
            porta2.frame = 3;
            portasi = false;
          }
        }
       }

       function collisionePunte(punte){
          danneggiato();
       }

    },

    collisioneMuri: function(proiettili, layer){
       proiettili.kill();
    },

    piattaformeCollisioneMuri: function(platforms1){
       platforms1.kill();
    },

    collisionePiattaforma: function(platform1, proiettili){
       proiettili.kill();
    },

    collisioneMalefica: function(player, malefica){
       game.state.start('Good');
    },

    salvaTempo: function () {
       if(animazione.isDown)
          inizioAnimazione = game.time.now;
    }
}

game.state.add('Game1', Game1State);

var GoodState = {
    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/malefica.png');
        game.load.image('malefica1', 'assets1/malefica1.png');
        game.load.image('malefica2', 'assets1/malefica2.png');
        game.load.image('malefica3', 'assets1/malefica3.png');
        game.load.image('malefica4', 'assets1/malefica4.png');


    },

    create: function() {

      game.world.setBounds(0,0,1024, 768);
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        image.inputEnabled = true;
        image.events.onInputDown.add(this.appariDialoghi2, this);
        malefica1 = game.add.sprite(212, 430, 'malefica1');
        malefica1.alpha = 0;
        malefica2 = game.add.sprite(212, 430, 'malefica2');
        malefica2.alpha = 0;
        malefica3 = game.add.sprite(212, 430, 'malefica3');
        malefica3.alpha = 0;
        malefica4 = game.add.sprite(212, 430, 'malefica4');
        malefica4.alpha = 0;
        pronto = false;

    },

    appariDialoghi2: function(pointer) {

          if (pronto===true) {
           window.location.href = "index2.html";
          }

          if (malefica3.alpha === 1) {
          malefica4.alpha =1;
          pronto=true;
                  }
          if (malefica2.alpha === 1) {
          malefica3.alpha =1;
                  }
              if (malefica1.alpha ===1) {
                malefica2.alpha = 1;
              }
              if (malefica1.alpha === 0) {
                malefica1.alpha = 1;
              }



      }

    }



game.state.add('Good', GoodState);


var BadState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets1/hai perso.png');
        game.load.image('riprova', 'assets1/riprova.png');
        game.load.spritesheet('aurorachepiange', 'assets1/aurora che piange.png', 406, 339);
    },

    create: function() {
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
      game.world.setBounds(0,0,1024, 768);
        background = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        background.anchor.set(0.5);
        image = game.add.sprite(680, 640, 'riprova');
        image.inputEnabled = true;
        image.events.onInputDown.add(this.imageClick, this);
        piange = game.add.sprite(350, 300, 'aurorachepiange');
        piange.animations.add('piagnona', [0,1,2,3,4,5,6,7,8,9,10], 6, true);
        piange.animations.play('piagnona', 6, true);
        danno = 2;
        danneggiamento = false;
        catturato = false;
    },

    imageClick: function(pointer) {
        this.game.state.start('Game1');
    }

}

game.state.add('Bad', BadState);

game.state.start('Start');


function create() {
}

function update () {
}

function render () {
}
