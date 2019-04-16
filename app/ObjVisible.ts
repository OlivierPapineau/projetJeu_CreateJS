
export abstract class ObjVisible extends createjs.MovieClip {
  private scene = null;

  public constructor(refScene:createjs.Stage, posX:number, posY:number) {
    super();
    this.dessiner();
    this.scene = refScene;
    this.gotoAndStop(0);
    refScene.addChild(this);
    this.x = posX;
    this.y = posY;
  }

  /**
   * Fonction retournerMonClip
   * @return retourne l'objet
   */

  protected retournerMonClip():createjs.MovieClip {
    return this;
  }

  protected abstract dessiner():void;

  protected retournerScene():createjs.Stage {
    return this.scene;
  }

  protected arreter() {
    this.scene.removeChild(this);
  }
}
