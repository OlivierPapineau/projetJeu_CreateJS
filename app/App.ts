import {Jeu} from './Jeu';

export class App {

  //Attributs
  private scene:createjs.Stage = null;
  private composite = null;

  public constructor() {
    //Importation des medias de la bibliotheque animate
    window.init(this);
  }

  public initialiser(refScene:createjs.Stage) {

    this.scene = refScene;
    createjs.Ticker.framerate = 30;


    this.composite = new Jeu(this.scene);
  }
}
