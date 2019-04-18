import {Protagoniste} from './Protagoniste';
import {Assiette} from './Assiette';
import {Cuillere} from './Cuillere';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

   //Gestion du jeu
   private refScene = null;
   private estDemarre = false;

   //Gestion des personnages
   private refMinuterieAssiette:number = null;
   private refMinuterieCuillere:number = null;
   private nbAssiettes = 3;
   private nbCuilleres = 4;
   private tAssiettes = [];
   private tCuilleres = [];

   //Gestion du protagoniste
   private protagoniste = null;

   public constructor(refScene:createjs.Stage) {
     this.refScene = refScene;
     this.demarrer();
   }

   public demarrer():void {
     this.estDemarre = true;

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
     this.protagoniste = new Protagoniste(this.refScene, 125, 125);
   }

   public creerAssiette():void {

     let yHasard:number = Math.floor(Math.random() * 600);

     //Gestion de la generation d'obstacles
     if(this.tAssiettes.length == this.nbAssiettes-1) {
       console.log('nombre maximal atteint');
       window.clearInterval(this.refMinuterieAssiette);
     }

     //Instanciation de l'objet
     this.tAssiettes.push(new Assiette(this.refScene, 800, yHasard, 2));

     console.log(`Tableau d'assiettes: ${this.tAssiettes}`);
   }

   public creerCuillere():void {

     let yHasard:number = Math.floor(Math.random() * 600);

     //Gestion de la generation d'antagonistes
     if(this.tCuilleres.length == this.nbCuilleres-1) {
       console.log('nombre maximal de cuilleres atteint');
       window.clearInterval(this.refMinuterieCuillere);
     }

     //Instanciation de l'objet
     this.tCuilleres.push(new Cuillere(this.refScene, 800, yHasard, 4));

     console.log(`Tableau de cuilleres: ${this.tCuilleres}`);
   }


   //En construction...
   private arreter() {

   }

}
