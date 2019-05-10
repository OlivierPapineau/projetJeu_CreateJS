import {Protagoniste} from './Protagoniste';
import {Assiette} from './Assiette';
import {Cuillere} from './Cuillere';
import {DecorFixe} from './DecorFixe';
import {DecorDefilant} from './DecorDefilant';
import {Projectile} from './Projectile';
import {Afficheur} from './Afficheur';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

  //Gestion de l'interface graphique
  private GUI = null;

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

  //Gestion du protagoniste
  private protagoniste = null;

  public constructor(refScene:createjs.Stage) {
    this.refScene = refScene;
    this.demarrer();
  }

  public demarrer():void {
    this.estDemarre = true;

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

   }

  /*************************************************************/
  //GESTION DE L'INTERFACE
  /*************************************************************/  

  public creerGUI():void {
    this.GUI = new Afficheur(this.refScene, 0, 0, this);
  }

  /*************************************************************/
  //GESTION DU PROTAGONISTE
  /*************************************************************/ 

  public creerProtagoniste():void {
    this.protagoniste = new Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this, this.GUI);
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
    this.tAssiettes.push(new Assiette(this.refScene, 800, yHasard, 2));
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
    this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4, this));

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
    this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4, this));
  }



  /*************************************************************/
  //GESTION DES DECORS
  /*************************************************************/

  public creerDecorFixe():void {
    this.decorFixe = new DecorFixe(this.refScene , 0, 0, this, this.intNiveau); 
  }

  public creerDecorDefilant():void {
    this.tDecorDefilant[0] = new DecorDefilant(this.refScene, 800, 0, 1, this, this.intNiveau);
    this.tDecorDefilant[1] = new DecorDefilant(this.refScene, 1600, 0, 1,this, this.intNiveau);
  }

  public creerProjectile(posX:number, posY:number) {
    this.tProjectiles.push(new Projectile(this.refScene, posX, posY, this.vitesseProjectile, this, this.tCuilleres));
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
      if(score == 150) {
        this.arreter();


        this.intNiveau = 2;
        window.setTimeout(this.demarrer.bind(this), 3000);
      }
    }
    if(this.intNiveau == 2) {
      if(score == 300) {
        this.arreter();
      }
    }
  }


  /*************************************************************/
  //DESTRUCTEUR
  /*************************************************************/

  public arreter() {
    this.estDemarre = false;

    this.refMinuterieAssiette = null;
    for(let i = 0; i < this.tAssiettes.length; i++) {
      this.tAssiettes[i].arreterAssiette();
    }
    this.tAssiettes = [];
  
    this.refMinuterieCuillere = null;
    for(let i = 0; i < this.tCuilleres.length; i++) {
      this.tCuilleres[i].arreterCuillere();
    }
    this.tCuilleres = [];

    for(let i = 0; i < this.tDecorDefilant.length; i++) {
      this.tDecorDefilant[i].arreterDefilant();
    }
    this.tDecorDefilant = [];


    this.protagoniste = null;

  }

}
