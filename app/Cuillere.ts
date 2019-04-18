import {ObjMobile} from './ObjMobile';

export class Cuillere extends ObjMobile {

  public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number) {
    super(refScene, posX, posY, vitesse);
  }

  protected dessiner():void {
    window.lib.clipCuillere.call(this);
    this.frameBounds = window.lib.clipCuillere.prototype.framebounds;
  }

  protected gererFinScene():void {
    //super.arreter();
  }

  /**
  *
  * METHODE SPECIFIQUES A L'ANTAGONISTE
  *
  */

  private attaquer():void {

  }
}
