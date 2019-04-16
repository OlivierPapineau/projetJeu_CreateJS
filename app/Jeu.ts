import {Protagoniste} from './Protagoniste';

export class Jeu {


  /*
   * @Todo: creer les fichiers de classe pour les elements de la scene
   */

   private protagoniste = null;
   private tAssiettes = null;
   private tCuilleres = null;
   private refScene = null;
   private estDemarre = false;

   public constructor(refScene:createjs.Stage) {
     this.refScene = refScene;

     this.demarrer();
   }

   public demarrer():void {
     this.estDemarre = true;

     //Protagoniste
     this.protagoniste = new Protagoniste(this.refScene, 125, 125);
   }
}
