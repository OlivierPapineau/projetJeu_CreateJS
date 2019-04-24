import {ObjVisible} from './ObjVisible';
import {Cuillere} from './Cuillere';
import {Assiette} from './Assiette';

export class Protagoniste extends ObjVisible {

  private nombreVies:number = 3;
  private nombrePointsVies:number = 3;
  private invincible = false;

  //Liaison de fonctions
  private gererToucheDown_lier = this.gererToucheDown.bind(this);
  private gererToucheUp_lier = this.gererToucheUp.bind(this);

  //Pointeurs
  private refMinuterie:number = null;

  //Tableaux
  private tTouches:Array<boolean> = null;
  private tCuilleres = [];
  private tAssiettes = [];
  private static tLimitesDeplacements:any = {
    haut: 300,
    bas: 600,
    gauche: 0,
    droite: 800
  };
  //private tAssiettes = null;
  //private tCuilleres = null;
  //private refVies = null;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, tCuilleres, tAssiettes) {
    super(refScene, posX, posY);

    //Attribution de pointeurs
    this.tCuilleres = tCuilleres;
    this.tAssiettes = tAssiettes;

    //Attribution de methodes
    window.onkeydown = this.gererToucheDown_lier;
    window.onkeyup = this.gererToucheUp_lier;

    this.tTouches = new Array();

    //Ecouteurs d'evenements
    //this.addEventListener('tick', this.perdrePointVie_lier);
    window.setInterval(this.detecterCollision.bind(this), 1000/5);

    for(let intCpt:number = 0; intCpt <= 3; intCpt++) {
      this.tTouches[intCpt] = false;
    }
  }

  /*************************************************************/
  //GESTION DES COLLISIONS
  /*************************************************************/

  private detecterCollision():void {
    if(this.invincible !== true) {
      const hitBox = this.getTransformedBounds();
    
      for(let i:number = 0; i < this.tCuilleres.length; i++) {
        let hitBoxCuillere = this.tCuilleres[i].getTransformedBounds();

        if(hitBox.intersects(hitBoxCuillere)) {
          this.etreInvincible()
        }
      }

      for(let i:number = 0; i < this.tAssiettes.length; i++) {
        let hitBoxAssiette = this.tAssiettes[i].getTransformedBounds();

        if(hitBox.intersects(hitBoxAssiette)) {
          this.etreInvincible();
        }
      }

    }
  }

  private etreInvincible():void {
    this.invincible = true;
    window.setTimeout(this.arreterInvincible.bind(this), 1000);

    this.perdrePointVie();
  }

  private arreterInvincible():void {
    this.invincible = false;
  }

  private perdrePointVie():void {
    if(this.nombrePointsVies > 0) {
      this.nombrePointsVies -= 1;
      console.log(`Nombre de points de vie: ${this.nombrePointsVies}`);
    }
    if(this.nombrePointsVies === 0) {
      this.perdreVie();
      if(this.nombreVies > 0) {
        this.nombrePointsVies = 3;
      }
    }
  }

  private perdreVie() {
    if(this.nombreVies > 0) {
      this.nombreVies -= 1;
      console.log(`Nombre de vies: ${this.nombreVies}`);
    }
    if(this.nombreVies === 0) {
      console.log('GAME OVER');
      //METTRE METHODE POUR ARRETER LE JEU
    }
  }

  private tirerProjectile() {
    console.log('Nouveau projectile');
  }




  /*************************************************************/
  //GESTION DU CLAVIER
  /*************************************************************/

  protected dessiner():void {
    window.lib.clipTimmy.call(this);
    this.frameBounds = window.lib.clipTimmy.prototype.frameBounds;
    console.log('hamburger dessiner');
  }

  private gererToucheDown(e:KeyboardEvent):void {
    if(this.refMinuterie === null) {
      this.refMinuterie = window.setInterval(this.faireBougerProtago.bind(this), 35);
    }

    switch(e.keyCode) {
      case 37 :
        this.tTouches[0] = true;
        e.preventDefault();
        break;
      case 38 :
        this.tTouches[1] = true;
        e.preventDefault();
        break;
      case 39 :
        this.tTouches[2] = true;
        e.preventDefault();
        break;
      case 40 :
        this.tTouches[3] = true;
        e.preventDefault();
        break;
      case 32 :
        //Creation d'un nouveau projectile
        this.tirerProjectile();
        break;
    }
  }

  private gererToucheUp(e:KeyboardEvent):void {

    switch(e.keyCode) {
      case 37 :
        this.tTouches[0] = false;
        e.preventDefault();
        break;
      case 38 :
        this.tTouches[1] = false;
        e.preventDefault();
        break;
      case 39 :
        this.tTouches[2] = false;
        e.preventDefault();
        break;
      case 40 :
        this.tTouches[3] = false;
        e.preventDefault();
        break;
      // case 32 :
      //   this.tTouches[4] = false;
      //   e.preventDefault();
      //   break;
    }

    if(e.keyCode == null) {
      window.clearInterval(this.refMinuterie);
      this.refMinuterie = null;
    }
  }

  private faireBougerProtago():void {
    if(this.tTouches[0] == true) {
      if(this.x >= Protagoniste.tLimitesDeplacements.gauche) {
        this.x = this.x - 4;
      }
    }

    if(this.tTouches[1] == true){
      if(this.y >= Protagoniste.tLimitesDeplacements.haut) {
        this.y = this.y - 4;
      }
    }

    //flèche droite
    if(this.tTouches[2] == true){
      if(this.x <= Protagoniste.tLimitesDeplacements.droite) {
        this.x = this.x + 4;
      }
    }

    //flèche bas
    if(this.tTouches[3] == true){
      if(this.y <= Protagoniste.tLimitesDeplacements.bas) {
        this.y = this.y + 4;
      }
    }
  }
}
