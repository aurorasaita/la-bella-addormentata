var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });


var player;
var velocity=150;
var velocityy=225;
var cursors;
var unità=32;
var sx = false;
var sxPrincipe;
var danno = 2;
var extra = 0;
var altezzaPrecedente;
var animationActive = false;
var danneggiamento=false;
var catturato=false;

var respawnX = 12*unità;
var respawnY = 56.07*unità;
var respawning = false;

var spara;

var scettro = 0;
var presa1 = false;
var presa2 = false;
var presa3 = false;
var colpoSpeciale = 8;
var speciale = false;
var magia = true;
var scalatrice=false;

var statoPrincipe = 0;
var dannoPrincipe = 20;
var principeAttaccato = false;
var posizionePrincipe;

var rotturaCad1 = false;
var rotturaCad2 = false;
var rotturaCad3 = false;
var rotturaCad4 = false;
var rotturaCad5 = false;
var rotturaCad6 = false;
var rotturaCad7 = false;
var rotturaCad8 = false;
var rotturaCad9 = false;
var attivata10 = false;
var dialogoprinci = false;
var specialeAvviso = true;
var fine;
var finalenegativo =  false;

function preload() {
}


var Game1State = {

preload: function() {

  game.load.image('dialogoprincipe', 'assets2/principe2.png');
  game.load.image('dialogospeciale1', 'assets2/speciale1.png');
  game.load.image('dialogospeciale2', 'assets2/speciale2.png');
  game.load.image('dialogoGuardia', 'assets2/dialogoguardia.png');

    game.load.spritesheet('aurora', 'assets2/aurora.png', 38, 38);
    game.load.spritesheet('enemy1', 'assets2/guardia.png', 32, 34);
    game.load.spritesheet('enemy2', 'assets2/guardia balestra.png', 32, 32);

    game.load.spritesheet('principe', 'assets2/principe.png', 61, 54);

    game.load.image('spara', 'assets2/bullet.png');

    game.load.image('platformS1', 'assets2/platformS1.png');
    game.load.image('platformS2', 'assets2/platformS2.png');
    game.load.image('platformS3', 'assets2/platformS3.png');
    game.load.image('platformS4', 'assets2/platformS4.png');
    game.load.image('platformS5', 'assets2/platformS5.png');

    game.load.spritesheet('platform', 'assets2/platform.png', 64, 32);
    game.load.spritesheet('platform2', 'assets2/platform2.png', 96, 32);
    game.load.spritesheet('platform3', 'assets2/platform3.png', 128, 32);

    game.load.image('rovi1', 'assets2/roveto.png');
    game.load.image('rovi2', 'assets2/roveto2.png');

    game.load.spritesheet('vite', 'assets2/cuori.png', 13, 13);
    game.load.image('vitegrigie', 'assets2/cuorigrigi.png');
    game.load.spritesheet('vitaextra', 'assets2/quore.png', 33, 35);
    game.load.spritesheet('viteprincipe', 'assets2/cuori principe.png', 13, 13);

    game.load.spritesheet('gemme', 'assets2/gemme.png', 18, 28);
    game.load.spritesheet('gemma1', 'assets2/gemma1.png', 25, 28);
    game.load.spritesheet('gemma2', 'assets2/gemma2.png', 25, 28);
    game.load.spritesheet('gemma3', 'assets2/gemma3.png', 25, 28);

    game.load.tilemap('mappa', 'tilelev2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets2/tiles.png');
    game.load.image('tiles1', 'assets2/tiles1.png');
    game.load.image('back', 'assets2/back.png');
    game.load.image('back1', 'assets2/back1.png');
		game.load.image('back2', 'assets2/back2.png');

    game.load.spritesheet('porta', 'assets2/animazione porta.png', 105.75, 163);
},


create: function() {

  this.levelLength = 3;

  game.world.setBounds(0, 0, 6400, 1888);

  this.back = this.game.add.tileSprite(0,
   1888 - this.game.cache.getImage('back').height,
   6400,
   this.game.cache.getImage('back').height,
   'back'
  );

  this.back1 = this.game.add.tileSprite(0,
   1888 - this.game.cache.getImage('back1').height,
   6400,
   this.game.cache.getImage('back1').height,
   'back1'
  );

  this.back2 = this.game.add.tileSprite(0,
   1888 - this.game.cache.getImage('back2').height,
   6400,
   this.game.cache.getImage('back2').height,
   'back2'
  );

  this.game.physics.startSystem(Phaser.Physics.P2JS);

  map = game.add.tilemap('mappa');
  map.addTilesetImage('terreno', 'tiles')
  map.addTilesetImage('tiles1', 'tiles1')
  layer = map.createLayer('background');
  layer = map.createLayer('Livello2');
  map.setCollisionBetween(1, 100);
this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();

  player = game.add.sprite(respawnX, respawnY, 'aurora');
  player.scale.setTo(1.2, 1.2);
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 300;
  player.animations.add('left', [6, 7], 5, true);
  player.animations.add('right', [4, 5], 5, true);
  player.animations.add('attRight', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);
  player.animations.add('attLeft', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true);
  player.animations.add('saltoAttLeft', [36, 37, 38, 39, 40, 41, 42, 43, 44], 5, true);
  player.animations.add('saltoAttRight', [27, 28, 29, 30, 31, 32, 33, 34, 35], 5, true);
  player.animations.add('saltoLeft', [36], 5, true);
  player.animations.add('saltoRight', [27], 5, true);
  player.animations.add('morteLeft', [58, 59, 60, 61], 2, true);
  player.animations.add('morteRight', [54, 55, 56, 57], 2, true);
  player.animations.add('scalata', [51, 52], 5, true);
  player.animations.add('saltoLeftSP', [98], 5, true);
  player.animations.add('saltoRightSP', [89], 5, true);
  player.animations.add('leftSP', [101, 102], 5, true);
  player.animations.add('rightSP', [99, 100], 5, true);
  player.animations.add('attRightSP', [63, 64, 65, 66, 67, 68, 69, 70, 71], 10, true);
  player.animations.add('attLeftSP', [72, 73, 74, 75, 76, 77, 78, 79, 80], 10, true);
  player.animations.add('saltoAttLeftSP', [90, 91, 92, 93, 94, 95, 96, 97, 98], 5, true);
  player.animations.add('saltoAttRightSP', [81, 82, 83, 84, 85, 86, 87, 88, 89], 5, true);

  platformCad1 = game.add.sprite(24*unità, 39*unità, 'platform2');
  platformCad1.originalPosition = 39*unità;
  platformCad1.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad1.frame=0;
  platformCad2 = game.add.sprite(26*unità, 29*unità, 'platform3');
  platformCad2.originalPosition = 29*unità;
  platformCad2.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad2.frame=0;
  platformCad3 = game.add.sprite(100*unità, 46*unità, 'platform');
  platformCad3.originalPosition = 46*unità;
  platformCad3.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad3.frame=0;
  platformCad4 = game.add.sprite(105*unità, 47*unità, 'platform');
  platformCad4.originalPosition = 47*unità;
  platformCad4.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad4.frame=0;
  platformCad5 = game.add.sprite(114*unità, 16*unità, 'platform2');
  platformCad5.originalPosition = 16*unità;
  platformCad5.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad5.frame=0;
  platformCad6 = game.add.sprite(127*unità, 48*unità, 'platform');
  platformCad6.originalPosition = 48*unità;
  platformCad6.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad6.frame=0;
  platformCad7 = game.add.sprite(137*unità, 49*unità, 'platform');
  platformCad7.originalPosition = 49*unità;
  platformCad7.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad7.frame=0;
  platformCad8 = game.add.sprite(141*unità, 51*unità, 'platform2');
  platformCad8.originalPosition = 51*unità;
  platformCad8.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad8.frame=0;
  platformCad9 = game.add.sprite(146*unità, 53*unità, 'platform');
  platformCad9.originalPosition = 53*unità;
  platformCad9.animations.add('cadiPlatform', [0,1,2,3], 2, true );
  platformCad9.frame=0;

  platformSem1 = game.add.sprite(22*unità, 36*unità, 'platformS4');
  platformSem2 = game.add.sprite(43*unità, 36*unità, 'platformS5');
  platformSem3 = game.add.sprite(53*unità, 20*unità, 'platformS2');
  platformSem4 = game.add.sprite(83*unità, 40*unità, 'platformS1');
  platformSem5 = game.add.sprite(88*unità, 17*unità, 'platformS1');
  platformSem6 = game.add.sprite(109*unità, 16*unità, 'platformS1');
  platformSem7 = game.add.sprite(120*unità, 16*unità, 'platformS5');
  platformSem8 = game.add.sprite(140*unità, 23*unità, 'platformS4');
  platformSem9 = game.add.sprite(138*unità, 34*unità, 'platformS4');
  platformSem10 = game.add.sprite(50*unità, -30*unità, 'platformS4');
  platformSem10.originalPosition = 56*unità;

  potenziamento1 = game.add.sprite(100.65*unità, 44*unità, 'vitaextra');
  potenziamento1.animations.add('animQuore', 0, 1, 2, 3, true);
  potenziamento1.animations.play('animQuore', 2, true);
  potenziamento1.scale.setTo(0.8,0.8);

  potenziamento2 = game.add.sprite(78*unità, 18*unità, 'vitaextra');
  potenziamento2.animations.add('animQuore', 0, 1, 2, 3, true);
  potenziamento2.animations.play('animQuore', 2, true);
  potenziamento2.scale.setTo(0.8,0.8);

  sasso1 = game.add.sprite(49*unità, 18*unità, 'gemma1');
  sasso1.frame = 1;
  sasso1.animations.add('anim1', 0, 1, 2, true);
  sasso1.animations.play('anim1', 3, true);

  sasso2 = game.add.sprite(37*unità, 56*unità, 'gemma2');
  sasso2.frame = 1;
  sasso2.animations.add('anim2', 0, 1, 2, true);
  sasso2.animations.play('anim2', 3, true);

  sasso3 = game.add.sprite(146*unità, 15*unità, 'gemma3');
  sasso3.frame = 1;
  sasso3.animations.add('anim3', 0, 1, 3, true);
  sasso3.animations.play('anim3', 3, true);

  enemy1 = game.add.sprite(53*unità, 35*unità, 'enemy1');
  enemy1.scale.setTo(1.4, 1.4);
  enemy1.animations.add('enemyRight', [5, 6, 7, 8, 9], 6,  true);
  enemy1.animations.add('enemyLeft', [0, 1, 2, 3, 4], 6,  true);
  enemy2 = game.add.sprite(110*unità, 45*unità, 'enemy1');
  enemy2.scale.setTo(1.4, 1.4);
  enemy2.animations.add('enemyRight', [5, 6, 7, 8, 9], 6,  true);
  enemy2.animations.add('enemyLeft', [0, 1, 2, 3, 4], 6,  true);
  enemy3 = game.add.sprite(125*unità, 22*unità, 'enemy1');
  enemy3.scale.setTo(1.4, 1.4);
  enemy3.animations.add('enemyRight', [5, 6, 7, 8, 9], 6,  true);
  enemy3.animations.add('enemyLeft', [0, 1, 2, 3, 4], 6,  true);
  enemy4 = game.add.sprite(39*unità, 54*unità, 'enemy2');
  enemy4.scale.setTo(1.4, 1.4);
  enemy4.animations.add('spara', [3, 4, 5], 0.6,  true);
  enemy4.animations.play('spara');

  porta = game.add.sprite(24, 1725, 'porta');
  porta.frame = 0;
  porta.scale.setTo(0.61,0.61);



  principe = game.add.sprite(167*unità, 55*unità, 'principe');
  principe.scale.setTo(1.4, 1.4);

  rovi1 = game.add.sprite(30*unità, 54*unità-8, 'rovi1');
  rovi2 = game.add.sprite(59*unità, 54*unità+1, 'rovi2');


  enemy4.shooting = true;

  game.physics.arcade.enable(platformSem1);
  game.physics.arcade.enable(platformSem2);
  game.physics.arcade.enable(platformSem3);
  game.physics.arcade.enable(platformSem4);
  game.physics.arcade.enable(platformSem5);
  game.physics.arcade.enable(platformSem6);
  game.physics.arcade.enable(platformSem7);
  game.physics.arcade.enable(platformSem8);
  game.physics.arcade.enable(platformSem9);
  game.physics.arcade.enable(platformSem10);

  game.physics.arcade.enable(platformCad1);
  game.physics.arcade.enable(platformCad2);
  game.physics.arcade.enable(platformCad3);
  game.physics.arcade.enable(platformCad4);
  game.physics.arcade.enable(platformCad5);
  game.physics.arcade.enable(platformCad6);
  game.physics.arcade.enable(platformCad7);
  game.physics.arcade.enable(platformCad8);
  game.physics.arcade.enable(platformCad9);

  game.physics.arcade.enable(potenziamento1);
  potenziamento1.body.immovable = true;
  game.physics.arcade.enable(potenziamento2);
  potenziamento2.body.immovable = true;
  potenziamento2.body.gravity.y = 300;

  game.physics.arcade.enable(principe);
  principe.body.immovable = true;
  principe.body.gravity.y = 300;
  principe.animations.add('caricamentoRight', [0, 1, 2, 3, 4, 5], 15,  true);
  principe.animations.add('caricamentoLeft', [11, 10, 9, 8, 7, 6], 15, true);
  principe.animations.add('attaccoRight', [12, 13, 14, 15, 16, 17], 10,  true);
  principe.animations.add('attaccoLeft', [23, 22, 21, 20, 19, 18], 10, true);
  principe.animations.add('camminataRight', [24, 25, 26], 5,  true);
  principe.animations.add('camminataLeft', [29, 28, 27], 5, true);
  principe.animations.add('fermo', [42, 43], 5, true);
  principe.animations.add('morteRight', [30, 31, 32, 33], 2, true);
  principe.animations.add('morteLeft', [36, 37, 38, 39], 2, true);

  game.physics.arcade.enable(sasso1);
  sasso1.body.immovable = true;
  sasso1.body.gravity.y = 300;

  game.physics.arcade.enable(sasso2);
  sasso2.body.immovable = true;
  sasso2.body.gravity.y = 300;

  game.physics.arcade.enable(sasso3);
  sasso3.body.immovable = true;
  sasso3.body.gravity.y = 300;

  game.physics.arcade.enable(rovi1);
  rovi1.body.immovable = true;

  game.physics.arcade.enable(rovi2);
  rovi2.body.immovable = true;

  game.physics.arcade.enable(enemy1);
  enemy1.body.immovable = true;
  enemy1.body.gravity.y = 300;

  game.physics.arcade.enable(enemy2);
  enemy2.body.immovable = true;
  enemy2.body.gravity.y = 300;

  game.physics.arcade.enable(enemy3);
  enemy3.body.immovable = true;
  enemy3.body.gravity.y = 300;

  game.physics.arcade.enable(enemy4);
  enemy4.body.immovable = true;
  enemy4.body.gravity.y = 300;

  platformSem1.body.immovable = true;
  platformSem1.body.collideWorldBounds = true;
  platformSem2.body.immovable = true;
  platformSem2.body.collideWorldBounds = true;
  platformSem3.body.immovable = true;
  platformSem3.body.collideWorldBounds = true;
  platformSem4.body.immovable = true;
  platformSem4.body.collideWorldBounds = true;
  platformSem5.body.immovable = true;
  platformSem5.body.collideWorldBounds = true;
  platformSem6.body.immovable = true;
  platformSem6.body.collideWorldBounds = true;
  platformSem7.body.immovable = true;
  platformSem7.body.collideWorldBounds = true;
  platformSem8.body.immovable = true;
  platformSem8.body.collideWorldBounds = true;
  platformSem9.body.immovable = true;
  platformSem9.body.collideWorldBounds = true;
  platformSem10.body.collideWorldBounds = true;

  platformCad1.body.immovable = true;
  platformCad1.body.collideWorldBounds = true;
  platformCad2.body.immovable = true;
  platformCad2.body.collideWorldBounds = true;
  platformCad3.body.immovable = true;
  platformCad3.body.collideWorldBounds = true;
  platformCad4.body.immovable = true;
  platformCad4.body.collideWorldBounds = true;
  platformCad5.body.immovable = true;
  platformCad5.body.collideWorldBounds = true;
  platformCad6.body.immovable = true;
  platformCad6.body.collideWorldBounds = true;
  platformCad7.body.immovable = true;
  platformCad7.body.collideWorldBounds = true;
  platformCad8.body.immovable = true;
  platformCad8.body.collideWorldBounds = true;
  platformCad9.body.immovable = true;
  platformCad9.body.collideWorldBounds = true;

  principe.body.collideWorldBounds = true;

  game.camera.follow(player);

  goodGame = function() {
    this.game.state.start('Good');
  }

  endGame = function() {
    animationActive=false;

    player.kill();
    this.game.state.start('Bad');
  }

  negativoEndGame = function() {
    animationActive=false;

    player.kill();
    this.game.state.start('BadFinale');
  }

  cursors = game.input.keyboard.createCursorKeys();

  animazione = game.input.keyboard.addKey(Phaser.KeyCode.A);

  proiettili = game.add.group();
  proiettili.enableBody = true;

  game.time.events.loop(5000, timer1);
    function timer1() {
      if(enemy4.shooting){
      var spara = proiettili.create(39*unità, 56*unità, 'spara');
      spara.body.velocity.x = 200;
      spara.scale.setTo(0.2, 0.2);}
    }

  vitagrigia = game.add.sprite (870, 30, 'vitegrigie');
  vitagrigia.scale.setTo(2,2);
  vitagrigia.fixedToCamera = true;

  vita1 = game.add.sprite (870, 30, 'vite');
  vita1.scale.setTo(2,2);
  vita1.frame = 0;
  vita1.fixedToCamera = true;

  vita2 = game.add.sprite (900, 30, 'vite');
  vita2.scale.setTo(2,2);
  vita2.frame = 0;
  vita2.fixedToCamera = true;

  vita3 = game.add.sprite (930, 30, 'vite');
  vita3.scale.setTo(2,2);
  vita3.frame = 2;
  vita3.fixedToCamera = true;

  vita4 = game.add.sprite (960, 30, 'vite');
  vita4.scale.setTo(2,2);
  vita4.frame = 2;
  vita4.fixedToCamera = true;

  vitaprincipe1 = game.add.sprite (212, 725, 'viteprincipe');
  vitaprincipe1.scale.setTo(2,2);
  vitaprincipe1.frame = 0;
  vitaprincipe1.fixedToCamera = true;
  vitaprincipe1.alpha = 0;

  vitaprincipe2 = game.add.sprite (242, 725, 'viteprincipe');
  vitaprincipe2.scale.setTo(2,2);
  vitaprincipe2.frame = 0;
  vitaprincipe2.fixedToCamera = true;
  vitaprincipe2.alpha = 0;


  vitaprincipe3 = game.add.sprite (272, 725, 'viteprincipe');
  vitaprincipe3.scale.setTo(2,2);
  vitaprincipe3.frame = 0;
  vitaprincipe3.fixedToCamera = true;
  vitaprincipe3.alpha = 0;

  vitaprincipe4 = game.add.sprite (302, 725, 'viteprincipe');
  vitaprincipe4.scale.setTo(2,2);
  vitaprincipe4.frame = 0;
  vitaprincipe4.fixedToCamera = true;
  vitaprincipe4.alpha = 0;

  vitaprincipe5 = game.add.sprite (332, 725, 'viteprincipe');
  vitaprincipe5.scale.setTo(2,2);
  vitaprincipe5.frame = 0;
  vitaprincipe5.fixedToCamera = true;
  vitaprincipe5.alpha = 0;

  vitaprincipe6 = game.add.sprite (362, 725, 'viteprincipe');
  vitaprincipe6.scale.setTo(2,2);
  vitaprincipe6.frame = 0;
  vitaprincipe6.fixedToCamera = true;
  vitaprincipe6.alpha = 0;

  vitaprincipe7 = game.add.sprite (392, 725, 'viteprincipe');
  vitaprincipe7.scale.setTo(2,2);
  vitaprincipe7.frame = 0;
  vitaprincipe7.fixedToCamera = true;
  vitaprincipe7.alpha = 0;

  vitaprincipe8 = game.add.sprite (422, 725, 'viteprincipe');
  vitaprincipe8.scale.setTo(2,2);
  vitaprincipe8.frame = 0;
  vitaprincipe8.fixedToCamera = true;
  vitaprincipe8.alpha = 0;

  vitaprincipe9 = game.add.sprite (452, 725, 'viteprincipe');
  vitaprincipe9.scale.setTo(2,2);
  vitaprincipe9.frame = 0;
  vitaprincipe9.fixedToCamera = true;
  vitaprincipe9.alpha = 0;

  vitaprincipe10 = game.add.sprite (482, 725, 'viteprincipe');
  vitaprincipe10.scale.setTo(2,2);
  vitaprincipe10.frame = 0;
  vitaprincipe10.fixedToCamera = true;
  vitaprincipe10.alpha = 0;

  vitaprincipe11 = game.add.sprite (512, 725, 'viteprincipe');
  vitaprincipe11.scale.setTo(2,2);
  vitaprincipe11.frame = 0;
  vitaprincipe11.fixedToCamera = true;
  vitaprincipe11.alpha = 0;

  vitaprincipe12 = game.add.sprite (542, 725, 'viteprincipe');
  vitaprincipe12.scale.setTo(2,2);
  vitaprincipe12.frame = 0;
  vitaprincipe12.fixedToCamera = true;
  vitaprincipe12.alpha = 0;

  vitaprincipe13 = game.add.sprite (572, 725, 'viteprincipe');
  vitaprincipe13.scale.setTo(2,2);
  vitaprincipe13.frame = 0;
  vitaprincipe13.fixedToCamera = true;
  vitaprincipe13.alpha = 0;

  vitaprincipe14 = game.add.sprite (602, 725, 'viteprincipe');
  vitaprincipe14.scale.setTo(2,2);
  vitaprincipe14.frame = 0;
  vitaprincipe14.fixedToCamera = true;
  vitaprincipe14.alpha = 0;

  vitaprincipe15 = game.add.sprite (632, 725, 'viteprincipe');
  vitaprincipe15.scale.setTo(2,2);
  vitaprincipe15.frame = 0;
  vitaprincipe15.fixedToCamera = true;
  vitaprincipe15.alpha = 0;

  vitaprincipe16 = game.add.sprite (662, 725, 'viteprincipe');
  vitaprincipe16.scale.setTo(2,2);
  vitaprincipe16.frame = 0;
  vitaprincipe16.fixedToCamera = true;
  vitaprincipe16.alpha = 0;

  vitaprincipe17 = game.add.sprite (692, 725, 'viteprincipe');
  vitaprincipe17.scale.setTo(2,2);
  vitaprincipe17.frame = 0;
  vitaprincipe17.fixedToCamera = true;
  vitaprincipe17.alpha = 0;

  vitaprincipe18 = game.add.sprite (722, 725, 'viteprincipe');
  vitaprincipe18.scale.setTo(2,2);
  vitaprincipe18.frame = 0;
  vitaprincipe18.fixedToCamera = true;
  vitaprincipe18.alpha = 0;

  vitaprincipe19 = game.add.sprite (752, 725, 'viteprincipe');
  vitaprincipe19.scale.setTo(2,2);
  vitaprincipe19.frame = 0;
  vitaprincipe19.fixedToCamera = true;
  vitaprincipe19.alpha = 0;

  vitaprincipe20 = game.add.sprite (782, 725, 'viteprincipe');
  vitaprincipe20.scale.setTo(2,2);
  vitaprincipe20.frame = 0;
  vitaprincipe20.fixedToCamera = true;
  vitaprincipe20.alpha = 0;

  gemma1 = game.add.sprite (889.5, 80, 'gemme');
  gemma1.frame = 3;
  gemma1.fixedToCamera = true;

  gemma2 = game.add.sprite (919.5, 80, 'gemme');
  gemma2.frame = 3;
  gemma2.fixedToCamera = true;

  gemma3 = game.add.sprite (949.5, 80, 'gemme');
  gemma3.frame = 3;
  gemma3.fixedToCamera = true;

  dialogoprincipe = game.add.sprite(212, 281, 'dialogoprincipe');
  dialogoprincipe.alpha = 0;
  dialogoprincipe.fixedToCamera = true;

  dialogospeciale1 = game.add.sprite(212, 430, 'dialogospeciale1');
  dialogospeciale1.alpha = 0;
  dialogospeciale1.fixedToCamera = true;
  dialogospeciale2 = game.add.sprite(212, 430, 'dialogospeciale2');
  dialogospeciale2.alpha = 0;
  dialogospeciale2.fixedToCamera = true;

  dialogoGuardia = game.add.sprite(212, 430, 'dialogoGuardia');
  dialogoGuardia.alpha = 0;
  dialogoGuardia.fixedToCamera = true;

  game.input.onDown.add(inizioCombattimento, self);

    function inizioCombattimento(){
      if (dialogoprincipe.alpha===1 && dialogoprinci === false && game.paused) {
      game.paused = false;
      dialogoprinci = true;
      finalenegativo = true;
      dialogoprincipe.alpha = 0;}
      if (specialeAvviso===true && speciale===true){
        if(dialogospeciale2.alpha===1){
        game.paused = false;
        specialeAvviso = false;
        dialogospeciale1.alpha = 0;
        dialogospeciale2.alpha = 0;
        }
        if(dialogospeciale1.alpha===1){
          dialogospeciale1.alpha=0;
          dialogospeciale2.alpha=1;
        }
    }
  }


},

update: function() {

  enemy4.body.setSize(26,30,1,1);
  rovi1.body.setSize(157, 88, 10, 15);
  rovi2.body.setSize(2540, 86, 10, 10);

  if (sxPrincipe === true || principe.body.velocity.x < 0) {
  principe.body.setSize(39 , 49, 1, 4);
}
if (sxPrincipe === false || principe.body.velocity.x > 0) {
principe.body.setSize(39, 49, 21, 4);
}


  game.physics.arcade.collide(player, layer);
  game.physics.arcade.collide(player, layer);

  game.physics.arcade.collide(principe, layer);


  game.physics.arcade.collide(player, platformSem1);
  game.physics.arcade.collide(player, platformSem2);
  game.physics.arcade.collide(player, platformSem3);
  game.physics.arcade.collide(player, platformSem4);
  game.physics.arcade.collide(player, platformSem5);
  game.physics.arcade.collide(player, platformSem6);
  game.physics.arcade.collide(player, platformSem7);
  game.physics.arcade.collide(player, platformSem8);
  game.physics.arcade.collide(player, platformSem9);
  game.physics.arcade.collide(player, platformSem10, activate10);

  game.physics.arcade.collide(player, platformCad1, rottura1);
  game.physics.arcade.collide(player, platformCad2, rottura2);
  game.physics.arcade.collide(player, platformCad3, rottura3);
  game.physics.arcade.collide(player, platformCad4, rottura4);
  game.physics.arcade.collide(player, platformCad5, rottura5);
  game.physics.arcade.collide(player, platformCad6, rottura6);
  game.physics.arcade.collide(player, platformCad7, rottura7);
  game.physics.arcade.collide(player, platformCad8, rottura8);
  game.physics.arcade.collide(player, platformCad9, rottura9);

  game.physics.arcade.overlap(player, potenziamento1, potenziato1);
  game.physics.arcade.collide(layer, potenziamento1);

  game.physics.arcade.overlap(player, potenziamento2, potenziato2);
  game.physics.arcade.collide(layer, potenziamento2);

  if (presa1===true){
    sasso1.kill();
  }
  if (presa2===true){
    sasso2.kill();
  }
  if (presa3===true){
    sasso3.kill();
  }

  game.physics.arcade.overlap(player, sasso1, scettro1);
  game.physics.arcade.collide(layer, sasso1);

  game.physics.arcade.overlap(player, sasso2, scettro2);
  game.physics.arcade.collide(layer, sasso2);

  game.physics.arcade.overlap(player, sasso3, scettro3);
  game.physics.arcade.collide(layer, sasso3);

  game.physics.arcade.collide(layer, enemy1);
  game.physics.arcade.collide(layer, enemy2);
  game.physics.arcade.collide(layer, enemy3);
  game.physics.arcade.collide(layer, enemy4);

  game.physics.arcade.collide(player, proiettili, collisioneProiettili);
  game.physics.arcade.collide(proiettili, layer, collisioneMuri);
  game.physics.arcade.collide(platformSem10, proiettili, collisionePlat10);
  game.physics.arcade.collide(rovi1, proiettili, collisioneRovi1);
  game.physics.arcade.collide(rovi2, proiettili, collisioneRovi2);
  game.physics.arcade.collide(potenziamento1, platformCad3);



  combattimento1();
  combattimento2();
  combattimento3();
  combattimento4();
  specialePronto();
  combattimentoPrincipe();

  game.physics.arcade.collide(player, enemy1, collisioneNemico1);
  game.physics.arcade.collide(player, enemy1);

  game.physics.arcade.collide(player, enemy2, collisioneNemico2);
  game.physics.arcade.collide(player, enemy2);

  game.physics.arcade.collide(player, enemy3, collisioneNemico3);
  game.physics.arcade.collide(player, enemy3);

  game.physics.arcade.collide(player, enemy4, collisioneNemico4);
  game.physics.arcade.collide(player, enemy4);

  game.physics.arcade.collide(player, principe, collisionePrincipe);
  game.physics.arcade.collide(player, principe);


  game.physics.arcade.collide(player, rovi1, danneggiato);
  game.physics.arcade.collide(player, rovi2, danneggiato);
  game.physics.arcade.collide(principe, rovi2);

  patrol1(platformSem1);
  patrol2(platformSem2);
  patrol3(platformSem3);
  patrol4(platformSem4);
  patrol5(platformSem5);
  patrol6(platformSem6);
  patrol7(platformSem7);
  patrol8(platformSem8);
  patrol9(platformSem9);
  patrol10(platformSem10);

  patrolEnemy1(enemy1);
  patrolEnemy2(enemy2);
  patrolEnemy3(enemy3);

  interfacciaSpeciale();

parlaPrincipe();
  movimentoPrincipe(principe);
  mortePrincipe();
  respawnBoss();

  calcolaDannoCaduta();

  morte();
  catturata();
  cuoriPrincipe();
  contatoreVite();
  contatoreVitePrincipe();


  if (sx === true) {
    player.body.setSize(26, 34, 10, 3);
  }
  if (sx === false) {
    player.body.setSize(26, 34, 2, 3);
  }


  if (player.body.onFloor() || player.body.touching.down)
    altezzaPrecedente = player.body.position.y;

  function calcolaDannoCaduta() {
    if((player.body.onFloor() || player.body.touching.down) && (altezzaPrecedente - player.body.position.y < -(6*unità-1))){
        danneggiato();
    }
  }

  function catturata(){
    if(catturato === true){
      dialogoGuardia.alpha=1;
      catturato=false;
    }
  }

  function danneggiato(){
    if(!danneggiamento){
      danneggiamento = true;
      danno--;
      player.tint = 0xC83E7F;
      game.time.events.add(1200, timerDanno);
      function timerDanno(){

        danneggiamento = false;
        player.tint = 0xFFFFFF;
      }
    }
  }

  function timerMorte(){
    if (finalenegativo === false){
    endGame();
    velocityy=225;
    velocity=150;
    dannoPrincipe = 20;
    player.body.position.x = respawnX;
    player.body.position.y = respawnY;
    player.x = respawnX;
    player.y = respawnY;
    principe.body.position.x = 167*unità;
    principe.body.position.y = 55*unità;
    principe.x = 167*unità;
    principe.y = 55*unità;
    respawning = false;
    player.tint = 0xFFFFFF;
      platformCad9.y=platformCad9.originalPosition;
      platformCad9.alpha=1;
      platformCad9.immovable = true;
  platformCad9.animations.stop();
  platformCad9.frame=0;
      rotturaCad9 = false;}
      if (finalenegativo === true) {
        negativoEndGame();
        velocityy=225;
        velocity=150;
        dannoPrincipe = 20;
        player.body.position.x = respawnX;
        player.body.position.y = respawnY;
        player.x = respawnX;
        player.y = respawnY;
        principe.body.position.x = 167*unità;
        principe.body.position.y = 55*unità;
        principe.x = 167*unità;
        principe.y = 55*unità;
        respawning = false;
        player.tint = 0xFFFFFF;
          platformCad9.y=platformCad9.originalPosition;
          platformCad9.alpha=1;
          platformCad9.immovable = true;
      platformCad9.animations.stop();
      platformCad9.frame=0;
          rotturaCad9 = false;
      }

  }

  function morte() {
    if (danno<1 && respawning === false){
      velocityy=0;
      velocity=0;
      respawning = true
      if (dannoPrincipe > 0) {
      }
        game.time.events.add(2000, timerMorte);
     }
  }

  function contatoreVite() {
    if (danno > 0) {
      vita1.frame= 0;
    }
    if (danno > 1) {
      vita2.frame= 0;
    }
    if (danno > 2) {
      vita3.frame= 0;
    }
    if (danno > 3) {
      vita4.frame= 0;
    }
    if (danno < 2) {
      vita2.frame= 1;
    }
    if (danno < 1) {
      vita1.frame= 1;
    }
    if (danno === 2 && (extra === 2 || extra === 1)) {
      vita3.frame= 1;
    }
    if (danno === 3 && extra === 2) {
      vita4.frame= 1;
    }
  }

  function cuoriPrincipe() {
    if (player.body.x > 135*unità && player.body.y > 47.5*unità) {
      vitaprincipe20.alpha = 1;
      vitaprincipe19.alpha = 1;
      vitaprincipe18.alpha = 1;
      vitaprincipe17.alpha = 1;
      vitaprincipe16.alpha = 1;
      vitaprincipe15.alpha = 1;
      vitaprincipe14.alpha = 1;
      vitaprincipe13.alpha = 1;
      vitaprincipe12.alpha = 1;
      vitaprincipe11.alpha = 1;
      vitaprincipe10.alpha = 1;
      vitaprincipe9.alpha = 1;
      vitaprincipe8.alpha = 1;
      vitaprincipe7.alpha = 1;
      vitaprincipe6.alpha = 1;
      vitaprincipe5.alpha = 1;
      vitaprincipe4.alpha = 1;
      vitaprincipe3.alpha = 1;
      vitaprincipe2.alpha = 1;
      vitaprincipe1.alpha = 1;
    }
  else{
    vitaprincipe20.alpha = 0;
    vitaprincipe19.alpha = 0;
    vitaprincipe18.alpha = 0;
    vitaprincipe17.alpha = 0;
    vitaprincipe16.alpha = 0;
    vitaprincipe15.alpha = 0;
    vitaprincipe14.alpha = 0;
    vitaprincipe13.alpha = 0;
    vitaprincipe12.alpha = 0;
    vitaprincipe11.alpha = 0;
    vitaprincipe10.alpha = 0;
    vitaprincipe9.alpha = 0;
    vitaprincipe8.alpha = 0;
    vitaprincipe7.alpha = 0;
    vitaprincipe6.alpha = 0;
    vitaprincipe5.alpha = 0;
    vitaprincipe4.alpha = 0;
    vitaprincipe3.alpha = 0;
    vitaprincipe2.alpha = 0;
    vitaprincipe1.alpha = 0;
  }
}
  function contatoreVitePrincipe() {
    if (dannoPrincipe === 20) {
      vitaprincipe20.frame = 0;
      vitaprincipe19.frame = 0;
      vitaprincipe18.frame = 0;
      vitaprincipe17.frame = 0;
      vitaprincipe16.frame = 0;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;


    }
    if (dannoPrincipe === 19) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 0;
      vitaprincipe18.frame = 0;
      vitaprincipe17.frame = 0;
      vitaprincipe16.frame = 0;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;


    }
    if (dannoPrincipe === 18) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 0;
      vitaprincipe17.frame = 0;
      vitaprincipe16.frame = 0;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 17) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 0;
      vitaprincipe16.frame = 0;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 16) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 0;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 15) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 0;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 14) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 0;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 13) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 0;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
     }
    if (dannoPrincipe === 12) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 0;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 11) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 0;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 10) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 0;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 9) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 0;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 8) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 0;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 7) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 0;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 6) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 0;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 5) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 0;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 4) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 1;
      vitaprincipe4.frame = 0;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 3) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 1;
      vitaprincipe4.frame = 1;
      vitaprincipe3.frame = 0;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 2) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 1;
      vitaprincipe4.frame = 1;
      vitaprincipe3.frame = 1;
      vitaprincipe2.frame = 0;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe === 1) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 1;
      vitaprincipe4.frame = 1;
      vitaprincipe3.frame = 1;
      vitaprincipe2.frame = 1;
      vitaprincipe1.frame = 0;
    }
    if (dannoPrincipe < 1) {
      vitaprincipe20.frame = 1;
      vitaprincipe19.frame = 1;
      vitaprincipe18.frame = 1;
      vitaprincipe17.frame = 1;
      vitaprincipe16.frame = 1;
      vitaprincipe15.frame = 1;
      vitaprincipe14.frame = 1;
      vitaprincipe13.frame = 1;
      vitaprincipe12.frame = 1;
      vitaprincipe11.frame = 1;
      vitaprincipe10.frame = 1;
      vitaprincipe9.frame = 1;
      vitaprincipe8.frame = 1;
      vitaprincipe7.frame = 1;
      vitaprincipe6.frame = 1;
      vitaprincipe5.frame = 1;
      vitaprincipe4.frame = 1;
      vitaprincipe3.frame = 1;
      vitaprincipe2.frame = 1;
      vitaprincipe1.frame = 1;
    }
  }

  function potenziato1 () {
    potenziamento1.kill();
    danno++;
    if(danno === 3){
      extra = 1
    }
    if(danno === 4) {
      extra = 2;
    }
  }

  function potenziato2 () {
    potenziamento2.kill();
    danno++;
    if(danno === 3){
      extra = 1;
    }
    if(danno === 4) {
      extra = 2;
    }
  }

  function interfacciaSpeciale(){
    if(presa1===true){
    gemma1.frame = 0;
    }
    if(presa2===true){
    gemma2.frame = 1;
    }
    if(presa3===true){
    gemma3.frame = 2;
    }
  }

  function scettro1 () {
    sasso1.kill();
    scettro++;
    presa1=true;
    respawnX = sasso1.x;
    respawnY = sasso1.y-20;
  }

  function scettro2 () {
    sasso2.kill();
    scettro++;
    presa2=true;
    respawnX = sasso2.x;
    respawnY = sasso2.y-20;
  }

  function scettro3 () {
    sasso3.kill();
    scettro++;
    presa3=true;
    respawnX = sasso3.x;
    respawnY = sasso3.y-20;
  }

  function respawnBoss(){
    if(player.body.position.x>138*unità && player.body.position.y>47.5*unità){
      respawnX = 133*unità;
      respawnY = 45.5*unità;
    }
  }

  function timer1muovi() {
    platformCad1.immovable = false;
    platformCad1.y=-100;
    platformCad1.alpha=0;
  }
  function timer2muovi() {
    platformCad2.immovable = false;
    platformCad2.y=-100;
    platformCad2.alpha=0;
  }
  function timer3muovi() {
    platformCad3.immovable = false;
    platformCad3.y=-100;
    platformCad3.alpha=0;
  }
  function timer4muovi() {
    platformCad4.immovable = false;
    platformCad4.y=-100;
    platformCad4.alpha=0;
  }
  function timer5muovi() {
    platformCad5.immovable = false;
    platformCad5.y=-100;
    platformCad5.alpha=0;
  }
  function timer6muovi() {
    platformCad6.immovable = false;
    platformCad6.y=-100;
    platformCad6.alpha=0;
  }
  function timer7muovi() {
    platformCad7.immovable = false;
    platformCad7.y=-100;
    platformCad7.alpha=0;
  }
  function timer8muovi() {
    platformCad8.immovable = false;
    platformCad8.y=-100;
    platformCad8.alpha=0;
  }
  function timer9muovi() {
    platformCad9.immovable = false;
    platformCad9.y=-100;
    platformCad9.alpha=0;
  }

  function timer1reset() {
    platformCad1.y=platformCad1.originalPosition;
    platformCad1.alpha=1;
    platformCad1.immovable = true;
      platformCad1.animations.stop();
      platformCad1.frame=0;
    rotturaCad1 = false;
  }
  function timer2reset() {
    platformCad2.y=platformCad2.originalPosition;
    platformCad2.alpha=1;
    platformCad2.immovable = true;
  platformCad2.animations.stop();
  platformCad2.frame=0;
    rotturaCad2 = false;
  }
  function timer3reset() {
    platformCad3.y=platformCad3.originalPosition;
    platformCad3.alpha=1;
    platformCad3.immovable = true;
  platformCad3.animations.stop();
  platformCad3.frame=0;
    rotturaCad3 = false;
  }
  function timer4reset() {
    platformCad4.y=platformCad4.originalPosition;
    platformCad4.alpha=1;
    platformCad4.immovable = true;
  platformCad4.animations.stop();
  platformCad4.frame=0;
    rotturaCad4 = false;
  }
  function timer5reset() {
    platformCad5.y=platformCad5.originalPosition;
    platformCad5.alpha=1;
    platformCad5.immovable = true;
  platformCad5.animations.stop();
  platformCad5.frame=0;
    rotturaCad5 = false;
  }
  function timer6reset() {
    platformCad6.y=platformCad6.originalPosition;
    platformCad6.alpha=1;
    platformCad6.immovable = true;
  platformCad6.animations.stop();
  platformCad6.frame=0;
    rotturaCad6 = false;
  }
  function timer7reset() {
    platformCad7.y=platformCad7.originalPosition;
    platformCad7.alpha=1;
    platformCad7.immovable = true;
  platformCad7.animations.stop();
  platformCad7.frame=0;
    rotturaCad7 = false;
  }
  function timer8reset() {
    platformCad8.y=platformCad8.originalPosition;
    platformCad8.alpha=1;
    platformCad8.immovable = true;
  platformCad8.animations.stop();
  platformCad8.frame=0;
    rotturaCad8 = false;
  }

  function rottura1(player, platformCad1) {
    if(player.body.touching.down && !rotturaCad1){
      platformCad1.animations.play('cadiPlatform');
      game.time.events.add(2000, timer1muovi);
      game.time.events.add(6000, timer1reset);
      rotturaCad1 = true;
    }
  }

  function rottura2(player, platformCad2) {
    if(player.body.touching.down && !rotturaCad2){
      platformCad2.animations.play('cadiPlatform');
       game.time.events.add(2000, timer2muovi);
       game.time.events.add(6000, timer2reset);
       rotturaCad2 = true;
    }
  }

  function rottura3(player, platformCad3) {
    if(player.body.touching.down && !rotturaCad3){
      platformCad3.animations.play('cadiPlatform');
       game.time.events.add(2000, timer3muovi);
       game.time.events.add(6000, timer3reset);
       rotturaCad3 = true;
    }
  }

  function rottura4(player, platformCad4) {
    if(player.body.touching.down && !rotturaCad4){
      platformCad4.animations.play('cadiPlatform');
       game.time.events.add(2000, timer4muovi);
       game.time.events.add(6000, timer4reset);
       rotturaCad4 = true;
    }
  }

  function rottura5(player, platformCad5) {
    if(player.body.touching.down && !rotturaCad5){
      platformCad5.animations.play('cadiPlatform');
       game.time.events.add(2000, timer5muovi);
       game.time.events.add(6000, timer5reset);
       rotturaCad5 = true;
    }
  }

  function rottura6(player, platformCad6) {
    if(player.body.touching.down && !rotturaCad6){
      platformCad6.animations.play('cadiPlatform');
       game.time.events.add(2000, timer6muovi);
       game.time.events.add(6000, timer6reset);
       rotturaCad6 = true;
    }
  }

  function rottura7(player, platformCad7) {
    if(player.body.touching.down && !rotturaCad7){
      platformCad7.animations.play('cadiPlatform');
       game.time.events.add(2000, timer7muovi);
       game.time.events.add(6000, timer7reset);
       rotturaCad7 = true;
    }
  }

  function rottura8(player, platformCad8) {
    if(player.body.touching.down && !rotturaCad8){
      platformCad8.animations.play('cadiPlatform');
       game.time.events.add(2000, timer8muovi);
       game.time.events.add(6000, timer8reset);
       rotturaCad8 = true;
    }
  }

  function rottura9(player, platformCad9) {
    if(player.body.touching.down && !rotturaCad9){
      platformCad9.animations.play('cadiPlatform');
       game.time.events.add(2000, timer9muovi);
       rotturaCad9 = true;
    }
  }

  function patrol1(platformSem1) {
    if(platformSem1.body.position.y < 30*unità)
       platformSem1.body.velocity.y = 100;
    if (platformSem1.body.position.y > (36*unità-1))
       platformSem1.body.velocity.y = -100;
  }

  function patrol2(platformSem2) {
    if (platformSem2.body.position.y < 21*unità )
        platformSem2.body.velocity.y = 100;
    if (platformSem2.body.position.y > (36*unità-1))
        platformSem2.body.velocity.y = -100;
  }

  function patrol3(platformSem3) {
    if (platformSem3.body.position.x < (53*unità+1))
        platformSem3.body.velocity.x = 100;

    if (platformSem3.body.position.x > 68*unità)
        platformSem3.body.velocity.x = -100;
  }

  function patrol4(platformSem4) {
    if (platformSem4.body.position.x < (83*unità+1))
        platformSem4.body.velocity.x = 100;
    if (platformSem4.body.position.x > 91*unità)
        platformSem4.body.velocity.x = -100;
  }

  function patrol5(platformSem5) {
    if (platformSem5.body.position.x < (88*unità+1))
        platformSem5.body.velocity.x = 100;
    if (platformSem5.body.position.x > 97*unità)
        platformSem5.body.velocity.x = -100;
  }

  function patrol6(platformSem6) {
    if (platformSem6.body.position.x < (100*unità))
        platformSem6.body.velocity.x = 100;
    if (platformSem6.body.position.x > 109*unità-1)
        platformSem6.body.velocity.x = -100;
  }

  function patrol7(platformSem7) {
    if (platformSem7.body.position.y < (16*unità+1))
        platformSem7.body.velocity.y = 100;
    if (platformSem7.body.position.y > 22*unità)
        platformSem7.body.velocity.y = -100;
  }

  function patrol8(platformSem8) {
    if (platformSem8.body.position.y < 17*unità)
        platformSem8.body.velocity.y = 100;
    if (platformSem8.body.position.y > (23*unità-1))
        platformSem8.body.velocity.y = -100;
  }

  function patrol9(platformSem9) {
    if (platformSem9.body.position.y < (34*unità+1))
        platformSem9.body.velocity.y = 100;
    if (platformSem9.body.position.y > 44*unità)
        platformSem9.body.velocity.y = -100;
  }

  function activate10(){
    attivata10 = true;
  }

  function patrol10( platformSem10) {
    if(attivata10 === true){
      if (platformSem10.body.position.y < 37*unità+2)
          platformSem10.body.velocity.y = 0;
      if (platformSem10.body.position.y > 56*unità-1)
          platformSem10.body.velocity.y = -100;
    }
  }

  function appariSem10() {
    platformSem10.y=platformSem10.originalPosition;
    platformSem10.body.immovable = true;
  }

  function patrolEnemy1(enemy1) {
    if (enemy1.body.position.x < (53*unità+1)){
        enemy1.body.velocity.x = 100;
          enemy1.body.setSize(25,31,2,1);
        enemy1.animations.play('enemyRight')}
    if (enemy1.body.position.x > 62*unità){
        enemy1.body.velocity.x = -100;
          enemy1.body.setSize(25,31,5,1);
        enemy1.animations.play('enemyLeft')}
  }

  function patrolEnemy2(enemy2) {
    if (enemy2.body.position.x < (110*unità+1)){
        enemy2.body.velocity.x = 100;
          enemy2.body.setSize(25,31,2,1);
        enemy2.animations.play('enemyRight')}
    if (enemy2.body.position.x > 122*unità){
        enemy2.body.velocity.x = -100;
          enemy2.body.setSize(25,31,5,1);
        enemy2.animations.play('enemyLeft')}
  }

  function patrolEnemy3(enemy3) {
    if (enemy3.body.position.x < (125*unità+1)){
        enemy3.body.velocity.x = 100;
          enemy3.body.setSize(25,31,2,1);
        enemy3.animations.play('enemyRight')}
    if (enemy3.body.position.x > 136*unità){
        enemy3.body.velocity.x = -100;
          enemy3.body.setSize(25,31,5,1);
        enemy3.animations.play('enemyLeft')}
  }

  function collisioneProiettili(player, proiettili) {
    danneggiato();
    proiettili.kill();
    if (danno<1){
      catturato=true;
    }
  }

  function collisioneNemico1(player, enemy1) {
    if (animationActive === true) {

        uccidiEnemy1();
    }
    else{
        if(player.body.touching.down) {
           enemy1.kill();
        }
        if(player.body.touching.down===false){
           danneggiato();
           if (danno<1){
             catturato=true;
           }
        }

    }
  }

  function collisioneNemico2(player, enemy2) {
    if (animationActive === true) {
        uccidiEnemy2();
    }
    else{
        if(player.body.touching.down) {
           enemy2.kill();
        }
        if(player.body.touching.down===false){
           danneggiato();
           if (danno<1){
             catturato=true;
           }
        }
    }
  }

  function collisioneNemico3(player, enemy3) {
    if (animationActive === true) {
        uccidiEnemy3();
    }
    else{
        if(player.body.touching.down) {
           enemy3.kill();
        }
        if(player.body.touching.down===false){
           danneggiato();
           if (danno<1){
             catturato=true;
           }
        }
    }
  }

  function collisioneNemico4(player, enemy4) {
    if (animationActive === true) {
        uccidiEnemy4();
    }
    else{
        if(Math.floor(player.body.position.y) +  Math.floor( player.body.height) <= enemy4.body.position.y) {
           uccidiEnemy4();
        } else {
           danneggiato();
           if (danno<1){
             catturato=true;
           }
        }
    }
  }

  function timer2() {
    if(animationActive === true){

       animationActive = false;
    }
  }

  function timer3() {
    if(animationActive === true){
       animationActive = false;
    }
  }

  function timer4() {
    if(animationActive === true){
       animationActive = false;
    }
  }

  function timer5() {
    if(animationActive === true){
       animationActive = false;
     }
  }

  function uccidiEnemy1() {
    enemy1.kill();

  }

  function uccidiEnemy2() {
    enemy2.kill();
  }

  function uccidiEnemy3() {
    enemy3.kill();
  }

  function uccidiEnemy4() {
    enemy4.shooting = !enemy4.shooting;
    enemy4.kill();
    appariSem10();
  }


  function combattimento1(){
    if(animazione.isDown && !animationActive){
       animationActive = true;
       game.time.events.add(800, timer2);
    }
  }

  function combattimento2(){
    if(animazione.isDown && !animationActive){
       animationActive = true;
       game.time.events.add(800, timer3);
    }
  }

  function combattimento3(){
    if(animazione.isDown && !animationActive){
       animationActive = true;
       game.time.events.add(800, timer4);
    }
  }

  function combattimento4(){
    if(animazione.isDown && !animationActive){
       animationActive = true;
       game.time.events.add(800, timer5);
    }
  }

  function collisioneMuri(proiettili, layer){
    proiettili.kill();
  }

  function collisionePlat10(platformSem10, proiettili){
    proiettili.kill();
  }

  function collisioneRovi1(rovi1, proiettili){
    proiettili.kill();
  }

  function collisioneRovi2(rovi2, proiettili){
    proiettili.kill();
  }

 if (principe.body.position.x > posizionePrincipe) {
   sxPrincipe = true;
 }
 if (principe.body.position.x < posizionePrincipe) {
   sxPrincipe = false;
 }

 if (statoPrincipe === 3 && principe.body.velocity.x < 0){
   principe.animations.play ('camminataLeft');
 }
 if (statoPrincipe === 3 && principe.body.velocity.x > 0){
   principe.animations.play ('camminataRight');
 }
