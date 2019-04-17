import {ObjMobile} from './ObjMobile';

export class Assiette extends ObjMobile {


  public constructor(refScene:createjs.Stage, posX:number, posY:number) {
    super(refScene, posX, posY)
  }

  protected dessiner():void {
    window.lib.clipAssiette.call(this);
    this.frameBounds = window.lib.clipAssiette.prototype.framebounds;
  }

  // protected gererFinScene():void {
  //   super.arreter();
  // }
}
