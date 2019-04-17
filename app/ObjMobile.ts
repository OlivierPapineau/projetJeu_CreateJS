import {ObjVisible} from './ObjVisible';


export abstract class ObjMobile extends ObjVisible {

  private static vitesse = 5;
  private sens = -1;
  private avancer_lier = this.avancer.bind(this);

  public constructor(refScene:createjs.Stage, posX:number, posY:number) {
    super(refScene, posX, posY);

    this.addEventListener('tick', this.avancer_lier);
  }

  protected avancer():void {

    if(this.x == -100){
        this.x = 800;
        this.y = Math.floor(Math.random() * 600);
    }

    this.x += this.sens * ObjMobile.vitesse;
  }

  protected abstract gererFinScene():void;

  // protected arreter() {
  //   super.arreter();
  //   this.removeEventListener('tick', this.avancer_lier);
  // }

}
