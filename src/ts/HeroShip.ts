class KeyInput{
	left:Phaser.Key
	right:Phaser.Key 
}

class HeroShip{
	engine: PhaserGame
	body:Object
	displayGroup:Phaser.Group
	movementControls:KeyInput
	physics_body:Phaser.Sprite
	horizontal_velicity:number=200
	fireControl:Phaser.Key
	gun:HeroGun
	constructor(engine:PhaserGame,x:number,y:number){
		
		this.engine=engine;
		this.displayGroup=this.engine.add.group();

		var shipBody = this.engine.add.sprite(0, 0,  'mainsprite', 'playerShip1_blue.png');
		shipBody.anchor.setTo(0.5,0.5);
		shipBody.alpha=1;

		this.physics_body = this.engine.add.sprite(0, 0,  'mainsprite', 'playerShip1_blue.png');
		this.engine.physics.enable(this.physics_body, Phaser.Physics.ARCADE,true);
		this.physics_body.body.collideWorldBounds = true;
		this.physics_body.anchor.setTo(0.5,0.5);
		this.physics_body.alpha=0;

		var shipEngine = this.engine.add.sprite(0, 0,  'mainsprite', 'engine3.png');
		shipEngine.anchor.setTo(0.5,0.5);

		var shipFire = this.engine.add.sprite(0, 0, 'mainsprite');
		var frames_fire=Phaser.Animation.generateFrameNames('fire', 8, 10, '.png', 2);
		shipFire.animations.add('on', frames_fire, 30, true);
		shipFire.animations.play('on');
		shipFire.anchor.setTo(0.5,0.5);
		
		shipEngine.y=shipBody.height/2+5;

		shipFire.y=shipEngine.y+20
		
		this.displayGroup.add(shipFire);
		this.displayGroup.add(shipEngine);
		this.displayGroup.add(shipBody);
		
		
		//this.displayGroup.anchor.setTo(0.5, 0.5);

		// this.displayGroup.enableBody = true;
		// this.displayGroup.enableBodyDebug=true;
  //   	this.displayGroup.physicsBodyType = Phaser.Physics.ARCADE;
		

		
		//this.sbody = this.engine.add.sprite(0, 0,  'mainsprite', 'playerShip1_blue.png');
		this.displayGroup.x=x;
		this.displayGroup.y=y;
		this.physics_body.x=x;
		this.physics_body.y=y;
		this.setupControls();

		
		this.engine.registerUpdate(this.update.bind(this));

		this.gun=new HeroGunLevel2(this);

	}

	
	setupControls(){
		this.movementControls=this.engine.input.keyboard.createCursorKeys();
		this.fireControl=this.engine.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}
	
	
	getX(){
		return this.displayGroup.x;
	}
	getY(){
		return this.displayGroup.y;
	}
	update(){
		
		this.physics_body.body.velocity.x=0;
		

		if (this.movementControls.left.isDown){

            this.physics_body.body.velocity.x=-this.horizontal_velicity;
            
        }else if (this.movementControls.right.isDown){
           this.physics_body.body.velocity.x=this.horizontal_velicity;
             
        }

        if (this.fireControl.isDown){
            this.gun.fire();
        }
 		this.displayGroup.x=this.physics_body.x;
 		this.engine.debug.body(this.physics_body);
 		this.engine.debug.bodyInfo(this.physics_body, 32, 32);
	}
}