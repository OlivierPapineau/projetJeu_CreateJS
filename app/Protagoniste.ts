import {ObjVisible} from './ObjVisible';

export class Protagoniste extends ObjVisible {

  private gererToucheDown_lier = this.gererToucheDown.bind(this);
  private gererToucheUp_lier = this.gererToucheUp.bind(this);
  private perdreVie_lier = this.perdreVie.bind(this);
  private refMinuterie:number = null;
  private tTouches:Array<boolean> = null;
  //private tAssiettes = null;
  //private tCuilleres = null;
  //private refVies = null;

  public constructor(refScene:createjs.Stage, posX:number, posY:number) {
    super(refScene, posX, posY);
    window.onkeydown = this.gererToucheDown_lier;
    window.onkeyup = this.gererToucheUp_lier;
    this.tTouches = new Array();
    //tAssiettes
    //tCuilleres
    this.addEventListener('tick', this.perdreVie_lier);

    for(let intCpt:number = 0; intCpt <= 4; intCpt++) {
      this.tTouches[intCpt] = false;
    }
  }

  protected dessiner():void {
    window.lib.clipTimmy.call(this);
    this.frameBounds = window.lib.clipTimmy.prototype.frameBounds;
  }

  private gererToucheDown(e:KeyboardEvent):void {
    this.refMinuterie = window.setInterval(this.faireBougerProtago.bind(this), 30);

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
        this.tTouches[4] = true;
        e.preventDefault();
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
      case 32 :
        this.tTouches[4] = false;
        e.preventDefault();
        break;
    }

    if(e.keyCode == null) {
      window.clearInterval(this.refMinuterie);
      this.refMinuterie = null;
    }
  }

  private faireBougerProtago():void {
    if(this.tTouches[0] == true) {
        this.x = this.x - 0.5;
    }

    if(this.tTouches[1] == true){
        this.y = this.y - 0.5;
    }

    //flèche droite
    if(this.tTouches[2] == true){
        this.x = this.x + 0.5;
    }

    //flèche bas
    if(this.tTouches[3] == true){
        this.y = this.y + 0.5;
    }

    //Barre espace
    if(this.tTouches[4] == true) {
      console.log('nouveau projectile');
    }
  }

  public perdreVie() {
    
  }

}
