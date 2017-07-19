class Game{
	engine: Object
	background:Object
	hero:Object
	
	constructor(){
		var w=window.innerWidth*window.devicePixelRatio;
		var h=window.innerHeight*window.devicePixelRatio;
		this.engine=new Phaser.Game(480,640, Phaser.CANVAS, '', { preload: this.preload.bind(this), create: this.created.bind(this),update:this.update.bind(this),render:this.render.bind(this) });
		this.engine.customUpdates=[];

		this.engine.registerUpdate=function(callback){
			return this.engine.customUpdates.push(callback);
		}.bind(this);

		this.engine.unregisterUpdate=function(position){
			this.engine.customUpdates.splice(position,1);
		}.bind(this);
		
		

	}
	preload(){
		var w=window.innerWidth;//*window.devicePixelRatio;
		var h=window.innerHeight;//*window.devicePixelRatio;
		this.engine.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
		this.engine.physics.startSystem(Phaser.Physics.ARCADE);
 		
		//console.log(this.scale.scaleMode=Phaser.ScaleManager.RESIZE);
		//this.scale.setGameSize(w,h);
		this.engine.load.image('BackgroundDarkPurple','assets/img/darkPurple.png');
		this.engine.load.atlasXML('mainsprite','assets/sprites/sheet.png','assets/sprites/sheet.xml');
	}
	created(){
		this.background=new SpaceBackground(this.engine);

		this.hero=new HeroShip(this.engine,240,540);

		

	}

	update(){
		this.engine.customUpdates.forEach(function(callback){
			 callback();
		});
	}

	render(){
		//this.engine.debug.body(this.hero.physics_body);
	}
}