import {Protagoniste} from './Protagoniste';
import {Assiette} from './Assiette';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

   private refMinuterieAssiette:number = null;
   private nbAssiettes = 3;

   private protagoniste = null;
   private tAssiettes = [];
   private tCuilleres = null;
   private refScene = null;
   private estDemarre = false;

   public constructor(refScene:createjs.Stage) {
     this.refScene = refScene;

     if(this.refMinuterieAssiette === null) {
       this.refMinuterieAssiette = window.setInterval(this.creerAssiette.bind(this), 1000*1.7);
     }

     this.demarrer();
   }

   public demarrer():void {
     this.estDemarre = true;

     //Protagoniste
     this.protagoniste = new Protagoniste(this.refScene, 125, 125);


   }

   public creerAssiette():void {

     if(this.tAssiettes.length == this.nbAssiettes-1) {
       console.log('nombre maximal atteint');
       window.clearInterval(this.refMinuterieAssiette);
     }

     //Assiettes
     let yHasard:number = Math.floor(Math.random() * 600);
     this.tAssiettes.push(new Assiette(this.refScene, 800, yHasard));

     console.log(`Tableau d'assiettes: ${this.tAssiettes}`);
   }
}
