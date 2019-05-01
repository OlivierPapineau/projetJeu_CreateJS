import {Protagoniste} from './Protagoniste';
import {Assiette} from './Assiette';
import {Cuillere} from './Cuillere';
import {DecorFixe} from './DecorFixe';
import {DecorDefilant} from './DecorDefilant';
import { Projectile } from './Projectile';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

   //Gestion du jeu
   private refScene = null;
   private estDemarre = false;
   private tDecorDefilant = [];
   private decorFixe = null;

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

     //Protagoniste
     this.creerProtagoniste();

     //Obstacle
     if(this.refMinuterieAssiette === null) {
       this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000*1.7);
     }

     //Antagoniste
     if(this.refMinuterieCuillere === null) {
       this.refMinuterieCuillere = window.setInterval(this.creerCuillere.bind(this), 1000*1.2);
     }

   }


   public creerProtagoniste():void {
     this.protagoniste = new Protagoniste(this.refScene, 125, 400, this.tCuilleres, this.tAssiettes, this);
   }

   public creerAssiette():void {
     let yHasard:number = Math.floor(Math.random() * 600) + 300;

     if(this.tAssiettes.length == this.nbAssiettes-1) {
       console.log('nombre maximal atteint');
       window.clearInterval(this.refMinuterieAssiette);
     }
     this.tAssiettes.push(new Assiette(this.refScene, 800, yHasard, 2));
   }

   public creerCuillere():void {

     let yHasard:number = Math.floor(Math.random() * 600) + 300;

     //Gestion de la generation d'antagonistes
     if(this.tCuilleres.length == this.nbCuilleres-1) {
       console.log('nombre maximal de cuilleres atteint');
       window.clearInterval(this.refMinuterieCuillere);
     }

     //Instanciation de l'objet
     this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4));

     //console.log(`Tableau de cuilleres: ${this.tCuilleres}`);
   }

   public creerDecorFixe():void {
      this.decorFixe = new DecorFixe(this.refScene , 0, 0, this, 2); 
   }

   public creerDecorDefilant():void {
      this.tDecorDefilant[0] = new DecorDefilant(this.refScene, 800, 0, 1, this, 2);
      this.tDecorDefilant[1] = new DecorDefilant(this.refScene, 1600, 0, 1,this, 2);
   }

   public creerProjectile(posX:number, posY:number) {
      this.munitionMoutarde = new Projectile(this.refScene, posX, posY, this.vitesseProjectile);
   }








   //En construction...
   public arreter() {
      this.estDemarre = false;

      this.refMinuterieAssiette = null;
      for(let i = 0; i < this.tAssiettes.length; i++) {
        this.tAssiettes[i].arreterAssiette();
      }
      this.tAssiettes = null;
    
      this.refMinuterieCuillere = null;
      for(let i = 0; i < this.tCuilleres.length; i++) {
        this.tCuilleres[i].arreterCuillere();
      }
      this.tCuilleres = null;

      for(let i = 0; i < this.tDecorDefilant.length; i++) {
        this.tDecorDefilant[i].arreterDefilant();
      }
      this.tDecorDefilant = null;


      this.protagoniste = null;

   }

}
