import {ObjMobile} from './ObjMobile';
import {Protagoniste} from './Protagoniste';
import { Jeu } from './Jeu';
import { Projectile } from './Projectile';

export class Cuillere extends ObjMobile {

  private ref_Jeu = null;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, vitesse:number, jeu:Jeu) {
    super(refScene, posX, posY, vitesse);

    this.ref_Jeu = jeu;

    this.gotoAndPlay('marche');

    //window.setInterval(this.detecterProjectile.bind(this), 1000/10);
  }

  protected dessiner():void {
    window.lib.clipCuillere.call(this);
    this.frameBounds = window.lib.clipCuillere.prototype.framebounds;
  }

  // private detecterProjectile() {
  //   for(let i:number = 0; i < this.ref_tProjectiles.length; i++) {
  //     if(this.ref_tProjectiles[i].y - this.y < 20) {
  //       let estTouche:boolean = this.ref_tProjectiles[i].detecterCollision(this);
  //       if(estTouche) {
  //         console.log('COLLISION');
  //         //this.mourir();
  //       }
  //     }
  //   }
  // }

  private mourir():void {
    this.gotoAndPlay('mort');
    window.clearInterval();
    
    this.ref_Jeu.detruireCuillere(this);
    window.setTimeout(this.arreter.bind(this), 1500);
  }

  protected gererFinScene():void {
    //super.arreter();
  }

  public arreterCuillere():void {
    super.arreter();
  }

  /**
  *
  * METHODES SPECIFIQUES A L'ANTAGONISTE
  *
  */
}
