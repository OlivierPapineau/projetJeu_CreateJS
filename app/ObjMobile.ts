import {ObjVisible} from './ObjVisible';


export abstract class ObjMobile extends ObjVisible {

  private vitesse = 5;
  private sens = -1;

  public constructor(refScene:createjs.Stage, posX:number, posY:number) {
    super(refScene, posX, posY);
  }

  protected avancer():void {
    this.x -= this.sens * this.vitesse;
  }

  protected abstract gererFinScene():void;

}
