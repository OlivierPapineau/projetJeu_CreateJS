import {ObjVisible} from './ObjVisible';
import {Cuillere} from './Cuillere';
import {Assiette} from './Assiette';
import {Jeu} from './Jeu';
import {Afficheur} from './Afficheur';

export class Protagoniste extends ObjVisible {

  private nombreVies:number = 3;
  private nombrePointsVies:number = 3;
  private invincible = false;

  //Liaison de fonctions
  private gererToucheDown_lier = this.gererToucheDown.bind(this);
  private gererToucheUp_lier = this.gererToucheUp.bind(this);

  //Pointeurs
  private refMinuterie:number = null;
  private refJeu:Jeu = null;
  private refAfficheur:Afficheur = null;

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

  private projectileUtilise = false;

  public constructor(refScene:createjs.Stage, posX:number, posY:number, tCuilleres:Array<Cuillere>, tAssiettes:Array<Assiette>, jeu:Jeu, gui:Afficheur, uneRedimMax:number) {
    super(refScene, posX, posY, uneRedimMax);


    //Animations
    this.gotoAndPlay('marche');

    //Attribution de pointeurs
    this.tCuilleres = tCuilleres;
    this.tAssiettes = tAssiettes;
    this.refJeu = jeu;
    this.refAfficheur = gui;

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

  /*************************************************************/
  //GESTION DES POINTS DE VIE
  /*************************************************************/

  private etreInvincible():void {
    this.invincible = true;
    window.setTimeout(this.arreterInvincible.bind(this), 1000);

    this.perdrePointVie();
    this.gotoAndPlay("collision");
  }

  private arreterInvincible():void {
    this.invincible = false;
  }

  private perdrePointVie():void {
    if(this.nombrePointsVies > 0) {
      this.nombrePointsVies -= 1;
      console.log(`Nombre de points de vie: ${this.nombrePointsVies}`);
      this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
    }
    if(this.nombrePointsVies === 0) {
      this.perdreVie();
      if(this.nombreVies > 0) {
        this.nombrePointsVies = 3;
        console.log(this.nombrePointsVies);
        this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
      }
    }
  }

  private perdreVie():void {
    if(this.nombreVies > 0) {
      this.nombreVies -= 1;
      console.log(`Nombre de vies: ${this.nombreVies}`);
      this.gererAffichageVies(this.nombreVies, this.nombrePointsVies);
    }
    if(this.nombreVies === 0) {
      console.log('GAME OVER');
      this.gotoAndPlay('mort');
      window.setTimeout(this.mourir.bind(this), 1500);
    }
  }

  private gererAffichageVies(nbVies:number, nbPoints:number):void {
    this.refAfficheur.gererVies(nbVies, nbPoints);
  }


  //Destructeur du protagoniste
  private mourir():void {
    super.arreter();
    window.clearInterval();
    window.onkeydown = null;
    window.onkeyup = null;
    this.refJeu.arreter();
    this.refJeu.perdrePartie();
  }

  /*************************************************************/
  //GESTION DES PROJECTILES
  /*************************************************************/

  private tirerProjectile() {
    console.log('Nouveau projectile');
    this.gotoAndPlay('tir');
    this.refJeu.creerProjectile(this.x, this.y - 80);
  }

  private tirerProjectileSpecial() {
    console.log('MUNITION SPECIALE');
    this.gotoAndPlay('tir');
    this.refJeu.creerProjectileSpecial(this.x, this.y - 80);
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
      case 65:
      case 37 :
        this.tTouches[0] = true;
        e.preventDefault();
        break;
      case 87:
      case 38 :
        this.tTouches[1] = true;
        e.preventDefault();
        break;
      case 68:
      case 39 :
        this.tTouches[2] = true;
        e.preventDefault();
        break;
      case 83:
      case 40 :
        this.tTouches[3] = true;
        e.preventDefault();
        break;
      case 32 :
        //Creation d'un nouveau projectile
        this.tirerProjectile();
        this.refJeu.tSons[5].demarrerSon();
        break;
      case 82 :
        //Creation de la munition speciale
        if(!this.projectileUtilise) {
          this.tirerProjectileSpecial();
          this.refJeu.tSons[5].demarrerSon();
        }
        this.projectileUtilise = true;
        this.attendreProchainProjectile();
        break;
    }
  }

  private attendreProchainProjectile():void {
    this.refAfficheur.changerEtat(this.projectileUtilise);
    window.setTimeout(this.prochainProjectilePret.bind(this), 5000);
  }

  private prochainProjectilePret():void {
    this.projectileUtilise = false;
    this.refAfficheur.changerEtat(this.projectileUtilise);
  }

  private gererToucheUp(e:KeyboardEvent):void {

    switch(e.keyCode) {
      case 65:
      case 37 :
        this.tTouches[0] = false;
        e.preventDefault();
        break;
      case 87:
      case 38 :
        this.tTouches[1] = false;
        e.preventDefault();
        break;
      case 68:
      case 39 :
        this.tTouches[2] = false;
        e.preventDefault();
        break;
      case 83:
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

    super.redimensionner();
  }

  public arreterProtagoniste():void {
    window.clearInterval(1000/5);
    window.onkeydown = null;
    window.onkeyup = null;
    super.arreter();
  }
}