if (sxPrincipe === true && statoPrincipe === 0){
  principe.animations.play ('camminataLeft');
}
if (sxPrincipe === false && statoPrincipe === 0) {
  principe.animations.play ('camminataRight');
}

if (principe.body.velocity.x < 0 && statoPrincipe === 2){
  principe.animations.play ('attaccoLeft');
}
if (principe.body.velocity.x > 0 && statoPrincipe === 2) {
  principe.animations.play ('attaccoRight');
}

  function movimentoPrincipe(principe){
    if(statoPrincipe===0 && player.body.x > 139*unità && player.body.y > 47.5*unità){
       principe.body.velocity.x = (player.body.x - principe.body.x)/2;
         posizionePrincipe = player.body.position.x;
       if((Math.abs(principe.body.x - player.body.x)<6*unità)) {
          principe.body.velocity.x = 0;
          statoPrincipe = 1;
          if (sxPrincipe === true) {
          principe.animations.play('caricamentoLeft');
        }
        if (sxPrincipe === false) {
        principe.animations.play('caricamentoRight');
      }
          game.time.events.add(2000, timerCaricamento);
       }
    }
  }

  function parlaPrincipe(){
  if ((Math.abs(principe.body.x - player.body.x)<6*unità) && dialogoprinci === false) {
    game.paused = true;
    dialogoprincipe.alpha = 1;
  }
}
  function timerCaricamento() {
    if(statoPrincipe === 1){
       statoPrincipe = 2;
       attaccoPrincipe();
    }
  }

  function timerattaccoPrincipe(){
    statoPrincipe=3;
    arretramentoPrincipe();
  }

  function timerArretramentoPrincipe(){
    statoPrincipe=0;
  }

  function attaccoPrincipe(){
    if(statoPrincipe===2){
       if(posizionePrincipe<principe.body.position.x)
          principe.body.velocity.x=-500;
       if(posizionePrincipe>principe.body.position.x)
          principe.body.velocity.x=500;
       game.time.events.add(1000, timerattaccoPrincipe);
    }
  }

  function arretramentoPrincipe(){
    if(statoPrincipe===3){
      posizionePrincipe=player.body.position.x;
       if(posizionePrincipe<principe.body.position.x)
          principe.body.velocity.x=250;
       if(posizionePrincipe>principe.body.position.x)
          principe.body.velocity.x=-250;
       game.time.events.add(1000, timerArretramentoPrincipe);
    }
  }

  function timerMortePrincipe(){
    principe.kill();
    game.state.start('Good');
  }

  function mortePrincipe(){
    if(dannoPrincipe < 1){
      statoPrincipe=4;
      principe.body.velocity.x=0;
      if (sxPrincipe === false && dannoPrincipe < 1) {
      principe.animations.play ('morteRight');
      }
      if (sxPrincipe === true && dannoPrincipe < 1) {
       principe.animations.play ('morteLeft');
      }
      game.time.events.add(2000, timerMortePrincipe);
      }
   }

  function collisionePrincipe(player, principe) {
    if(statoPrincipe === 2) {
       danneggiato();
    }
    else if(statoPrincipe === 4){
      }
    else if(statoPrincipe === 0 || statoPrincipe === 1 || statoPrincipe === 3){
       if(animationActive === true){
          uccidiPrincipe();
       }
       else{
          danneggiato();
       }
    }
  }

  function timerPincipeAttaccato(){
    if(principeAttaccato === true){
       principeAttaccato = false;
    }
  }

  function timerAttaccoSpeciale(){
    speciale = true;
    magia = true;
  }

  function uccidiPrincipe() {
    if(speciale===false && principeAttaccato===false){
       dannoPrincipe--;
    }
    if(speciale===true && principeAttaccato===false){
       speciale = false;
       magia = false;
       dannoPrincipe = dannoPrincipe - colpoSpeciale;
       game.time.events.add(10000, timerAttaccoSpeciale);
    }
    principeAttaccato = true;
    game.time.events.add(800, timerPincipeAttaccato);
  }

  function specialePronto(){
    if( scettro === 3 && magia === true){
    speciale=true;
    if(specialeAvviso===true){
      game.paused = true;
      dialogospeciale1.alpha = 1;
    }
  }
  }

  function timerCombattimentoPrincipe() {
    if(animationActive === true){
       animationActive = false;
    }
  }

  function combattimentoPrincipe(){
    if(animazione.isDown && !animationActive){
       animationActive = true;
       game.time.events.add(800, timerCombattimentoPrincipe);
    }
  }
