import {ObjMobile} from './ObjMobile';
import {Protagoniste} from './Protagoniste';
import { Jeu } from './Jeu';
import { Projectile } from './Projectile';

export class Cuillere extends ObjMobile {

  private ref_Jeu = null;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, jeu:Jeu, redimMax:number) {
    super(refScene, posX, posY, vitesse, redimMax);
    this.ref_Jeu = jeu;

    this.gotoAndPlay('marche');

  }

  protected dessiner():void {
    window.lib.clipCuillere.call(this);
    this.frameBounds = window.lib.clipCuillere.prototype.framebounds;
  }


  public mourir():void {
    this.gotoAndPlay('mort');
    window.clearInterval();
    
    this.ref_Jeu.detruireCuillere(this);
    window.setTimeout(this.arreter.bind(this), 1500);
  }

  protected gererFinScene():void {
    //super.arreter();
  }

  public arreterCuillere():void {
    console.log('ARRETER CUILLERE');
    super.arreter();
  }
}
