class HeroGunLevel2 extends HeroGun{
	constructor(ship){
		super(ship,"gun01.png","laserRed01.png");
		this.bulletSpeed=1000;
		this.reloadTime=250;
	}
}