if (player.body.position.x > 16*unità) {
  if(player.body.velocity.x === velocity){
     this.back.tilePosition.x += 0.6;
  }
  if(player.body.velocity.x === -velocity){
     this.back.tilePosition.x -= 0.6;
  }

  if(player.body.velocity.x === velocity){
     this.back1.tilePosition.x += 0.3;
  }
  if(player.body.velocity.x === -velocity){
     this.back1.tilePosition.x -= 0.3;
  }
}




       if(player.body.onFloor() || player.body.touching.down)
          altezzaPrecedente = player.body.position.y;

       player.body.velocity.x = 0;


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
           player.animations.play('morteLeft');
         }
         if(sx===false){
           player.animations.play('morteRight');
         }
       }

       else if (danno > 0) {
         if(scalatrice===false){
         if (speciale === false) {
           if (!animationActive) {
             if (player.body.onFloor() || player.body.touching.down){
               if (sx === true) {
                 if(player.body.velocity.x<0){
                 player.animations.play('left');
               }
               else if(player.body.velocity.x===0){
                   player.animations.stop();
                   player.frame=6;
               }
               }
               else if (sx === false) {
                 if(player.body.velocity.x>0){
                 player.animations.play('right');
               }
               else if(player.body.velocity.x===0){
                   player.animations.stop();
                   player.frame=4;
               }
               }
             }
             else if (!player.body.onFloor() && !player.body.touching.down) {
               if (sx === true) {
                 player.animations.play('saltoLeft');
               }
               else if (sx === false) {
                 player.animations.play('saltoRight');
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

        else if (speciale === true) {
          if (!animationActive) {
            if (player.body.onFloor() || player.body.touching.down){
              if (sx === true) {
                if(player.body.velocity.x<0){
                player.animations.play('leftSP');
              }
              else if(player.body.velocity.x===0){
                  player.animations.stop();
                  player.frame=101;
              }
              }
              else if (sx === false) {
                if(player.body.velocity.x>0){
                player.animations.play('rightSP');
              }
              else if(player.body.velocity.x===0){
                  player.animations.stop();
                  player.frame=99;
              }
              }
            }
            else if (!player.body.onFloor() && !player.body.touching.down) {
              if (sx === true) {
                player.animations.play('saltoLeftSP');
              }
              else if (sx === false) {
                player.animations.play('saltoRightSP');
              }
            }
          }
         else if (animationActive) {
           if (player.body.onFloor() || player.body.touching.down){
             if (sx === true) {
               player.animations.play('attLeftSP');
             }
             else if (sx === false) {
               player.animations.play('attRightSP');
             }
           }
           else if (!player.body.onFloor() && !player.body.touching.down) {
             if (sx === true) {
               player.animations.play('saltoAttLeftSP');
             }
             else if (sx === false) {
               player.animations.play('saltoAttRightSP');
             }
           }
        }
      }
    }
    else if(scalatrice===true){
      if(cursors.up.isDown){
          player.animations.play('scalata', 5, true);
      }
      else if(cursors.down.isDown){
            player.animations.play('scalata', 5, true);
        }
            else{
              player.animations.stop('scalata');
              player.frame=51;
            }
    }
}



  if(player.x > 27*unità-16 && player.x < 29*unità-16 && player.y > 47*unità+16.5||
     player.x > 32*unità-16 && player.x < 33*unità-16 && player.y > 37*unità+16.5 && player.y < 42*unità ||
     player.x > 56*unità-16 && player.x < 58*unità-16 && player.y > 49*unità+16.5 && player.y < 56*unità ||
     player.x > 67*unità-16 && player.x < 68*unità-16 && player.y > 37*unità+16.5 && player.y < 45*unità ||
     player.x > 75*unità-16 && player.x < 77*unità-16 && player.y > 16*unità+16.5 && player.y < 32*unità ||
     player.x > 98*unità-16 && player.x < 99*unità-16 && player.y > 32*unità+16.5 && player.y < 39*unità ||
     player.x > 147*unità-16 && player.x < 148*unità-16 && player.y > 14*unità+16.5 && player.y < 29*unità){

       scalatrice=true;

     altezzaPrecedente=player.body.position.y;

     if(cursors.left.isDown){
        player.body.velocity.x = -velocity;
        player.body.velocity.y = -5;
     }
     else if (cursors.right.isDown){
        player.body.velocity.x = velocity;
        player.body.velocity.y = -5;
     }
     else if (cursors.up.isDown){
        player.body.velocity.y = -100;
      }
     else if (cursors.down.isDown){
        player.body.velocity.y = velocity;
        }
     else{
        player.body.velocity.y = -5;
     }
   }

   else{
     scalatrice=false;
   }


},

}

game.state.add('Game1', Game1State);

var GoodState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/Finale.png');
        game.load.image('finale', 'assets2/dialogoFinale.png');
    },

    create: function() {
      game.world.setBounds(0,0,1024, 768);
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        image.inputEnabled = true;
        image.events.onInputDown.add(this.appariDialogo, this);
        auroraFinale = game.add.sprite(212, 430, 'finale');
        auroraFinale.alpha = 0;
        fine=false;
    },

    appariDialogo: function(pointer) {
if (fine===true) {
  auroraFinale.alpha =0;
   window.location.href = "index.html";
}
if (fine===false) {
fine=true;
auroraFinale.alpha =1;
}
    }

}

