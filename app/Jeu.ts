import {Protagoniste} from './Protagoniste';
import {Assiette} from './Assiette';
import {Cuillere} from './Cuillere';
import {DecorFixe} from './DecorFixe';
import {DecorDefilant} from './DecorDefilant';
import {Projectile} from './Projectile';
import {Afficheur} from './Afficheur';
import {EcranNiveau} from './EcranNiveau';
import {EcranIntro} from './EcranIntro';
import {EcranRetro} from './EcranRetro';
import { ProjectileSpecial } from './ProjectileSpecial';
import { Trame } from './Trame';
import { SonFX } from './SonFX';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

  //Gestion de l'interface graphique
  private GUI = null;

  //Gestion des ecrans tierces
  private ecranIntro = null;
  private ecranNiveau = null;
  private ecranRetroaction = null;

  //Gestion du jeu
  private refScene = null;
  private estDemarre = false;
  private tDecorDefilant = [];
  private decorFixe = null;
  private intNiveau = 1;

  //Gestion des personnages
  private refMinuterieAssiette:number = null;
  private refMinuterieCuillere:number = null;
  private nbAssiettes = 2;
  private nbCuilleres = 3;
  private tAssiettes = [];
  private tCuilleres = [];

  //Gestion des munitions
  private vitesseProjectile = 7;
  private munitionMoutarde = null;
  private tProjectiles = [];
  private tProjectilesSpeciaux = [];

  //Gestion du protagoniste
  private protagoniste = null;

  //Gestion des sons
  public tSons = [];

  public constructor(refScene:createjs.Stage) {
    this.refScene = refScene;

    //Chargement des sons
    this.tSons.push(new Trame('../sons/son_ambience.mp3', ['mp3'], '1', 1, -1));
    this.tSons.push(new SonFX('../sons/son_contact_projectile.mp3', ['mp3'], '2', 20));
    this.tSons.push(new SonFX('../sons/son_defaite.mp3', ['mp3'], '3', 20));
    this.tSons.push(new SonFX('../sons/son_finVie_antagoniste.mp3', ['mp3'], '4', 20));
    this.tSons.push(new SonFX('../sons/son_finVie_avatar.mp3', ['mp3'], '5', 20));
    this.tSons.push(new SonFX('../sons/son_tir_projectile.mp3', ['mp3'], '6', 20));
    this.tSons.push(new SonFX('../sons/son_victoire.mp3', ['mp3'], '7', 20));


    this.introduire();
    //this.demarrer();
  }

  /*************************************************************/
  //GESTION DU DEBUT DU JEU
  /*************************************************************/

  public demarrer():void {
    this.estDemarre = true;

    this.tSons[0].demarrerSon();

    //Gestion des tableaux
    this.tCuilleres = [];
    this.tAssiettes = [];
    this.tDecorDefilant = [];

    //Decors
    this.creerDecorFixe();
    this.creerDecorDefilant();

    //Interface graphique
    this.creerGUI();

    //Antagoniste
    if(this.refMinuterieCuillere === null) {
      this.refMinuterieCuillere = window.setInterval(this.creerCuillere.bind(this), 1000*1.2);
    }

    //Protagoniste
    this.creerProtagoniste();

    //Obstacle
    if(this.refMinuterieAssiette === null) {
      this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000*1.7);
    }

    window.setInterval(this.gererProfondeur.bind(this), 1000/30);

  }

  public introduire():void {
    this.ecranIntro = new EcranIntro(this.refScene, 0, 0, this, -1);
  }

  public montrerNiveau():void {
    let niveau = this.intNiveau;
    this.ecranNiveau = new EcranNiveau(this.refScene, 0, 0, this, niveau, -1);

    window.setTimeout(this.demarrer.bind(this), 3000);

    // if(this.ecranIntro != null || this.ecranIntro != undefined) {
    //   window.setTimeout(this.ecranNiveau.arreterEcranNiveau(), 3000);
    // }
  }

  /*************************************************************/
  //GESTION DE LA PROFONDEUR
  /*************************************************************/

  // private gererProfondeur():void {
  //   this.refScene.sortChildren(this.comparerY.bind(this));
  // }

  // private comparerY(a:any, b:any):number {
  //   if(a.y > b.y)
  //     return 1;
  //   else if (a.y < b.y)
  //     return -1;
  //   else
  //     return 0;
  // }


  /*************************************************************/
  //GESTION DE L'INTERFACE
  /*************************************************************/  

  public creerGUI():void {
    this.GUI = new Afficheur(this.refScene, 0, 0, this, -1);
  }

  /*************************************************************/
  //GESTION DU PROTAGONISTE
  /*************************************************************/ 

  public creerProtagoniste():void {
    this.protagoniste = new Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this, this.GUI, 1);
  }

  /*************************************************************/
  //GESTION DES OBSTACLES
  /*************************************************************/ 

  public creerAssiette():void {
    let yHasard:number = Math.floor(Math.random() * 600) + 300;

    if(this.tAssiettes.length == this.nbAssiettes-1) {
      console.log('nombre maximal atteint');
      window.clearInterval(this.refMinuterieAssiette);
    }
    this.tAssiettes.push(new Assiette(this.refScene, 800, yHasard, 2, 1));
  }

  /*************************************************************/
  //GESTION DES ANTAGONISTES
  /*************************************************************/

  public creerCuillere():void {

    let yHasard:number = Math.floor(Math.random() * 600) + 300;

    //Gestion de la generation d'antagonistes
    if(this.tCuilleres.length == this.nbCuilleres-1) {
      console.log('nombre maximal de cuilleres atteint');
      window.clearInterval(this.refMinuterieCuillere);
    }

    //Instanciation de l'objet
    this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4, this, -1));

    //console.log(`Tableau de cuilleres: ${this.tCuilleres}`);
  }


  public detruireCuillere(index:number):void {
    let indexCuillere = this.tCuilleres.indexOf(index);
    this.tCuilleres.splice(indexCuillere, 1);

    //this.creerCuillere();
    window.setTimeout(this.ressusciterCuillere.bind(this), 1000);
  }

  public ressusciterCuillere():void {
    let yHasard:number = Math.floor(Math.random() * 600) + 300;
    this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4, this, 1));
  }



  /*************************************************************/
  //GESTION DES DECORS
  /*************************************************************/

  public creerDecorFixe():void {
    this.decorFixe = new DecorFixe(this.refScene , 0, 0, this, this.intNiveau, -1); 
  }

  public creerDecorDefilant():void {
    this.tDecorDefilant[0] = new DecorDefilant(this.refScene, 800, 0, 1, this, this.intNiveau, -1);
    this.tDecorDefilant[1] = new DecorDefilant(this.refScene, 1600, 0, 1,this, this.intNiveau, -1);
  }

  public creerProjectile(posX:number, posY:number) {
    this.tProjectiles.push(new Projectile(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres, 1));
  }

  public creerProjectileSpecial(posX:number, posY:number) {
    this.tProjectilesSpeciaux.push(new ProjectileSpecial(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres, 1));
  }


  //Gestion des scores
  public gererScore(iScore:number):void {
    //console.log('incrementation du score');
    this.GUI.incrementerScore(iScore);
  }


  /*************************************************************/
  //GESTION DES NIVEAUX
  /*************************************************************/
  public gererNiveaux(score:number):void {
    if(this.intNiveau == 1) {
      if(score >= 1000) {
        this.arreter();

        this.intNiveau = 2;

        this.montrerNiveau();
        window.setTimeout(this.demarrer.bind(this), 3000);
      }
    }
    if(this.intNiveau == 2) {
      if(score >= 2000) {
        this.arreter();
        this.tSons[6].demarrerSon();
        this.ecranRetroaction = new EcranRetro(this.refScene, 0, 0, this, 'victoire');
      }
    }
  }

  public perdrePartie():void {
    this.ecranRetroaction = new EcranRetro(this.refScene, 0, 0, this, 'defaite');
    this.tSons[2].demarrerSon();
  }


  /*************************************************************/
  //DESTRUCTEUR
  /*************************************************************/

  public arreter() {
    this.estDemarre = false;

    window.clearInterval();

    this.GUI.reset();
    this.GUI = null;

    this.refMinuterieAssiette = null;
    for(let i = 0; i < this.tAssiettes.length; i++) {
      this.tAssiettes[i].arreterAssiette();
    }
    this.tAssiettes = null;
    console.log(this.tAssiettes);
  
    this.refMinuterieCuillere = null;
    for(let i = 0; i < this.tCuilleres.length; i++) {
      this.tCuilleres[i].arreterCuillere();
    }
    this.tCuilleres = null;

    for(let i = 0; i < this.tDecorDefilant.length; i++) {
      this.tDecorDefilant[i].arreterDefilant();
    }
    this.tDecorDefilant = null;


    this.protagoniste.arreterProtagoniste();
    this.protagoniste = null;

    this.tSons[0].arreterSon();

  }

}
