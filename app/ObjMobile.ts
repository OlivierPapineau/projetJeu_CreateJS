import {ObjVisible} from './ObjVisible';


export abstract class ObjMobile extends ObjVisible {

  private vitesse = null;
  private sens = -1;
  private avancer_lier = this.avancer.bind(this);
  private static limiteY_scene:number = 300;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number) {
    super(refScene, posX, posY);
    this.vitesse = vitesse;

    this.addEventListener('tick', this.avancer_lier);
  }

  protected avancer():void {

    if(this.x == -100){
        this.x = 800;
        this.y = Math.floor(Math.random() * 600) + ObjMobile.limiteY_scene;
    }

    this.x += this.sens * this.vitesse;
  }

  protected abstract gererFinScene():void;

  // protected arreter() {
  //   super.arreter();
  //   this.removeEventListener('tick', this.avancer_lier);
  // }

}