game.state.add('Good', GoodState);


var BadState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets1/hai perso.png');
        game.load.image('riprova', 'assets1/riprova.png');
        game.load.image('bottHome', 'assets1/tornaacasa.PNG');
        game.load.spritesheet('aurorachepiange', 'assets1/aurora che piange.png', 406, 339)
    },

    create: function() {
      game.world.setBounds(0,0,1024, 768);
        background = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        background.anchor.set(0.5);
        image = game.add.sprite(680, 640, 'riprova');
        image.inputEnabled = true;
        image.events.onInputDown.add(this.imageClick, this);
        bottHome = game.add.sprite(100, 640, 'bottHome');
        bottHome.inputEnabled = true;
        bottHome.events.onInputDown.add(this.bottHomeClick, this);
        piange = game.add.sprite(350, 300, 'aurorachepiange');
        piange.animations.add('piagnona', [0,1,2,3,4,5,6,7,8,9,10], 6, true);
        piange.animations.play('piagnona', 6, true);
        danno = 2;
        danneggiamento = false;
        catturato=false;
        statoPrincipe = 0;
        attivata10=false;
    },

    imageClick: function(pointer) {
        this.game.state.start('Game1');
    },


    bottHomeClick: function(pointer){
         window.location.href = "index.html";
    }

}

