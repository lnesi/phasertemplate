
class Game{
	engine: Object;
	constructor(){
		var w=window.innerWidth*window.devicePixelRatio;
		var h=window.innerHeight*window.devicePixelRatio;
		this.engine=new Phaser.Game(w,h, Phaser.CANVAS, '', { preload: this.preload, create: this.created,update:this.update });
		console.log(this.engine);
	}
	preload(){
		
		this.load.atlasXML('mainsprite','assets/sprites/sheet.png','assets/sprites/sheet.xml');
	}
	created(){
		console.log("CREATED");
		sprite1 = this.add.sprite(0, 0,  'mainsprite', 'playerShip1_blue.png');

	}
	update(){

	}
}