game.state.add('Bad', BadState);

game.state.start('Game1');

var BadFinaleState = {

    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/finaleNegativo.png');
        game.load.image('riprova', 'assets2/riprova.png');
        game.load.image('principeFinale', 'assets2/principeFinale.png');
        game.load.image('bottHome', 'assets2/tornaCasa.png');

    },

    create: function() {

      game.world.setBounds(0,0,1024, 768);
      this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
        image = game.add.sprite(game.world.centerX, game.world.centerY, 'open');
        image.anchor.set(0.5);
        image.inputEnabled = true;
        image.events.onInputDown.add(this.appariDialoghi, this);
        riprova = game.add.sprite(40, 40, 'riprova');
        riprova.scale.setTo(0.2,0.2)
        riprova.alpha=0;
        bottHome = game.add.sprite(854, 40, 'bottHome');
        bottHome.scale.setTo(0.5,0.5)
        bottHome.alpha=0;
        principeFinale = game.add.sprite(212, 430, 'principeFinale');
        principeFinale.alpha = 0;
        danno = 2;
        danneggiamento = false;
        catturato=false;
        statoPrincipe = 0;
        attivata10=false;
        if (scettro===3){
          speciale=true;
        }
    },

    appariDialoghi: function(pointer) {

        if (principeFinale.alpha === 1) {
        riprova.alpha=1;
        riprova.inputEnabled = true;
        riprova.events.onInputDown.add(this.imageClick, this);
        bottHome.alpha=1;
        bottHome.inputEnabled = true;
        bottHome.events.onInputDown.add(this.bottHomeClick, this);
                  }
        if (principeFinale.alpha ===0) {
        principeFinale.alpha = 1;
        }
      },

      imageClick: function(pointer) {
          this.game.state.start('Game1');
      },


      bottHomeClick: function(pointer){
           window.location.href = "index.html";
      }

}

game.state.add('BadFinale', BadFinaleState);

game.state.start('Game1');

function create() {
}

function update () {
}

function render () {
}
